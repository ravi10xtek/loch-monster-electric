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

const BASE = process.env.CMS_URL || 'http://localhost:3001'

/** Transform a raw Payload post into the same shape as journal.js entries */
function normalizePost(p) {
  return {
    // Pass everything through first so extra fields (id, etc.) are available
    ...p,
    // Remap field name differences
    date: p.publishedAt || p.date || null,
    body: p.bodyHtml || p.body || '',
    toc: Array.isArray(p.toc)
      ? p.toc.map(t => (typeof t === 'string' ? t : t?.item ?? ''))
      : [],
    // coverImage URL (Payload returns an object, journal.js has no image URL field)
    coverImage: p.coverImage?.url ? `${BASE}${p.coverImage.url}` : null,
  }
}

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

function normalizeLocation(p) {
  return {
    ...p,
    // nearby may be populated objects or IDs — normalize to slug strings
    nearby: (p.nearby || []).map(n => (typeof n === 'object' ? n.slug : n)),
  }
}

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

function normalizeService(p) {
  return {
    ...p,
    seo: {
      title: p.seoTitle,
      description: p.seoDescription,
    },
    hero: {
      eyebrow: p.heroEyebrow,
      title: (p.heroTitle || []).map(t => t.line),
      tagline: p.heroTagline,
      body: p.heroBody,
    },
    whenDoYouNeed: {
      whenHeading: p.whenHeading,
      gradient: p.whenGradient,
      color: p.whenColor,
      scenarios: (p.scenarios || []).map(s => ({ heading: s.heading, body: s.body })),
    },
  }
}

export async function getServiceBySlug(slug) {
  const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '0', limit: '1' })
  const data = await fetchAPI(`/api/services?${params}`)
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
