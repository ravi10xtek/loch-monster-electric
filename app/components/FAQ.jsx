const faqs = [
  {
    q: 'WHAT ELECTRICAL SERVICES DO YOU OFFER?',
    a: 'We offer a full range of electrical services including repairs, panel upgrades, EV charger installation, new circuits, lighting, smart home wiring, and safety inspections for residential, commercial, and HOA clients throughout the Twin Cities metro.',
  },
  {
    q: 'WHY ARE MY LIGHTS FLICKERING?',
    a: "Flickering lights can be caused by loose connections, overloaded circuits, or issues with your electrical panel. If you notice frequent flickering, it's best to have a licensed electrician inspect your system to prevent potential hazards. Learn more about common causes and solutions in our expert guide.",
  },
  {
    q: 'HOW DO I KNOW IF MY ELECTRICAL PANEL NEEDS AN UPGRADE?',
    a: "Signs include frequently tripping breakers, flickering lights, burning smells near the panel, a panel over 25 years old, or adding large appliances or EV charging to your home. We'll do a free on-site evaluation and walk you through your options.",
  },
  {
    q: 'DO YOU OFFER FINANCING FOR ELECTRICIAN SERVICES?',
    a: "We don't offer in-house financing today, but we can point you toward trusted third-party financing options that work well for larger projects like panel replacements or whole-home rewires. Just ask when you call.",
  },
  {
    q: 'DO YOU SERVICE COMMERCIAL AND HOA PROPERTIES?',
    a: 'Yes. We work with property managers, HOAs, and commercial owners across the Twin Cities metro — from emergency repairs to scheduled maintenance, panel work, lighting, and code corrections. Contracts and recurring service plans available.',
  },
  {
    q: 'WHAT AREAS DO YOU SERVICE?',
    a: "We serve the entire Twin Cities metro — Minneapolis, St. Paul, and surrounding suburbs including Maple Grove, Woodbury, Eden Prairie, Shoreview, and more — plus parts of western Wisconsin. If you're close, we'll come.",
  },
];

export default function FAQ() {
  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-left">
            <h2>FREQUENTLY<br />ASKED<br /><span className="text-orange">QUESTIONS</span></h2>
          </div>
          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div className="acc-item" key={i}>
                <button className="acc-btn">{faq.q} <span className="acc-plus">+</span></button>
                <div className="acc-body"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
