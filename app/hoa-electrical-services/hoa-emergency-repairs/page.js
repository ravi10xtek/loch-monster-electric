import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-emergency-repairs', {
    title: 'HOA Emergency Electrical Repairs | Loch Monster Electric',
    description: '24/7 emergency electrical response for HOAs in the Twin Cities. Power restoration, hazard repair & storm damage. Call 763-292-1191.',
  })
}

export default async function HoaEmergencyRepairsPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('hoa-emergency-repairs'),
    getPageSEO('hoa-electrical-services/hoa-emergency-repairs'),
  ])
  const data = hub ?? categoryHubs['hoa-emergency-repairs']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
