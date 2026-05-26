import { notFound } from 'next/navigation'
import { getServiceBySlug, getServiceSlugsByHub } from '../../../lib/cms'
import { serviceDetails } from '../../../data/serviceDetails'
import ServiceDetailPage from '../../../components/ServiceDetailPage'

const PARENT_HUB = 'hoa-ev-charging'

export const dynamicParams = true

export async function generateStaticParams() {
  const cmsSlugs = await getServiceSlugsByHub(PARENT_HUB)
  if (cmsSlugs?.length) return cmsSlugs.map(service => ({ service }))
  return Object.entries(serviceDetails)
    .filter(([, v]) => v.parentHub === PARENT_HUB)
    .map(([k]) => ({ service: k }))
}

export async function generateMetadata({ params }) {
  const { service } = await params
  const d = (await getServiceBySlug(service)) ?? serviceDetails[service]
  if (!d) return {}
  const SITE = process.env.SITE_URL || 'https://lochmonsterelectric.com'
  return {
    title: d.seo.title,
    description: d.seo.description,
    alternates: { canonical: `${SITE}/hoa-electrical-services/${PARENT_HUB}/${service}` },
  }
}

export default async function Page({ params }) {
  const { service } = await params
  const d = (await getServiceBySlug(service)) ?? serviceDetails[service]
  if (!d) notFound()
  return <ServiceDetailPage data={d} faqTag={PARENT_HUB} />
}
