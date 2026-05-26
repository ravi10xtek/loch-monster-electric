import { notFound } from 'next/navigation'
import { getPageBySlug, getAllPageSlugs } from '../lib/cms'
import HomeInteractions from '../ui/home-interactions'
import BlockRenderer from '../components/BlockRenderer'

export const dynamicParams = true

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs()
  if (!slugs?.length) return []
  // slug is a path like 'about/team' — split into segments
  return slugs.map(slug => ({ slug: slug.split('/') }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug
  const page = await getPageBySlug(slugStr)
  if (!page) return {}
  const SITE = process.env.SITE_URL || 'https://lochmonsterelectric.com'
  return {
    title: page.seo?.title || page.title,
    description: page.seo?.description || '',
    alternates: { canonical: page.seo?.canonicalUrl || `${SITE}/${slugStr}` },
    ...(page.seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
    ...(page.seo?.ogImage ? { openGraph: { images: [{ url: page.seo.ogImage }] } } : {}),
  }
}

export default async function CatchAllPage({ params }) {
  const { slug } = await params
  const slugStr = Array.isArray(slug) ? slug.join('/') : slug
  const page = await getPageBySlug(slugStr)
  if (!page) notFound()

  return (
    <>
      <HomeInteractions />
      <main>
        <BlockRenderer blocks={page.blocks} />
      </main>
    </>
  )
}
