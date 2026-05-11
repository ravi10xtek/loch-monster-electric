import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['installations'].seo.title,
  description: categoryHubs['installations'].seo.description,
};

export default function InstallationsPage() {
  return <CategoryHubPage data={categoryHubs['installations']} />;
}
