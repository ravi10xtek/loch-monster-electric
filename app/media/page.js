import { getProjects, getSocialPosts, getGlobal } from '../lib/cms'
import MediaHero from '../components/MediaHero'
import ProjectScroller from '../components/ProjectScroller'
import StayConnected from '../components/StayConnected'
import OrangeBanner from '../components/OrangeBanner'

export const metadata = {
  title: 'Our Work | Loch Monster Electric',
  description: 'Browse completed electrical projects from Loch Monster Electric — residential, commercial, and more across the Twin Cities metro.',
}

export default async function MediaPage() {
  const [projects, socialPosts, mediaPageData] = await Promise.all([
    getProjects(),
    getSocialPosts(),
    getGlobal('media-page'),
  ])
  return (
    <main>
      <MediaHero data={mediaPageData} />
      <ProjectScroller projects={projects} />
      <OrangeBanner />
      <StayConnected posts={socialPosts} />
    </main>
  )
}
