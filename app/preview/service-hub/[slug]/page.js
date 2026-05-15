import { getServiceHub } from '../../../lib/cms'
import ServiceHubPreviewClient from './ServiceHubPreviewClient'

export default async function ServiceHubPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getServiceHub(slug) ?? {}
  return <ServiceHubPreviewClient slug={slug} initialData={initialData} />
}
