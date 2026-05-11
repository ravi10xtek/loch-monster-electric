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
} from './normalize'

const BASE = process.env.CMS_URL || 'http://localhost:3001'

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
  const data = await fetchAPI(`/api/page-seo?${params}`)
  const doc = data?.docs?.[0]
  if (!doc) return null
  return {
    metaTitle: doc.metaTitle || null,
    metaDescription: doc.metaDescription || null,
    // ogImage may be a populated Media object or null
    ogImage: doc.ogImage?.url ? `${BASE}${doc.ogImage.url}` : null,
    canonicalUrl: doc.canonicalUrl || null,
    noIndex: doc.noIndex || false,
  }
}

/**
 * Build a Next.js Metadata object from a PageSEO record, with a fallback.
 * Pass `fallback` as { title, description } for the hardcoded defaults.
 */
export async function buildPageMetadata(pageSlug, fallback = {}) {
  const seo = await getPageSEO(pageSlug)
  const title = seo?.metaTitle || fallback.title || 'Loch Monster Electric'
  const description = seo?.metaDescription || fallback.description || ''

  const metadata = { title, description }

  if (seo?.canonicalUrl) {
    metadata.alternates = { canonical: seo.canonicalUrl }
  }
  if (seo?.noIndex) {
    metadata.robots = { index: false, follow: false }
  }
  if (seo?.ogImage) {
    metadata.openGraph = { images: [{ url: seo.ogImage }] }
    metadata.twitter = { images: [seo.ogImage] }
  }

  return metadata
}
