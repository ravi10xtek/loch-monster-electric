import HomeInteractions from '../ui/home-interactions'
import JournalIndex from '../components/JournalIndex'
import OrangeBanner from '../components/OrangeBanner'
import { buildPageMetadata, getPosts, getPageSEO } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import { posts as staticPosts } from '../data/journal'

export async function generateMetadata() {
  return buildPageMetadata('journal', {
    title: 'Electrical Journal | Loch Monster Electric',
    description: 'Electrical tips, safety guides, and how-to articles for Minnesota & Wisconsin homeowners from the licensed electricians at Loch Monster Electric.',
  })
}

// Always fetch fresh — ISR webhook (Phase 2) will handle cache busting
export const dynamic = 'force-dynamic'

export default async function JournalPage() {
  const [posts, seo] = await Promise.all([
    getPosts().then(r => r ?? staticPosts),
    getPageSEO('journal'),
  ])
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />
      <JournalIndex posts={posts} />
      <OrangeBanner />
    </>
  )
}
