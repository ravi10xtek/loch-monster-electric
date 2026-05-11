'use client'
import { useLivePreview } from '@payloadcms/live-preview-react'
import BlockRenderer from '../../components/BlockRenderer'

const PAYLOAD_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function PreviewClient({ initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: PAYLOAD_URL,
    depth: 2,
  })
  return (
    <main>
      <BlockRenderer blocks={data?.blocks ?? []} />
    </main>
  )
}
