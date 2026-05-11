import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['power-distribution'].seo.title,
  description: categoryHubs['power-distribution'].seo.description,
};

export default function PowerDistributionPage() {
  return <CategoryHubPage data={categoryHubs['power-distribution']} />;
}
