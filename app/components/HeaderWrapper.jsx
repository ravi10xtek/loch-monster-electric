import { getCategoryHubCardImages } from '../lib/cms'
import Header from './Header'

/**
 * Server component — fetches CategoryHub card images (keyed by slug)
 * and passes them to the client Header so the mega menu can show
 * the hub image instead of a placeholder gradient.
 */
export default async function HeaderWrapper() {
  const hubImages = await getCategoryHubCardImages()
  return <Header hubImages={hubImages} />
}
