import { getPostBySlug } from '../../../lib/cms'
import PostPreviewClient from './PostPreviewClient'

export default async function PostPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getPostBySlug(slug)
  return <PostPreviewClient initialData={initialData} />
}
