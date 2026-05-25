import { notFound } from 'next/navigation'
import { getLocationBySlug, getAllLocationSlugs } from '../../lib/cms'
import { allCities, getCityBySlug } from '../../data/serviceAreas'
import HomeInteractions from '../../ui/home-interactions'
import ServiceAreaHero from '../../components/ServiceAreaHero'
import CityLocalSection from '../../components/CityLocalSection'
import OrangeBanner from '../../components/OrangeBanner'
import Expect from '../../components/Expect'
import Services from '../../components/Services'
import WhyChooseUs from '../../components/WhyChooseUs'
import JsonLd from '../../components/JsonLd'
import FAQ from '../../components/FAQ'

const BASE = process.env.SITE_URL || 'https://lochmonsterelectric.com'

export const dynamicParams = true

export async function generateStaticParams() {
  const cmsSlugs = await getAllLocationSlugs()
  const slugs = cmsSlugs ?? allCities.map(c => c.slug)
  return slugs.map(city => ({ city }))
}

export async function generateMetadata({ params }) {
  const { city } = await params
  const c = (await getLocationBySlug(city)) ?? getCityBySlug(city)
  if (!c) return {}
  return {
    title: c.metaTitle || `Electrician in ${c.name}, ${c.state} | Loch Monster Electric`,
    description:
      c.metaDescription ||
      `Licensed electrician serving ${c.name}, ${c.state}. Residential & commercial electrical services. Call 763-292-1191.`,
  }
}

export default async function CityPage({ params }) {
  const { city } = await params
  const cityData = (await getLocationBySlug(city)) ?? getCityBySlug(city)
  if (!cityData) notFound()

  // City-specific LocalBusiness JSON-LD — areaServed narrows to this city for local SEO
  const citySchema = {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    name: 'Loch Monster Electric',
    url: BASE,
    telephone: '+17632921191',
    email: 'service@lochmonsterelectric.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '7600 W 27th St #213',
      addressLocality: 'St Louis Park',
      addressRegion: 'MN',
      postalCode: '55426',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: cityData.name,
      containedInPlace: {
        '@type': 'State',
        name: cityData.state === 'MN' ? 'Minnesota' : 'Wisconsin',
      },
    },
    ...(cityData.lat && cityData.lng ? {
      geo: { '@type': 'GeoCoordinates', latitude: cityData.lat, longitude: cityData.lng },
    } : {}),
  }

  return (
    <>
      <JsonLd schema={citySchema} />
      <HomeInteractions />
      <main>
        <ServiceAreaHero
          heading={`${cityData.name}, ${cityData.state}`}
          subheading={cityData.heroTagline || 'Keeping the Lights On, the Heat, and the Wi-Fi.'}
          body={cityData.heroIntro || cityData.blurb}
          body2={cityData.heroIntro2 || null}
          heroImage={cityData.heroImage || null}
          heroImageAlt={cityData.heroImageAlt || null}
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Service Areas', href: '/service-areas' },
            { label: `${cityData.name}, ${cityData.state}` },
          ]}
        />
        <CityLocalSection city={cityData} />
        <FAQ tag="service-areas" />
        <Expect dark />
        <Services />
        <WhyChooseUs />
        <OrangeBanner />
      </main>
    </>
  )
}
