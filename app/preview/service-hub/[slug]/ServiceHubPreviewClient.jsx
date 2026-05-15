'use client'

import { useLivePreview } from '@payloadcms/live-preview-react'
import ServiceHero from '../../../components/ServiceHero'
import WhatWeHandle from '../../../components/WhatWeHandle'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

function mapToPageData(cms) {
  return {
    hero: {
      eyebrow: cms.heroEyebrow || '',
      title: cms.heroTitleLines?.map(t => t.line) || [],
      tagline: cms.heroTagline || '',
      body: cms.heroBody || '',
      body2: cms.heroBody2 || null,
    },
    whatWeHandle: {
      eyebrow: cms.whatEyebrow || '',
      heading: cms.whatHeading || '',
      body: cms.whatBody || '',
      cta: cms.whatCta || '',
      tabs: cms.tabs?.map(tab => ({
        id: tab.id,
        label: tab.label,
        heading: tab.heading,
        body: tab.body,
        href: tab.href,
      })) || [],
      cards: cms.tabs?.reduce((acc, tab) => {
        acc[tab.id] = tab.cards || []
        return acc
      }, {}) || {},
      ctaCard: cms.ctaCardLabel || '',
    },
  }
}

export default function ServiceHubPreviewClient({ slug, initialData }) {
  const { data } = useLivePreview({
    initialData,
    serverURL: CMS_URL,
    depth: 2,
  })

  if (!data?.heroTitleLines) {
    return <p style={{ padding: '2rem', color: '#888' }}>Loading preview for &ldquo;{slug}&rdquo;…</p>
  }

  const pageData = mapToPageData(data)

  return (
    <main>
      <ServiceHero hero={pageData.hero} />
      <WhatWeHandle data={pageData.whatWeHandle} />
    </main>
  )
}
