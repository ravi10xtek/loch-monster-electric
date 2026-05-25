import { buildPageMetadata, getPageSEO, getGlobal, getSocialPosts } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import HomeInteractions from '../ui/home-interactions'
import AboutHero from '../components/AboutHero'
import AboutStory from '../components/AboutStory'
import OrangeBanner from '../components/OrangeBanner'
import ServiceAreas from '../components/ServiceAreas'
import Expect from '../components/Expect'
import WhyChooseUs from '../components/WhyChooseUs'
import StayConnected from '../components/StayConnected'

export async function generateMetadata() {
  return buildPageMetadata('about-us', {
    title: 'About Us | Loch Monster Electric',
    description: 'From pipes to power — same crew, same heart. Learn the story behind Loch Monster Electric and why Twin Cities homeowners trust us with their electrical work.',
  })
}

export default async function AboutPage() {
  const [seo, aboutData, socialPosts] = await Promise.all([
    getPageSEO('about-us'),
    getGlobal('about-page'),
    getSocialPosts(),
  ])
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />

      {/* 1 — Hero */}
      <AboutHero data={aboutData} />

      {/* 2 — Story split */}
      <AboutStory data={aboutData} />

      {/* 3 — Orange banner */}
      <OrangeBanner />

      {/* 4 — Where We Work */}
      <ServiceAreas />

      {/* 5 — What you can expect */}
      <Expect />

      {/* 6 — Why choose us / reviews */}
      <WhyChooseUs />

      {/* 7 — Stay connected (shared with Media page) */}
      <StayConnected posts={socialPosts} />
    </>
  )
}
