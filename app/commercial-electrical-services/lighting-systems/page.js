import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['lighting-systems'].seo.title,
  description: categoryHubs['lighting-systems'].seo.description,
};

export default function LightingSystemsPage() {
  return <CategoryHubPage data={categoryHubs['lighting-systems']} />;
}
