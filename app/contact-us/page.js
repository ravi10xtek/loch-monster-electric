import { buildPageMetadata, getSocialPosts, getGlobal, getPageSEO } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import HomeInteractions from '../ui/home-interactions'
import ContactHero from '../components/ContactHero'
import StayConnected from '../components/StayConnected'
import Journal from '../components/Journal'
import FAQ from '../components/FAQ'

export async function generateMetadata() {
  return buildPageMetadata('contact-us', {
    title: 'Contact Us | Loch Monster Electric',
    description: 'Call, text, or email the team at Loch Monster Electric. Licensed electricians serving the Twin Cities metro — no call centers, no bots, just real people who know the work.',
  })
}

export default async function ContactPage() {
  const [socialPosts, contactData, seo] = await Promise.all([
    getSocialPosts(),
    getGlobal('contact-page'),
    getPageSEO('contact-us'),
  ])

  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />

      {/* 1 — Contact form section */}
      <ContactHero cms={contactData} />

      {/* 2 — Stay Connected */}
      <StayConnected posts={socialPosts} />

      {/* 3 — Journal strip */}
      <Journal />

      {/* 4 — FAQ */}
      <FAQ tag="general" />
    </>
  )
}
