import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export const metadata = servicePages.residential.seo;

export default function ResidentialPage() {
  return <ServiceLandingPage data={servicePages.residential} />;
}
