import { buildPageMetadata, getCategoryHub, getPageSEO } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";
import JsonLd from "../../components/JsonLd";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/electrical-upgrades', {
    title: 'Electrical Upgrades | Loch Monster Electric',
    description: "Panel upgrades, rewiring & service upgrades in the Twin Cities. Modernize your home's electrical system safely and to code. Call 763-292-1191.",
  })
}

export default async function ElectricalUpgradesPage() {
  const [hub, seo] = await Promise.all([
    getCategoryHub('electrical-upgrades'),
    getPageSEO('residential-electrical-services/electrical-upgrades'),
  ])
  const data = hub ?? categoryHubs['electrical-upgrades']
  return (
    <>
      {seo?.schemaMarkup && <JsonLd schema={seo.schemaMarkup} />}
      <CategoryHubPage data={data} />
    </>
  );
}
