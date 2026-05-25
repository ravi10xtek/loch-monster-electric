import { getLocationBySlug, getCategoryHubCardImages } from '../../../lib/cms'
import Services from '../../../components/Services'
import LocationPreviewClient from './LocationPreviewClient'

export default async function LocationPreviewPage({ params }) {
  const { slug } = await params
  // Fetch on the server once. Pass Services pre-rendered into the client
  // tree as a slot so live-preview re-renders don't re-invoke the fetch.
  const [initialData, cardImages] = await Promise.all([
    getLocationBySlug(slug),
    getCategoryHubCardImages(),
  ])
  return (
    <LocationPreviewClient
      initialData={initialData}
      servicesSlot={<Services cardImages={cardImages} />}
    />
  )
}
