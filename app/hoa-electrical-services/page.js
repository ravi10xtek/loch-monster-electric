import { buildPageMetadata, getServiceHubWithImages } from '../lib/cms'
import { mediaUrl } from '../lib/normalize'
import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services', {
    title: 'HOA Electrical Services | Loch Monster Electric',
    description: 'HOA & property management electrical services in the Twin Cities. Common areas, EV charging, emergency repairs & annual inspections. Call 763-292-1191.',
  })
}

export default async function HOAPage() {
  const cms = await getServiceHubWithImages('hoa-electrical-services')
  const data = cms ? mapHubToPageData(cms) : servicePages.hoa
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
      eyebrow: 'Our Services',
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
