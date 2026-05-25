import { getGlobal, getCategoryHubCardImages } from '../../../lib/cms'
import Services from '../../../components/Services'
import GlobalPreviewClient from './GlobalPreviewClient'

export default async function GlobalPreviewPage({ params }) {
  const { slug } = await params

  // Pre-fetch CategoryHub card images on the server. Used by:
  // - the Navigation preview's mega-menu
  // - the home-page preview's Services section (passed via servicesSlot)
  const [initialData, hubImages] = await Promise.all([
    getGlobal(slug).then(d => d ?? {}),
    slug === 'navigation' || slug === 'home-page'
      ? getCategoryHubCardImages()
      : Promise.resolve({}),
  ])

  // Only render Services on home-page preview (it's the only global that uses it)
  const servicesSlot =
    slug === 'home-page' ? <Services cardImages={hubImages} /> : null

  return (
    <GlobalPreviewClient
      slug={slug}
      initialData={initialData}
      hubImages={hubImages}
      servicesSlot={servicesSlot}
    />
  )
}
