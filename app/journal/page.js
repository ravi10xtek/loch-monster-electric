import HomeInteractions from '../ui/home-interactions'
import JournalIndex from '../components/JournalIndex'
import OrangeBanner from '../components/OrangeBanner'
import { posts } from '../data/journal'

export const metadata = {
  title: 'Electrical Journal | Loch Monster Electric',
  description: 'Electrical tips, safety guides, and how-to articles for Minnesota & Wisconsin homeowners from the licensed electricians at Loch Monster Electric.',
}

export default function JournalPage() {
  return (
    <>
      <HomeInteractions />
      <JournalIndex posts={posts} />
      <OrangeBanner />
    </>
  )
}
