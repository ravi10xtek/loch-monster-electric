import CategoryHubPage from "../../components/CategoryHubPage";
import { categoryHubs } from "../../data/categoryHubs";

export const metadata = {
  title: categoryHubs['safety-compliance'].seo.title,
  description: categoryHubs['safety-compliance'].seo.description,
};

export default function SafetyCompliancePage() {
  return <CategoryHubPage data={categoryHubs['safety-compliance']} />;
}
