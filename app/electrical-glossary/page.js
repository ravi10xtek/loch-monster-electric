import { buildPageMetadata, getPageSEO } from '../lib/cms'
import GlossaryPage from '../components/GlossaryPage'
import JsonLd from '../components/JsonLd'

export async function generateMetadata() {
  return buildPageMetadata('electrical-glossary', {
    title: 'Electrical Glossary | Loch Monster Electric',
    description: 'Plain-English definitions for common electrical terms — GFCI, AFCI, load calculations, NEC code, three-phase power, and more. Know exactly what your electrician is talking about.',
  })
}

export default async function ElectricalGlossaryPage() {
  const seo = await getPageSEO('electrical-glossary')
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <GlossaryPage />
    </>
  )
}
