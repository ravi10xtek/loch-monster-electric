import ServiceLandingPage from "../components/ServiceLandingPage";
import { servicePages } from "../data/services";

export const metadata = servicePages.commercial.seo;

export default function CommercialPage() {
  return <ServiceLandingPage data={servicePages.commercial} />;
}
