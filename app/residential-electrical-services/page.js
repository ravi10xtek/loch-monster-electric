import { buildPageMetadata, getServiceHubWithImages } from '../lib/cms'
import { mediaUrl } from '../lib/normalize'
import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services', {
    title: 'Residential Electrical Services | Loch Monster Electric',
    description: 'Licensed residential electricians serving the Twin Cities metro. Panel upgrades, EV chargers, repairs, rewiring & more. Call 763-292-1191.',
  })
}

export default async function ResidentialPage() {
  const cms = await getServiceHubWithImages('residential-electrical-services')
  const data = cms ? mapHubToPageData(cms) : servicePages.residential
  return <ServiceLandingPage data={data} />
}

function mapHubToPageData(cms) {
  return {
    slug: cms.slug,
    hero: {
      eyebrow: cms.heroEyebrow,
      title: cms.heroTitleLines?.map(t => t.line) || [],
      tagline: cms.heroTagline,
      body: cms.heroBody,
      body2: cms.heroBody2 || null,
      image: cms.heroImage?.url ? mediaUrl(cms.heroImage.url) : null,
      imageAlt: cms.heroImage?.alt || null,
    },
    whatWeHandle: {
      eyebrow: cms.whatEyebrow,
      heading: cms.whatHeading,
      body: cms.whatBody,
      cta: cms.whatCta,
      tabs: cms.tabs?.map(tab => ({
        id: tab.id,
        label: tab.label,
        heading: tab.heading,
        body: tab.body,
        href: tab.href,
      })) || [],
      cards: cms.tabs?.reduce((acc, tab) => {
        acc[tab.id] = (tab.cards || []).map(card => ({
          label: card.label,
          body: card.body,
          href: card.href,
          color: card.color,
          gradient: card.gradient,
          image: card.image || null,
        }))
        return acc
      }, {}) || {},
      ctaCard: cms.ctaCardLabel,
    },
  }
}
