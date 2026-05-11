'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import { normalizeService } from '../../../lib/normalize'
import ServiceDetailPage from '../../../components/ServiceDetailPage'

const PAYLOAD_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function ServicePreviewClient({ initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: PAYLOAD_URL,
    depth: 1,
  })

  if (!data) return <p style={{ padding: '2rem' }}>Loading preview…</p>

  // Apply the same normalisation the server would do so the component
  // receives hero, whenDoYouNeed, seo in the shape it expects
  const normalised = normalizeService(data)

  return <ServiceDetailPage data={normalised} />
}
