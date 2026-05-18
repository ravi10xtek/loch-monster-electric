/**
 * POST /api/revalidate
 *
 * Called by Payload CMS afterChange hooks to bust the Next.js ISR cache.
 *
 * Payload sends JSON: { secret, collection, slug? }
 *   secret      — must match REVALIDATION_SECRET env var
 *   collection  — 'posts' | 'locations' | 'services' | 'page-seo'
 *   slug        — (optional) specific record slug for targeted revalidation
 *
 * If slug is provided, only that path is revalidated.
 * Otherwise the entire cache tag for the collection is cleared.
 *
 * Setup:
 *   1. Add REVALIDATION_SECRET to both .env.local (website) and the CMS .env
 *   2. Add an afterChange hook in Payload that POSTs to this endpoint
 */
import { revalidatePath, revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

const SECRET = process.env.REVALIDATION_SECRET

/** Maps collection slug → cache tag and URL path builder */
const COLLECTION_MAP = {
  posts: {
    tag: 'posts',
    path: (slug) => slug ? `/journal/${slug}` : '/journal',
  },
  locations: {
    tag: 'locations',
    path: (slug) => slug ? `/service-areas/${slug}` : '/service-areas',
  },
  services: {
    tag: 'services',
    path: () => null, // services are nested — revalidate by tag only
  },
  'page-seo': {
    tag: 'page-seo',
    path: (slug) => slug ? `/${slug === '/' ? '' : slug}` : null,
  },
  pages: {
    tag: 'pages',
    path: (slug) => slug ? `/${slug}` : null,
  },
  'category-hubs': {
    tag: 'category-hubs',
    path: (slug) => {
      const map = {
        'electrical-repairs': '/residential-electrical-services/electrical-repairs',
        'electrical-upgrades': '/residential-electrical-services/electrical-upgrades',
        'installations': '/residential-electrical-services/installations',
        'safety-compliance': '/residential-electrical-services/safety-compliance',
        'commercial-repairs': '/commercial-electrical-services/commercial-repairs',
        'power-distribution': '/commercial-electrical-services/power-distribution',
        'lighting-systems': '/commercial-electrical-services/lighting-systems',
        'compliance-infrastructure': '/commercial-electrical-services/compliance-infrastructure',
        'hoa-common-areas': '/hoa-electrical-services/hoa-common-areas',
        'hoa-emergency-repairs': '/hoa-electrical-services/hoa-emergency-repairs',
        'hoa-ev-charging': '/hoa-electrical-services/hoa-ev-charging',
        'hoa-inspections': '/hoa-electrical-services/hoa-inspections',
      }
      return slug ? (map[slug] || null) : null
    },
  },
  faqs: {
    tag: 'faqs',
    path: () => '/',
  },
  'service-hubs': {
    tag: 'service-hubs',
    path: (slug) => {
      const map = {
        'residential-electrical-services': '/residential-electrical-services',
        'commercial-electrical-services': '/commercial-electrical-services',
        'hoa-electrical-services': '/hoa-electrical-services',
      }
      return slug ? (map[slug] || null) : null
    },
  },
  projects: {
    tag: 'projects',
    path: () => '/media',
  },
  // A media file changed (replaced upload, alt edit, etc). We don't know
  // which docs reference it, so invalidate every tag that *could* embed
  // a media URL, and revalidate the home + service-areas roots.
  media: {
    tag: [
      'posts',
      'locations',
      'services',
      'pages',
      'category-hubs',
      'service-hubs',
      'page-seo',
      'globals',
      'projects',
    ],
    path: () => '/',
  },
}

export async function POST(request) {
  // Validate secret
  if (!SECRET) {
    return NextResponse.json({ error: 'REVALIDATION_SECRET not configured' }, { status: 500 })
  }

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { secret, collection, slug } = body

  if (secret !== SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  const mapping = COLLECTION_MAP[collection]
  if (!mapping) {
    return NextResponse.json({ error: `Unknown collection: ${collection}` }, { status: 400 })
  }

  const revalidated = []

  // Always clear the collection cache tag(s)
  const tags = Array.isArray(mapping.tag) ? mapping.tag : [mapping.tag]
  for (const tag of tags) {
    revalidateTag(tag)
    revalidated.push(`tag:${tag}`)
  }

  // If a path builder exists, revalidate the specific URL(s)
  const path = mapping.path(slug)
  if (path) {
    revalidatePath(path)
    revalidated.push(`path:${path}`)
  }

  // Always revalidate the sitemap (it's dynamic and references all collections)
  revalidatePath('/sitemap.xml')
  revalidated.push('path:/sitemap.xml')

  return NextResponse.json({ revalidated, now: Date.now() })
}
