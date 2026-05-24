import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-common-areas', {
    title: 'HOA Common Area Electrical | Loch Monster Electric',
    description: 'Common area lighting, amenity electrical & repairs for HOAs in the Twin Cities. Call 763-292-1191.',
  })
}

export default async function HoaCommonAreasPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('hoa-common-areas'),
    getPageSEO('hoa-electrical-services/hoa-common-areas'),
  ])
  const data = hub ?? categoryHubs['hoa-common-areas']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
