import { getProjects, getSocialPosts } from '../lib/cms'
import MediaHero from '../components/MediaHero'
import ProjectScroller from '../components/ProjectScroller'
import StayConnected from '../components/StayConnected'
import OrangeBanner from '../components/OrangeBanner'

export const metadata = {
  title: 'Our Work | Loch Monster Electric',
  description: 'Browse completed electrical projects from Loch Monster Electric — residential, commercial, and more across the Twin Cities metro.',
}

export default async function MediaPage() {
  const [projects, socialPosts] = await Promise.all([getProjects(), getSocialPosts()])
  return (
    <main>
      <MediaHero />
      <ProjectScroller projects={projects} />
      <OrangeBanner />
      <StayConnected posts={socialPosts} />
    </main>
  )
}
