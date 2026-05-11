import HomeInteractions from '../ui/home-interactions'
import JournalIndex from '../components/JournalIndex'
import OrangeBanner from '../components/OrangeBanner'
import { getPosts } from '../lib/cms'
import { posts as staticPosts } from '../data/journal'

export const metadata = {
  title: 'Electrical Journal | Loch Monster Electric',
  description: 'Electrical tips, safety guides, and how-to articles for Minnesota & Wisconsin homeowners from the licensed electricians at Loch Monster Electric.',
}

// Always fetch fresh — ISR webhook (Phase 2) will handle cache busting
export const dynamic = 'force-dynamic'

export default async function JournalPage() {
  // Try CMS first; fall back to static file if CMS is unreachable
  const posts = (await getPosts()) ?? staticPosts

  return (
    <>
      <HomeInteractions />
      <JournalIndex posts={posts} />
      <OrangeBanner />
    </>
  )
}
