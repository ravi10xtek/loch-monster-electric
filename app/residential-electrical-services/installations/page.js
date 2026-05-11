import { buildPageMetadata } from '../../lib/cms'
import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export async function generateMetadata() {
  return buildPageMetadata('residential-electrical-services/installations', {
    title: 'Electrical Installations | Loch Monster Electric',
    description: 'EV charger, ceiling fan, smart home & lighting installation in the Twin Cities. Licensed, insured, done right. Call 763-292-1191.',
  })
}

export default function InstallationsPage() {
  return <CategoryHubPage data={categoryHubs['installations']} />;
}
