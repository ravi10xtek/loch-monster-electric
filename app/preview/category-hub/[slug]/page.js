import { getCategoryHub } from '../../../lib/cms'
import CategoryHubPreviewClient from './CategoryHubPreviewClient'

export default async function CategoryHubPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getCategoryHub(slug) ?? {}
  return <CategoryHubPreviewClient slug={slug} initialData={initialData} />
}
