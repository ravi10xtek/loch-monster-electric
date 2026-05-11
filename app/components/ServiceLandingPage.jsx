import HomeInteractions from "../ui/home-interactions";
import ServiceHero from "./ServiceHero";
import WhatWeHandle from "./WhatWeHandle";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import Services from "./Services";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";

export default function ServiceLandingPage({ data }) {
  return (
    <>
      <HomeInteractions />
      <main>
        <ServiceHero hero={data.hero} />
        <WhatWeHandle data={data.whatWeHandle} />
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
