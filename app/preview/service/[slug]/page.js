import { getServiceBySlug, getFaqs } from '../../../lib/cms'
import ServicePreviewClient from './ServicePreviewClient'
import { FALLBACK_FAQS } from '../../../components/FAQ'

export default async function ServicePreviewPage({ params }) {
  const { slug } = await params
  const [initialData, cmsFaqs] = await Promise.all([
    getServiceBySlug(slug),
    getFaqs('general'),
  ])
  const initialFaqs = cmsFaqs?.length ? cmsFaqs : FALLBACK_FAQS
  return <ServicePreviewClient initialData={initialData} initialFaqs={initialFaqs} />
}
