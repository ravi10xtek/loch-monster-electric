import HomeInteractions from "../ui/home-interactions";
import ServiceHero from "./ServiceHero";
import WhenDoYouNeed from "./WhenDoYouNeed";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";
import JsonLd from "./JsonLd";

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

const provider = {
  '@type': 'ElectricalContractor',
  name: 'Loch Monster Electric',
  url: BASE,
}

export default function ServiceDetailPage({ data }) {
  // Service schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: Array.isArray(data.hero?.title) ? data.hero.title.join(' ') : (data.hero?.title ?? ''),
    description: data.seo?.description ?? '',
    provider,
    areaServed: [
      { '@type': 'State', name: 'Minnesota' },
      { '@type': 'State', name: 'Wisconsin' },
    ],
    serviceType: data.hero?.eyebrow ?? 'Electrical Service',
  }

  // FAQPage schema — built from "When Do You Need" scenarios
  const scenarios = data.whenDoYouNeed?.scenarios ?? []
  const faqSchema = scenarios.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: scenarios.map(s => ({
      '@type': 'Question',
      name: s.heading,
      acceptedAnswer: { '@type': 'Answer', text: s.body },
    })),
  } : null

  return (
    <>
      <JsonLd schema={serviceSchema} />
      {faqSchema && <JsonLd schema={faqSchema} />}
      <HomeInteractions />
      <main>
        <ServiceHero hero={data.hero} />
        <WhenDoYouNeed data={data.whenDoYouNeed} />
        <OrangeBanner /><Expect dark /><FAQ /><WhyChooseUs /><Services /><ServiceAreas /><Journal />
      </main>
    </>
  );
}
