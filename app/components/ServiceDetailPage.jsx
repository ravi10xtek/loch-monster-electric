import HomeInteractions from "../ui/home-interactions";
import ServiceHero from "./ServiceHero";
import WhenDoYouNeed from "./WhenDoYouNeed";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ, { FALLBACK_FAQS } from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";
import JsonLd from "./JsonLd";
import { getFaqs } from "../lib/cms";

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

const provider = {
  '@type': 'ElectricalContractor',
  name: 'Loch Monster Electric',
  url: BASE,
}

export default async function ServiceDetailPage({ data, faqTag = 'general' }) {
  // Fetch FAQs once — used for both the JSON-LD schema and the visible FAQ section
  const cmsFaqs = await getFaqs(faqTag)
  const faqs = cmsFaqs?.length ? cmsFaqs : FALLBACK_FAQS

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

  // FAQPage schema — built from the actual CMS FAQ questions
  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
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
        <OrangeBanner /><Expect dark /><FAQ faqs={faqs} /><WhyChooseUs /><Services /><ServiceAreas /><Journal />
      </main>
    </>
  );
}
