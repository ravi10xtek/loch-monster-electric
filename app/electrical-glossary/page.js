import { buildPageMetadata } from '../lib/cms'
import GlossaryPage from '../components/GlossaryPage'

export async function generateMetadata() {
  return buildPageMetadata('electrical-glossary', {
    title: 'Electrical Glossary | Loch Monster Electric',
    description: 'Plain-English definitions for common electrical terms — GFCI, AFCI, load calculations, NEC code, three-phase power, and more. Know exactly what your electrician is talking about.',
  })
}

export default function ElectricalGlossaryPage() {
  return <GlossaryPage />
}
