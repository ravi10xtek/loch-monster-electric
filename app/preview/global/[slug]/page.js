import { getGlobal } from '../../../lib/cms'
import GlobalPreviewClient from './GlobalPreviewClient'

export default async function GlobalPreviewPage({ params }) {
  const { slug } = await params
  const initialData = await getGlobal(slug) ?? {}
  return <GlobalPreviewClient slug={slug} initialData={initialData} />
}
