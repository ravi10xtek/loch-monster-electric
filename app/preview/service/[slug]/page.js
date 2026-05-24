import { getServiceBySlug } from '../../../lib/cms'
import ServicePreviewClient from './ServicePreviewClient'

export default async function ServicePreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getServiceBySlug(slug)
  return <ServicePreviewClient initialData={initialData} />
}
