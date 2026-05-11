import { getAllPostSlugs, getAllLocationSlugs, getServiceSlugsByHub } from './lib/cms'
import { posts } from './data/journal'
import { allCities } from './data/serviceAreas'
import { serviceDetails } from './data/serviceDetails'

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

/**
 * Maps every parentHub slug to its category URL prefix.
 * Used to construct full service page URLs.
 */
const HUB_PARENT = {
  'electrical-repairs':        'residential-electrical-services',
  'electrical-upgrades':       'residential-electrical-services',
  'installations':             'residential-electrical-services',
  'safety-compliance':         'residential-electrical-services',
  'commercial-repairs':        'commercial-electrical-services',
  'power-distribution':        'commercial-electrical-services',
  'lighting-systems':          'commercial-electrical-services',
  'compliance-infrastructure': 'commercial-electrical-services',
  'hoa-common-areas':          'hoa-electrical-services',
  'hoa-emergency-repairs':     'hoa-electrical-services',
  'hoa-ev-charging':           'hoa-electrical-services',
  'hoa-inspections':           'hoa-electrical-services',
}

const ALL_HUBS = Object.keys(HUB_PARENT)

export default async function sitemap() {
  const now = new Date()

  // ── Static & category pages ──────────────────────────────────────
  const staticPages = [
    { url: BASE,                                             priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${BASE}/about-us`,                              priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/contact-us`,                            priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/pricing-estimates`,                     priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/service-areas`,                         priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/journal`,                               priority: 0.8, changeFrequency: 'weekly'  },
    { url: `${BASE}/residential-electrical-services`,       priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/commercial-electrical-services`,        priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/hoa-electrical-services`,               priority: 0.8, changeFrequency: 'monthly' },
  ].map(p => ({ ...p, lastModified: now }))

  // ── Hub landing pages (e.g. /residential-electrical-services/electrical-repairs) ──
  const hubPages = ALL_HUBS.map(hub => ({
    url: `${BASE}/${HUB_PARENT[hub]}/${hub}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  // ── Individual service pages ──────────────────────────────────────
  // CMS-first per hub; falls back to static serviceDetails.
  const serviceGroups = await Promise.all(
    ALL_HUBS.map(async hub => {
      const cmsSlugs = await getServiceSlugsByHub(hub)
      const slugs = cmsSlugs ?? Object.entries(serviceDetails)
        .filter(([, v]) => v.parentHub === hub)
        .map(([k]) => k)
      return slugs.map(slug => ({
        url: `${BASE}/${HUB_PARENT[hub]}/${hub}/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      }))
    })
  )
  const servicePages = serviceGroups.flat()

  // ── Service-area city pages ───────────────────────────────────────
  // High priority — critical for local SEO.
  const cmsCitySlugs = await getAllLocationSlugs()
  const citySlugs = cmsCitySlugs ?? allCities.map(c => c.slug)
  const cityPages = citySlugs.map(slug => ({
    url: `${BASE}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  // ── Journal / blog posts ──────────────────────────────────────────
  const cmsPostSlugs = await getAllPostSlugs()
  const postSlugs = cmsPostSlugs ?? posts.map(p => p.slug)
  const postPages = postSlugs.map(slug => ({
    url: `${BASE}/journal/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticPages, ...hubPages, ...servicePages, ...cityPages, ...postPages]
}
