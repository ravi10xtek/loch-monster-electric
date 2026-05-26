import HomeInteractions from '../../ui/home-interactions'
import JournalPost from '../../components/JournalPost'
import JsonLd from '../../components/JsonLd'
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '../../lib/cms'
import {
  posts as staticPosts,
  getPostBySlug as staticGetPost,
  getRelatedPosts as staticRelated,
} from '../../data/journal'
import { notFound } from 'next/navigation'

const BASE = process.env.SITE_URL || 'https://www.lochmonsterelectric.com'

// Pre-generate known slugs; allow new ones to be rendered on demand
export const dynamicParams = true

export async function generateStaticParams() {
  const cmsSlugs = await getAllPostSlugs()
  const slugs = cmsSlugs ?? staticPosts.map(p => p.slug)
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = (await getPostBySlug(slug)) ?? staticGetPost(slug)
  if (!post) return {}
  const SITE = process.env.SITE_URL || 'https://www.lochmonsterelectric.com'
  return {
    title: post.metaTitle || `${post.title} | Loch Monster Electric`,
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `${SITE}/blog/${slug}` },
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params

  // Try CMS first; fall back to static file
  const post = (await getPostBySlug(slug)) ?? staticGetPost(slug)
  if (!post) notFound()

  const related =
    (await getRelatedPosts(slug, post.tags, 3)) ?? staticRelated(slug, post.tags, 3)

  // ── JSON-LD ────────────────────────────────────────────────────────
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || '',
    datePublished: post.date || post.publishedAt || '',
    dateModified: post.updatedAt || post.date || post.publishedAt || '',
    url: `${BASE}/blog/${slug}`,
    image: post.coverImage || null,
    author: {
      '@type': 'Organization',
      name: 'Loch Monster Electric',
      url: BASE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Loch Monster Electric',
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo-footer-mark.png` },
    },
  }

  // FAQPage from the post's faq array (populated via CMS FaqAccordion fields)
  const faqSchema = post.faq?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null

  return (
    <>
      <JsonLd schema={articleSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <HomeInteractions />
      <JournalPost post={post} related={related} />
    </>
  )
}
