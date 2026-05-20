import { getCategoryHubCardImages, getNavigation } from '../lib/cms'
import Header from './Header'

/**
 * Server component — fetches CategoryHub card images and CMS navigation
 * data, then passes both to the client Header component.
 */
export default async function HeaderWrapper() {
  const [hubImages, navigation] = await Promise.all([
    getCategoryHubCardImages(),
    getNavigation(),
  ])
  return <Header hubImages={hubImages} navigation={navigation} />
}
