/**
 * cms.js — Payload CMS API client for the LME website.
 *
 * All functions return null on error so callers can fall back to
 * the static journal.js data while the CMS is being set up.
 *
 * Field mapping (Payload → journal.js shape):
 *   publishedAt  → date
 *   bodyHtml     → body
 *   toc[].item   → toc[]  (string array)
 */

import {
  normalizePost,
  normalizeLocation,
  normalizeService,
  normalizePage,
  normalizeProject,
  normalizeSocialPost,
  mediaUrl,
} from './normalize'
import { servicePages } from '../data/services'

// Maps service hub slug → static page data (authoritative tab/card structure)
const STATIC_HUB_DATA = {
  'residential-electrical-services': servicePages.residential,
  'commercial-electrical-services':  servicePages.commercial,
  'hoa-electrical-services':         servicePages.hoa,
}

// CMS_URL is server-only. NEXT_PUBLIC_CMS_URL is baked in at build time and
// available on the client. Using both means any accidental client-side fetch
// hits the real CMS instead of falling back to localhost:3001.
const BASE =
  process.env.CMS_URL ||
  process.env.NEXT_PUBLIC_CMS_URL ||
  'http://localhost:3001'

// ── Fetch helpers ──────────────────────────────────────────────────────────

async function fetchAPI(path, opts = {}) {
  try {
    const res = await fetch(`${BASE}${path}`, {
      next: { tags: ['posts'] },
      ...opts,
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Fetch all published posts, sorted newest-first.
 * Returns null if the CMS is unreachable.
 */
export async function getPosts() {
  const params = new URLSearchParams({
    'where[status][equals]': 'published',
    sort: '-publishedAt',
    limit: '100',
    depth: '1',
  })
  const data = await fetchAPI(`/api/posts?${params}`)
  if (!data?.docs?.length) return null
  return data.docs.map(normalizePost)
}

/**
 * Fetch a single published post by slug.
 * Returns null if not found or CMS is unreachable.
 */
export async function getPostBySlug(slug) {
  const params = new URLSearchParams({
    'where[slug][equals]': slug,
    'where[status][equals]': 'published',
    depth: '1',
    limit: '1',
  })
  const data = await fetchAPI(`/api/posts?${params}`)
  const doc = data?.docs?.[0]
  return doc ? normalizePost(doc) : null
}

/**
 * Fetch posts related by tag (excluding the current slug).
 * Returns null if the CMS is unreachable.
 */
export async function getRelatedPosts(slug, tags = [], limit = 3) {
  const params = new URLSearchParams({
    'where[slug][not_equals]': slug,
    'where[status][equals]': 'published',
    sort: '-publishedAt',
    limit: String(limit),
    depth: '1',
  })
  tags.forEach((t, i) => params.set(`where[tags][in][${i}]`, t))
  const data = await fetchAPI(`/api/posts?${params}`)
  if (!data?.docs?.length) return null
  return data.docs.map(normalizePost)
}

/**
 * Fetch all published slugs (for generateStaticParams).
 * Returns null if the CMS is unreachable.
 */
export async function getAllPostSlugs() {
  const params = new URLSearchParams({
    'where[status][equals]': 'published',
    limit: '200',
    depth: '0',
  })
  const data = await fetchAPI(`/api/posts?${params}`, { cache: 'no-store' })
  if (!data?.docs?.length) return null
  return data.docs.map(d => d.slug)
}

// ── Locations ──────────────────────────────────────────────────────────────

export async function getLocations() {
  const params = new URLSearchParams({ limit: '100', depth: '1' })
  const data = await fetchAPI(`/api/locations?${params}`)
  if (!data?.docs?.length) return null
  return data.docs.map(normalizeLocation)
}

export async function getLocationBySlug(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '1', limit: '1' })
  const data = await fetchAPI(`/api/locations?${params}`)
  const doc = data?.docs?.[0]
  return doc ? normalizeLocation(doc) : null
}

export async function getAllLocationSlugs() {
  const params = new URLSearchParams({ limit: '200', depth: '0' })
  const data = await fetchAPI(`/api/locations?${params}`, { cache: 'no-store' })
  if (!data?.docs?.length) return null
  return data.docs.map(d => d.slug)
}

// ── Services ───────────────────────────────────────────────────────────────

export async function getServiceBySlug(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '1', limit: '1' })
  const data = await fetchAPI(`/api/services?${params}`, {
    next: { tags: ['services', slug] },
  })
  const doc = data?.docs?.[0]
  return doc ? normalizeService(doc) : null
}

export async function getServiceSlugsByHub(parentHub) {
  const params = new URLSearchParams({
    'where[parentHub][equals]': parentHub,
    limit: '100',
    depth: '0',
  })
  const data = await fetchAPI(`/api/services?${params}`, { cache: 'no-store' })
  if (!data?.docs?.length) return null
  return data.docs.map(d => d.slug)
}

// ── Pages ──────────────────────────────────────────────────────────────────

export async function getPageBySlug(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '2', limit: '1' })
  const data = await fetchAPI(`/api/pages?${params}`)
  const doc = data?.docs?.[0]
  return doc ? normalizePage(doc) : null
}

export async function getAllPageSlugs() {
  const params = new URLSearchParams({ limit: '200', depth: '0' })
  const data = await fetchAPI(`/api/pages?${params}`, { cache: 'no-store' })
  if (!data?.docs?.length) return null
  return data.docs.map(d => d.slug)
}

// ── Page SEO ───────────────────────────────────────────────────────────────

/**
 * Fetch SEO metadata for a static page by its slug.
 * Slug is the path without leading slash — use '/' for the home page.
 * Returns null if not found or CMS is unreachable.
 *
 * Returned shape:
 *   { metaTitle, metaDescription, ogImage, canonicalUrl, noIndex }
 */
export async function getPageSEO(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '1', limit: '1' })
  const data = await fetchAPI(`/api/page-seo?${params}`, {
    next: { tags: ['page-seo', `page-seo:${slug}`] },
  })
  const doc = data?.docs?.[0]
  if (!doc) return null
  return {
    metaTitle: doc.metaTitle || null,
    metaDescription: doc.metaDescription || null,
    // ogImage may be a populated Media object or null.
    // Prefer the og-sized PNG variant (1200x630, social-platform compatible);
    // fall back to the original upload URL if the variant doesn't exist yet.
    ogImage: doc.ogImage?.sizes?.og?.url
      ? mediaUrl(doc.ogImage.sizes.og.url)
      : (doc.ogImage?.url ? mediaUrl(doc.ogImage.url) : null),
    canonicalUrl: doc.canonicalUrl || null,
    noIndex: doc.noIndex || false,
    schemaMarkup: doc.schemaMarkup || null,
  }
}

/**
 * Fetch a single service hub page by slug (residential, commercial, hoa).
 */
export async function getServiceHub(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '2' })
  const data = await fetchAPI(`/api/service-hubs?${params}`, {
    next: { tags: ['service-hubs', slug] },
  })
  return data?.docs?.[0] || null
}

/**
 * Manual aliases for card labels that don't exactly match a service title.
 * Keys are the card label (uppercase), values are the service title to use instead.
 */
const CARD_LABEL_ALIASES = {
  'PANEL UPGRADES':          'ELECTRICAL PANEL UPGRADE',
  'LIGHTING & CEILING FANS': 'CEILING FAN INSTALLATION',
  'GFCI / AFCI UPGRADES':    'GFCI & AFCI INSTALLATION',
  'SAFETY & COMPLIANCE':     'ELECTRICAL INSPECTIONS',
  'CODE INSPECTIONS':        'ELECTRICAL INSPECTIONS',
  'SERVICE UPGRADES':        'COMMERCIAL PANEL UPGRADES',
}

/**
 * Like getServiceHub but auto-fills each tab card's image from the
 * matching individual Service's heroImage when no explicit image is set.
 * Matches by card label → service title (with alias fallbacks).
 */
export async function getServiceHubWithImages(slug) {
  const [doc, serviceImages] = await Promise.all([
    getServiceHub(slug),
    getServiceImageMap(),
  ])
  if (!doc) return null

  const staticData = STATIC_HUB_DATA[slug]

  if (staticData?.whatWeHandle?.tabs?.length) {
    // Iterate over STATIC tabs (authoritative order, labels, ids, hrefs).
    // CMS tabs are only consulted for per-tab editorial fields (heading, body).
    doc.tabs = staticData.whatWeHandle.tabs.map(staticTab => {
      const cmsTab = doc.tabs?.find(ct => ct.href === staticTab.href) || {}
      const sourceCards = staticData.whatWeHandle.cards[staticTab.id] || []

      const enrichedCards = sourceCards.map(card => {
        if (card.image) return card
        const rawLabel = card.label?.trim().toUpperCase() || ''
        const resolvedLabel = CARD_LABEL_ALIASES[rawLabel] || rawLabel
        const byLabel = serviceImages[resolvedLabel] || null
        const bySlug = card.href ? serviceImages[card.href.split('/').filter(Boolean).pop()] : null
        const fallbackUrl = byLabel || bySlug || null
        return { ...card, image: fallbackUrl ? { url: fallbackUrl } : null }
      })

      return {
        // Pull any CMS editorial fields (heading, body) then overwrite structural ones
        ...cmsTab,
        id: staticTab.id,
        label: staticTab.label,
        href: staticTab.href,
        cards: enrichedCards,
      }
    })
  }
  return doc
}

/**
 * Build a Next.js Metadata object from a PageSEO record, with a fallback.
 * Pass `fallback` as { title, description } for the hardcoded defaults.
 */
/**
 * Returns a { [slug]: { url, alt } } map of CategoryHub cardImage uploads.
 * Used by the shared Services tabs component to show an image per card
 * when one has been uploaded in the CMS.
 */
export async function getCategoryHubCardImages() {
  const params = new URLSearchParams({ limit: '50', depth: '1' })
  const data = await fetchAPI(`/api/category-hubs?${params}`, {
    next: { tags: ['category-hubs'] },
  })
  if (!data?.docs?.length) return {}
  const map = {}
  for (const doc of data.docs) {
    if (doc.slug && doc.cardImage?.url) {
      map[doc.slug] = {
        url: mediaUrl(doc.cardImage.url),
        alt: doc.cardImage.alt || doc.title || doc.slug,
      }
    }
  }
  return map
}

/**
 * Returns a { [hubSlug]: [{ label, href }, ...] } map of CategoryHub subServices.
 * Used by the homepage Services tabs to render per-card sub-service pills
 * pointing at individual service pages.
 */
export async function getCategoryHubSubServices() {
  const params = new URLSearchParams({ limit: '50', depth: '0' })
  const data = await fetchAPI(`/api/category-hubs?${params}`, {
    next: { tags: ['category-hubs'] },
  })
  if (!data?.docs?.length) return {}
  const map = {}
  for (const doc of data.docs) {
    if (!doc.slug || !Array.isArray(doc.subServices)) continue
    map[doc.slug] = doc.subServices
      .filter((s) => s?.label && s?.readMoreHref)
      .map((s) => ({ label: s.label, href: s.readMoreHref }))
  }
  return map
}

/**
 * Fetches all individual services and returns a slug → heroImage URL map.
 * Used as a fallback when a CategoryHub subService has no explicit image set.
 * Matches against the last path segment of each subService's readMoreHref.
 */
async function getServiceImageMap() {
  const params = new URLSearchParams({ limit: '100', depth: '1' })
  const data = await fetchAPI(`/api/services?${params}`, {
    next: { tags: ['services'] },
  })
  const map = {}
  for (const doc of data?.docs || []) {
    if (!doc.heroImage?.url) continue
    const url = mediaUrl(doc.heroImage.url)
    // Key by slug (for CategoryHub readMoreHref matching)
    if (doc.slug) map[doc.slug] = url
    // Also key by uppercase title (for ServiceHub card label matching)
    if (doc.title) map[doc.title.trim().toUpperCase()] = url
  }
  return map
}

export async function getCategoryHub(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '2', limit: '1' })
  const [data, serviceImages] = await Promise.all([
    fetchAPI(`/api/category-hubs?${params}`, { next: { tags: ['category-hubs', slug] } }),
    getServiceImageMap(),
  ])
  const doc = data?.docs?.[0]
  if (!doc) return null
  return {
    slug: doc.slug || slug,
    hero: {
      eyebrow: doc.heroEyebrow || '',
      title: doc.heroTitleLines?.map(t => t.line) || [],
      tagline: doc.heroTagline || '',
      body: doc.heroBody || '',
      body2: doc.heroBody2 || null,
      image: doc.heroImage?.url ? mediaUrl(doc.heroImage.url) : null,
      imageAlt: doc.heroImage?.alt || null,
    },
    subServices: (doc.subServices || []).map(s => {
      // Extract the hub slug from the readMoreHref URL (last path segment)
      const hubSlug = s.readMoreHref
        ? s.readMoreHref.split('/').filter(Boolean).pop()
        : null
      const fallbackImage = hubSlug ? (serviceImages[hubSlug] || null) : null
      return {
        label: s.label,
        heading: s.heading,
        tagline: s.tagline || '',
        body: s.body,
        readMoreHref: s.readMoreHref || null,
        color: s.color || '#1a1a1a',
        gradient: s.gradient || 'linear-gradient(160deg,#111,#2a2a2a)',
        image: s.image?.url ? mediaUrl(s.image.url) : fallbackImage,
      }
    }),
  }
}

export async function getFaqs(tag) {
  const params = new URLSearchParams({ sort: 'sortOrder', limit: '6' })
  if (tag) {
    params.set('where[tags][in]', tag)
  }
  const data = await fetchAPI(`/api/faqs?${params}`, {
    next: { tags: ['faqs'] },
  })
  return data?.docs || null
}

export async function getGlobal(slug) {
  const data = await fetchAPI(`/api/globals/${slug}`, {
    next: { tags: ['globals', slug] },
  })
  return data || null
}

export async function getSiteSettings() {
  const data = await fetchAPI('/api/globals/site-settings', {
    next: { tags: ['site-settings'] },
  })
  return data || null
}

export async function getNavigation() {
  const data = await fetchAPI('/api/globals/navigation', {
    next: { tags: ['navigation'] },
  })
  return data || null
}

export async function getProjects() {
  const params = new URLSearchParams({ limit: '100', depth: '1', sort: '-completedAt' })
  const data = await fetchAPI(`/api/projects?${params}`, {
    next: { tags: ['projects'] },
  })
  return data?.docs?.map(normalizeProject) || []
}

export async function getSocialPosts() {
  const params = new URLSearchParams({ limit: '12', depth: '1', sort: '-publishedAt' })
  const data = await fetchAPI(`/api/social-posts?${params}`, {
    next: { tags: ['social-posts'] },
  })
  return data?.docs?.map(normalizeSocialPost) || []
}

export async function buildPageMetadata(pageSlug, fallback = {}) {
  const seo = await getPageSEO(pageSlug)
  const title = seo?.metaTitle || fallback.title || 'Loch Monster Electric'
  const description = seo?.metaDescription || fallback.description || ''

  const metadata = { title, description }

  // Canonical: prefer the CMS value, otherwise build a default from pageSlug.
  // Default canonical points to the production domain so search engines
  // consolidate ranking signals regardless of which deployment URL they
  // crawl (e.g. *.vercel.app preview vs lochmonsterelectric.com).
  const SITE = process.env.SITE_URL || 'https://www.lochmonsterelectric.com'
  const path = pageSlug === '/' ? '' : `/${String(pageSlug).replace(/^\/+/, '')}`
  metadata.alternates = { canonical: seo?.canonicalUrl || `${SITE}${path}` }

  if (seo?.noIndex) {
    metadata.robots = { index: false, follow: false }
  }
  if (seo?.ogImage) {
    metadata.openGraph = { images: [{ url: seo.ogImage }] }
    metadata.twitter = { images: [seo.ogImage] }
  }

  return metadata
}
