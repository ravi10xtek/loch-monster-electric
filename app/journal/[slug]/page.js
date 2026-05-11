import HomeInteractions from '../../ui/home-interactions'
import JournalPost from '../../components/JournalPost'
import { posts, getPostBySlug, getRelatedPosts } from '../../data/journal'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Loch Monster Electric`,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(slug, post.tags, 3)

  return (
    <>
      <HomeInteractions />
      <JournalPost post={post} related={related} />
    </>
  )
}
