'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { normalizeLocation } from '../../../lib/normalize'
import ServiceAreaHero from '../../../components/ServiceAreaHero'
import CityLocalSection from '../../../components/CityLocalSection'
import Expect from '../../../components/Expect'
import Services from '../../../components/Services'
import WhyChooseUs from '../../../components/WhyChooseUs'
import OrangeBanner from '../../../components/OrangeBanner'

const PAYLOAD_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function LocationPreviewClient({ initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: PAYLOAD_URL,
    depth: 1,
  })

  if (!data) return <p style={{ padding: '2rem' }}>Loading preview…</p>

  const city = normalizeLocation(data)

  return (
    <main>
      <ServiceAreaHero
        heading={`${city.name}, ${city.state}`}
        subheading="Keeping the Lights On, the Heat, and the Wi-Fi."
        body={city.blurb}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Service Areas', href: '/service-areas' },
          { label: `${city.name}, ${city.state}` },
        ]}
      />
      <CityLocalSection city={city} />
      <Expect dark />
      <Services />
      <WhyChooseUs />
      <OrangeBanner />
    </main>
  )
}
