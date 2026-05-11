import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['electrical-upgrades'].seo.title,
  description: categoryHubs['electrical-upgrades'].seo.description,
};

export default function ElectricalUpgradesPage() {
  return <CategoryHubPage data={categoryHubs['electrical-upgrades']} />;
}
