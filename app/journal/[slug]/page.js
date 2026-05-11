import HomeInteractions from '../../ui/home-interactions'
import JournalPost from '../../components/JournalPost'
import { getPostBySlug, getRelatedPosts, getAllPostSlugs } from '../../lib/cms'
import {
  posts as staticPosts,
  getPostBySlug as staticGetPost,
  getRelatedPosts as staticRelated,
} from '../../data/journal'
import { notFound } from 'next/navigation'

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
  return {
    title: post.metaTitle || `${post.title} | Loch Monster Electric`,
    description: post.metaDescription || post.excerpt,
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params

  // Try CMS first; fall back to static file
  const post = (await getPostBySlug(slug)) ?? staticGetPost(slug)
  if (!post) notFound()

  const related =
    (await getRelatedPosts(slug, post.tags, 3)) ?? staticRelated(slug, post.tags, 3)

  return (
    <>
      <HomeInteractions />
      <JournalPost post={post} related={related} />
    </>
  )
}
