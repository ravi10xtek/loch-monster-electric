import { getPageBySlug } from '../../lib/cms'
import PreviewClient from './PreviewClient'

export default async function PreviewPage({ params }) {
  const { slug } = await params
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug
  const page = await getPageBySlug(slugStr)
  return <PreviewClient initialData={page} />
}
