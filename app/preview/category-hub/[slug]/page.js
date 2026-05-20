import CategoryHubPreviewClient from './CategoryHubPreviewClient'

const BASE = process.env.CMS_URL || 'http://localhost:3001'

// Fetch the raw Payload document (no normalization) so useLivePreview
// receives the same shape it will broadcast via postMessage.
async function getCategoryHubRaw(slug) {
  try {
    const params = new URLSearchParams({ 'where[slug][equals]': slug, depth: '2', limit: '1' })
    const res = await fetch(`${BASE}/api/category-hubs?${params}`, { cache: 'no-store' })
    if (!res.ok) return {}
    const data = await res.json()
    return data?.docs?.[0] ?? {}
  } catch {
    return {}
  }
}

export default async function CategoryHubPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getCategoryHubRaw(slug)
  return <CategoryHubPreviewClient slug={slug} initialData={initialData} />
}
