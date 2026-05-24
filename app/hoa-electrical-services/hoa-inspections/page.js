import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-inspections', {
    title: 'HOA Electrical Inspections & Maintenance | Loch Monster Electric',
    description: 'Annual electrical inspections, code compliance & maintenance contracts for HOAs in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function HoaInspectionsPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('hoa-inspections'),
    getPageSEO('hoa-electrical-services/hoa-inspections'),
  ])
  const data = hub ?? categoryHubs['hoa-inspections']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
