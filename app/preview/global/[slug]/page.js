import { getGlobal, getCategoryHubCardImages, getCategoryHubSubServices } from '../../../lib/cms'
import Services from '../../../components/Services'
import GlobalPreviewClient from './GlobalPreviewClient'

export default async function GlobalPreviewPage({ params }) {
  const { slug } = await params

  // Pre-fetch CategoryHub card images + subservices on the server. Used by:
  // - the Navigation preview's mega-menu
  // - the home-page preview's Services section (passed via servicesSlot)
  const needsHubData = slug === 'navigation' || slug === 'home-page'
  const [initialData, hubImages, subServicesByHub] = await Promise.all([
    getGlobal(slug).then(d => d ?? {}),
    needsHubData ? getCategoryHubCardImages() : Promise.resolve({}),
    needsHubData ? getCategoryHubSubServices() : Promise.resolve({}),
  ])

  // Only render Services on home-page preview (it's the only global that uses it)
  const servicesSlot =
    slug === 'home-page'
      ? <Services cardImages={hubImages} subServicesByHub={subServicesByHub} />
      : null

  return (
    <GlobalPreviewClient
      slug={slug}
      initialData={initialData}
      hubImages={hubImages}
      servicesSlot={servicesSlot}
    />
  )
}
