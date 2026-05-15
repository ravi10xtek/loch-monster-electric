'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import CategoryHero from '../../../components/CategoryHero'
import SubServiceSections from '../../../components/SubServiceSections'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function CategoryHubPreviewClient({ slug, initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  if (!data?.heroTitleLines) {
    return <p style={{ padding: '2rem', color: '#888' }}>Loading preview for &ldquo;{slug}&rdquo;…</p>
  }

  const hero = {
    eyebrow: data.heroEyebrow || '',
    title: data.heroTitleLines?.map(t => t.line) || [],
    tagline: data.heroTagline || '',
    body: data.heroBody || '',
    body2: data.heroBody2 || null,
  }

  const subServices = data.subServices || []

  return (
    <main>
      <CategoryHero hero={hero} />
      <SubServiceSections subServices={subServices} />
    </main>
  )
}
