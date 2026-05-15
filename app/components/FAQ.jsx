import { getFaqs } from '../lib/cms'

const FALLBACK_FAQS = [
  {
    question: 'WHAT ELECTRICAL SERVICES DO YOU OFFER?',
    answer: 'We offer a full range of electrical services including repairs, panel upgrades, EV charger installation, new circuits, lighting, smart home wiring, and safety inspections for residential, commercial, and HOA clients throughout the Twin Cities metro.',
  },
  {
    question: 'WHY ARE MY LIGHTS FLICKERING?',
    answer: "Flickering lights can be caused by loose connections, overloaded circuits, or issues with your electrical panel. If you notice frequent flickering, it's best to have a licensed electrician inspect your system to prevent potential hazards.",
  },
  {
    question: 'HOW DO I KNOW IF MY ELECTRICAL PANEL NEEDS AN UPGRADE?',
    answer: "Signs include frequently tripping breakers, flickering lights, burning smells near the panel, a panel over 25 years old, or adding large appliances or EV charging to your home. We'll do a free on-site evaluation and walk you through your options.",
  },
  {
    question: 'DO YOU OFFER FINANCING FOR ELECTRICIAN SERVICES?',
    answer: "We don't offer in-house financing today, but we can point you toward trusted third-party financing options that work well for larger projects like panel replacements or whole-home rewires. Just ask when you call.",
  },
  {
    question: 'DO YOU SERVICE COMMERCIAL AND HOA PROPERTIES?',
    answer: 'Yes. We work with property managers, HOAs, and commercial owners across the Twin Cities metro — from emergency repairs to scheduled maintenance, panel work, lighting, and code corrections. Contracts and recurring service plans available.',
  },
  {
    question: 'WHAT AREAS DO YOU SERVICE?',
    answer: "We serve the entire Twin Cities metro — Minneapolis, St. Paul, and surrounding suburbs including Maple Grove, Woodbury, Eden Prairie, Shoreview, and more — plus parts of western Wisconsin. If you're close, we'll come.",
  },
]

export default async function FAQ({ tag }) {
  const cmsFaqs = await getFaqs(tag)
  const faqs = cmsFaqs?.length ? cmsFaqs : FALLBACK_FAQS

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-grid">
          <div className="faq-left">
            <h2>FREQUENTLY<br />ASKED<br /><span className="text-orange">QUESTIONS</span></h2>
          </div>
          <div className="faq-right">
            {faqs.map((faq, i) => (
              <div className="acc-item" key={faq.id ?? i}>
                <button className="acc-btn">{faq.question} <span className="acc-plus">+</span></button>
                <div className="acc-body"><p>{faq.answer}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
