'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import { mediaUrl } from '../../../lib/normalize'
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

  // Normalize raw Payload doc → component-ready shapes
  const hero = {
    eyebrow: data.heroEyebrow || '',
    title: data.heroTitleLines?.map(t => t.line) || [],
    tagline: data.heroTagline || '',
    body: data.heroBody || '',
    body2: data.heroBody2 || null,
    image: data.heroImage?.url ? mediaUrl(data.heroImage.url) : null,
    imageAlt: data.heroImage?.alt || null,
  }

  const subServices = (data.subServices || []).map(s => ({
    label: s.label,
    heading: s.heading,
    tagline: s.tagline || '',
    body: s.body,
    readMoreHref: s.readMoreHref || null,
    color: s.color || '#1a1a1a',
    gradient: s.gradient || 'linear-gradient(160deg,#111,#2a2a2a)',
    // s.image is a Payload Media object { url, alt } — extract the URL string
    image: s.image?.url ? mediaUrl(s.image.url) : null,
  }))

  return (
    <main>
      <CategoryHero hero={hero} />
      <SubServiceSections subServices={subServices} />
    </main>
  )
}
