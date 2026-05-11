import { allCities, getCityBySlug } from '../../data/serviceAreas'
import HomeInteractions from '../../ui/home-interactions'
import ServiceAreaHero from '../../components/ServiceAreaHero'
import CityLocalSection from '../../components/CityLocalSection'
import OrangeBanner from '../../components/OrangeBanner'
import Expect from '../../components/Expect'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'

export async function generateStaticParams() {
  return allCities.map(c => ({ city: c.slug }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const c = getCityBySlug(city)
  return {
    title: `Electrician in ${c.name}, ${c.state} | Loch Monster Electric`,
    description: `Licensed electrician serving ${c.name}, ${c.state}. Residential & commercial electrical services. Call 763-292-1191.`,
  }
}

export default async function CityPage({ params }) {
  const { city } = await params
  const cityData = getCityBySlug(city)
  return (
    <>
      <HomeInteractions />
      <main>
        <ServiceAreaHero
          heading={`${cityData.name}, ${cityData.state}`}
          subheading="Keeping the Lights On, the Heat, and the Wi-Fi."
          body={cityData.blurb}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Service Areas', href: '/service-areas' },
            { label: `${cityData.name}, ${cityData.state}` },
          ]}
        />
        <CityLocalSection city={cityData} />
        <Expect dark />
        <Services />
        <WhyChooseUs />
        <OrangeBanner />
      </main>
    </>
  )
}
