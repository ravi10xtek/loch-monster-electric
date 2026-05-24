import { buildPageMetadata, getProjects, getSocialPosts, getGlobal, getPageSEO } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import MediaHero from '../components/MediaHero'
import ProjectScroller from '../components/ProjectScroller'
import StayConnected from '../components/StayConnected'
import OrangeBanner from '../components/OrangeBanner'

export async function generateMetadata() {
  return buildPageMetadata('media', {
    title: 'Our Work | Loch Monster Electric',
    description: 'Browse completed electrical projects from Loch Monster Electric — residential, commercial, and more across the Twin Cities metro.',
  })
}

export default async function MediaPage() {
  const [projects, socialPosts, mediaPageData, seo] = await Promise.all([
    getProjects(),
    getSocialPosts(),
    getGlobal('media-page'),
    getPageSEO('media'),
  ])
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <main>
        <MediaHero data={mediaPageData} />
        <ProjectScroller projects={projects} />
        <OrangeBanner />
        <StayConnected posts={socialPosts} />
      </main>
    </>
  )
}
