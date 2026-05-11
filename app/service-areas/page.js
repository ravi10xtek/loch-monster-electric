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

export const metadata = {
  title: 'Service Areas | Loch Monster Electric',
  description: 'Licensed electrician serving the Twin Cities metro — Shoreview, Apple Valley, Plymouth, Bloomington, Eagan, and more. Call 763-292-1191.',
}

export default function ServiceAreasPage() {
  return (
    <>
      <HomeInteractions />
      <main>
        <ServiceAreaHero
          heading="WE SERVE THE ENTIRE TWIN CITIES METRO"
          subheading="Keeping the Lights On, the Heat, and the Wi-Fi."
          body="Your home runs on electricity—and when something goes wrong, it can throw your whole day off. That's why Loch Monster Electric is here to make sure your power's reliable, your setup's safe, and your stress level stays nice and low. We work with homeowners all over the Twin Cities to fix the little things, handle the big jobs, and modernize older homes to keep up with the way we live today. Whether you're dealing with flickering lights, mystery outlets, or adding an EV charger in the garage, we'll get it sorted—fast and without a bunch of guesswork."
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]}
        />
        <CityGrid cities={allCities} />
        <ServiceAreaMap cities={allCities} />
        <OrangeBanner />
        <Expect dark />
        <Services />
        <WhyChooseUs />
        <Journal />
      </main>
    </>
  )
}
