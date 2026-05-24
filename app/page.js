import { buildPageMetadata, getPageSEO, getGlobal } from './lib/cms'
import HomeInteractions from "./ui/home-interactions";
import Hero from "./components/Hero";
import Services from "./components/Services";
import OrangeBanner from "./components/OrangeBanner";
import ServiceAreas from "./components/ServiceAreas";
import Expect from "./components/Expect";
import WhyChooseUs from "./components/WhyChooseUs";
import Pricing from "./components/Pricing";
import OurStory from "./components/OurStory";
import Journal from "./components/Journal";
import FAQ from "./components/FAQ";
import JsonLd from "./components/JsonLd";

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Loch Monster Electric',
  url: BASE,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE}/journal?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export async function generateMetadata() {
  return buildPageMetadata('/', {
    title: 'Loch Monster Electric | Legendary Electrical Work, Done Right',
    description: 'Licensed electrical contractor serving the Twin Cities metro. Residential, commercial & HOA electrical services. Call 763-292-1191.',
  })
}

export default async function HomePage() {
  const [seo, homeData] = await Promise.all([
    getPageSEO('/'),
    getGlobal('home-page'),
  ])
  return (
    <>
      <JsonLd schema={websiteSchema} />
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />
      <main>
        <Hero data={homeData} />
        <Services />
        <OrangeBanner />
        <ServiceAreas />
        <Expect />
        <WhyChooseUs />
        <Pricing />
        <OurStory />
        <Journal />
        <FAQ tag="home" />
      </main>
    </>
  );
}
