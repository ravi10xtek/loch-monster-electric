import { getCategoryHubCardImages, getNavigation, getLocations } from '../lib/cms'
import Header from './Header'

/**
 * Server component — fetches CategoryHub card images, CMS navigation
 * data, and per-city hero images, then passes everything to the
 * client Header component.
 */
export default async function HeaderWrapper() {
  const [hubImages, navigation, locations] = await Promise.all([
    getCategoryHubCardImages(),
    getNavigation(),
    getLocations(),
  ])

  // Build { slug: { url, alt, name, state } } map for the mega-menu hover preview
  const cityImages = {}
  for (const loc of locations || []) {
    if (loc.heroImage) {
      cityImages[loc.slug] = {
        url: loc.heroImage,
        alt: loc.heroImageAlt || `${loc.name}, ${loc.state}`,
        name: loc.name,
        state: loc.state,
      }
    }
  }

  return <Header hubImages={hubImages} navigation={navigation} cityImages={cityImages} />
}
