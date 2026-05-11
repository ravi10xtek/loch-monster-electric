import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['electrical-repairs'].seo.title,
  description: categoryHubs['electrical-repairs'].seo.description,
};

export default function ElectricalRepairsPage() {
  return <CategoryHubPage data={categoryHubs['electrical-repairs']} />;
}
