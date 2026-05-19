import HomeInteractions from "../ui/home-interactions";
import ServiceHero from "./ServiceHero";
import WhatWeHandle from "./WhatWeHandle";
import OrangeBanner from "./OrangeBanner";
import Expect from "./Expect";
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import ServiceAreas from "./ServiceAreas";
import Journal from "./Journal";

const SLUG_TO_TAG = {
  'residential-electrical-services': 'residential',
  'commercial-electrical-services': 'commercial',
  'hoa-electrical-services': 'hoa',
}

export default function ServiceLandingPage({ data }) {
  const faqTag = SLUG_TO_TAG[data.slug] ?? 'general'
  return (
    <>
      <HomeInteractions />
      <main>
        <ServiceHero hero={data.hero} />
        <WhatWeHandle data={data.whatWeHandle} />
        <OrangeBanner />
        <Expect dark />
        <FAQ tag={faqTag} />
        <WhyChooseUs />
        <ServiceAreas />
        <Journal />
      </main>
    </>
  );
}
