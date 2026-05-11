import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('hoa-electrical-services/hoa-ev-charging', {
    title: 'HOA EV Charging Station Installation | Loch Monster Electric',
    description: 'EV charging station installation for HOAs and multifamily properties in the Twin Cities. Load management, permits & billing integration. Call 763-292-1191.',
  })
}

export default function HoaEvChargingPage() {
  return <CategoryHubPage data={categoryHubs['hoa-ev-charging']} />;
}
