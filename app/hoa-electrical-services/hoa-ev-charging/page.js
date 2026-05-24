import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-ev-charging', {
    title: 'HOA EV Charging Station Installation | Loch Monster Electric',
    description: 'EV charging station installation for HOAs and multifamily properties in the Twin Cities. Load management, permits & billing integration. Call 763-292-1191.',
  })
}

export default async function HoaEvChargingPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('hoa-ev-charging'),
    getPageSEO('hoa-electrical-services/hoa-ev-charging'),
  ])
  const data = hub ?? categoryHubs['hoa-ev-charging']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
