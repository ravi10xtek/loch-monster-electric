import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('commercial-electrical-services/compliance-infrastructure', {
    title: 'Commercial Compliance & Infrastructure | Loch Monster Electric',
    description: 'Code corrections, tenant build-outs & generator installation in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function ComplianceInfrastructurePage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('compliance-infrastructure'),
    getPageSEO('commercial-electrical-services/compliance-infrastructure'),
  ])
  const data = hub ?? categoryHubs['compliance-infrastructure']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
