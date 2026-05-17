/**
 * normalize.js — client-safe data normalisers for Payload CMS documents.
 *
 * These are extracted from cms.js so they can be imported by both server
 * functions (cms.js) and client-side Live Preview components.
 *
 * Uses NEXT_PUBLIC_CMS_URL so it works in the browser too.
 */

const CMS_BASE =
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001')
    : (process.env.CMS_URL || 'http://localhost:3001')

/** Resolves a Payload media URL to an absolute URL */
export function mediaUrl(url) {
  if (!url) return null
  if (url.startsWith('http')) return url
  return `${CMS_BASE}${url}`
}

export function normalizePost(p) {
  return {
    ...p,
    date: p.publishedAt || p.date || null,
    body: p.bodyHtml || p.body || '',
    toc: Array.isArray(p.toc)
      ? p.toc.map(t => (typeof t === 'string' ? t : t?.item ?? ''))
      : [],
    coverImage: p.coverImage?.url ? mediaUrl(p.coverImage.url) : null,
  }
}

export function normalizeLocation(p) {
  return {
    ...p,
    nearby: (p.nearby || []).map(n => (typeof n === 'object' ? n.slug : n)),
    heroImage: p.heroImage?.url ? mediaUrl(p.heroImage.url) : null,
    heroImageAlt: p.heroImage?.alt || null,
  }
}

export function normalizeService(p) {
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
      image: p.heroImage?.url ? mediaUrl(p.heroImage.url) : null,
      imageAlt: p.heroImage?.alt || null,
    },
    whenDoYouNeed: {
      whenHeading: p.whenHeading,
      gradient: p.whenGradient,
      color: p.whenColor,
      image: p.whenImage?.url ? mediaUrl(p.whenImage.url) : null,
      imageAlt: p.whenImage?.alt || null,
      scenarios: (p.scenarios || []).map(s => ({ heading: s.heading, body: s.body })),
    },
  }
}

export function normalizePage(p) {
  return {
    ...p,
    blocks: (p.blocks || []).map(block => {
      if (block.image?.url) {
        return { ...block, image: { ...block.image, url: mediaUrl(block.image.url) } }
      }
      return block
    }),
    seo: {
      title: p.seoTitle || null,
      description: p.seoDescription || null,
      ogImage: p.ogImage?.url ? mediaUrl(p.ogImage.url) : null,
      noIndex: p.noIndex || false,
    },
  }
}
