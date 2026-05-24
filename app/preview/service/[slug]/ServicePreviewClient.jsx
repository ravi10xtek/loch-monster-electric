'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { normalizeService } from '../../../lib/normalize'
import ServiceHero from '../../../components/ServiceHero'
import WhenDoYouNeed from '../../../components/WhenDoYouNeed'

// Only import sync components — async server components (OrangeBanner, Services,
// Journal, FAQ, etc.) cannot run inside a client component without triggering
// server-only env vars (CMS_URL) on the client, causing localhost:3001 fetches.
// The preview shows only the editable service-specific sections.

const PAYLOAD_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function ServicePreviewClient({ initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: PAYLOAD_URL,
    depth: 1,
  })

  if (!data) return <p style={{ padding: '2rem' }}>Loading preview…</p>

  const normalised = normalizeService(data)

  return (
    <main>
      <ServiceHero hero={normalised.hero} />
      {normalised.whenDoYouNeed && <WhenDoYouNeed data={normalised.whenDoYouNeed} />}
    </main>
  )
}
