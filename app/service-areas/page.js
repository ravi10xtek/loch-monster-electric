import { buildPageMetadata, getLocations, getPageSEO, getGlobal } from '../lib/cms'
import JsonLd from '../components/JsonLd'
import HomeInteractions from '../ui/home-interactions'
import ServiceAreaHero from '../components/ServiceAreaHero'
import CityGrid from '../components/CityGrid'
import ServiceAreaMap from '../components/ServiceAreaMap'
import OrangeBanner from '../components/OrangeBanner'
import Expect from '../components/Expect'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import Journal from '../components/Journal'
import { allCities } from '../data/serviceAreas'

export async function generateMetadata() {
  return buildPageMetadata('service-areas', {
    title: 'Service Areas | Loch Monster Electric',
    description: 'Licensed electrician serving the Twin Cities metro — Shoreview, Apple Valley, Plymouth, Bloomington, Eagan, and more. Call 763-292-1191.',
  })
}

const FALLBACK_HEADING = 'WE SERVE THE ENTIRE TWIN CITIES METRO'
const FALLBACK_SUBHEADING = 'Keeping the Lights On, the Heat, and the Wi-Fi.'
const FALLBACK_BODY =
  "Your home runs on electricity—and when something goes wrong, it can throw your whole day off. " +
  "That's why Loch Monster Electric is here to make sure your power's reliable, your setup's safe, " +
  "and your stress level stays nice and low. We work with homeowners all over the Twin Cities to fix " +
  "the little things, handle the big jobs, and modernize older homes to keep up with the way we live " +
  "today. Whether you're dealing with flickering lights, mystery outlets, or adding an EV charger in " +
  "the garage, we'll get it sorted—fast and without a bunch of guesswork."

export default async function ServiceAreasPage() {
  const [cities, seo, areasData] = await Promise.all([
    getLocations().then(r => r ?? allCities),
    getPageSEO('service-areas'),
    getGlobal('service-areas-page'),
  ])
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <HomeInteractions />
      <main>
        <ServiceAreaHero
          heading={areasData?.heroHeading || FALLBACK_HEADING}
          subheading={areasData?.heroSubheading || FALLBACK_SUBHEADING}
          body={areasData?.heroBody || FALLBACK_BODY}
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
          heroImage={areasData?.heroImage?.url || null}
        />
        <CityGrid cities={cities} />
        <ServiceAreaMap cities={cities} />
        <OrangeBanner />
        <Expect dark />
        <Services />
        <WhyChooseUs />
        <Journal />
      </main>
    </>
  )
}
