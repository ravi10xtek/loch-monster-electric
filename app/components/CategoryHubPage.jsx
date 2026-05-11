import HomeInteractions from "../ui/home-interactions";
import CategoryHero from "./CategoryHero";
import SubServiceSections from "./SubServiceSections";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";

export default function CategoryHubPage({ data }) {
  return (
    <>
      <HomeInteractions />
      <main>
        <CategoryHero hero={data.hero} />
        <SubServiceSections subServices={data.subServices} />
        <OrangeBanner />
        <Expect dark />
        <FAQ />
        <WhyChooseUs />
        <Services />
        <ServiceAreas />
        <Journal />
      </main>
    </>
  );
}
