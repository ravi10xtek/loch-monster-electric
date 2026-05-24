import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/safety-compliance', {
    title: 'Electrical Safety & Compliance | Loch Monster Electric',
    description: 'GFCI, AFCI, smoke detectors & electrical inspections in the Twin Cities. Keep your home safe and up to code. Call 763-292-1191.',
  })
}

export default async function SafetyCompliancePage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('safety-compliance'),
    getPageSEO('residential-electrical-services/safety-compliance'),
  ])
  const data = hub ?? categoryHubs['safety-compliance']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
