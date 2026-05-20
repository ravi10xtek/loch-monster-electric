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

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function serializeTextNode(node) {
  let text = escapeHtml(node.text || '')
  const fmt = node.format || 0
  if (fmt & 1)  text = `<strong>${text}</strong>`
  if (fmt & 2)  text = `<em>${text}</em>`
  if (fmt & 8)  text = `<code>${text}</code>`
  if (fmt & 4)  text = `<u>${text}</u>`
  if (fmt & 16) text = `<s>${text}</s>`
  return text
}

function serializeChildren(children) {
  return (children || []).map(serializeNode).join('')
}

function serializeNode(node) {
  const type = node.type
  if (type === 'text') return serializeTextNode(node)
  if (type === 'linebreak') return '<br />'
  if (type === 'paragraph') {
    const inner = serializeChildren(node.children)
    return inner.trim() ? `<p>${inner}</p>` : ''
  }
  if (type === 'heading') {
    const tag = node.tag || 'h2'
    return `<${tag}>${serializeChildren(node.children)}</${tag}>`
  }
  if (type === 'list') {
    const tag = node.listType === 'number' ? 'ol' : 'ul'
    return `<${tag}>${serializeChildren(node.children)}</${tag}>`
  }
  if (type === 'listitem') {
    return `<li>${serializeChildren(node.children)}</li>`
  }
  if (type === 'link') {
    const url = node.fields?.url || node.url || '#'
    return `<a href="${escapeHtml(url)}">${serializeChildren(node.children)}</a>`
  }
  if (type === 'quote') {
    return `<blockquote>${serializeChildren(node.children)}</blockquote>`
  }
  if (type === 'horizontalrule') return '<hr />'
  // Unknown — render children
  return serializeChildren(node.children)
}

function lexicalToHtml(body) {
  if (!body || typeof body !== 'object') return ''
  const children = body?.root?.children
  if (!Array.isArray(children)) return ''
  return children.map(serializeNode).join('')
}

export function normalizePost(p) {
  const bodyHtml = typeof p.body === 'object' && p.body?.root
    ? lexicalToHtml(p.body)
    : (p.bodyHtml || (typeof p.body === 'string' ? p.body : '') || '')
  return {
    ...p,
    date: p.publishedAt || p.date || null,
    body: bodyHtml,
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

export function normalizeProject(p) {
  return {
    ...p,
    coverImage: p.coverImage?.url ? {
      url: mediaUrl(p.coverImage.url),
      alt: p.coverImage.alt || p.title || '',
      sizes: p.coverImage.sizes || {},
    } : null,
    photos: (p.photos || []).map(photo => ({
      ...photo,
      image: photo.image?.url ? {
        url: mediaUrl(photo.image.url),
        alt: photo.image.alt || '',
      } : null,
    })),
  }
}

export function normalizeSocialPost(p) {
  return {
    ...p,
    thumbnail: p.thumbnail?.url ? {
      url: mediaUrl(p.thumbnail.url),
      alt: p.thumbnail.alt || p.caption || '',
    } : null,
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
