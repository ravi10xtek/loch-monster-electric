import { getGlobal, getCategoryHubCardImages } from '../../../lib/cms'
import GlobalPreviewClient from './GlobalPreviewClient'

export default async function GlobalPreviewPage({ params }) {
  const { slug } = await params
  const [initialData, hubImages] = await Promise.all([
    getGlobal(slug).then(d => d ?? {}),
    slug === 'navigation' ? getCategoryHubCardImages() : Promise.resolve({}),
  ])
  return <GlobalPreviewClient slug={slug} initialData={initialData} hubImages={hubImages} />
}
