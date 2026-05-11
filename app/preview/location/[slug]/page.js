import { getLocationBySlug } from '../../../lib/cms'
import LocationPreviewClient from './LocationPreviewClient'

export default async function LocationPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getLocationBySlug(slug)
  return <LocationPreviewClient initialData={initialData} />
}
