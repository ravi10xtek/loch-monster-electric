const cards = [
  {
    featured: true,
    badge: { text: 'FOR MOST JOBS', style: 'orange' },
    title: 'TIME & MATERIALS',
    anchor: '#time-materials',
    items: [
      'Transparent hourly rate—no flat-rate guesswork.',
      'Itemized materials list on every invoice.',
      'No hidden fees or surprise charges.',
      'Perfect for repairs, troubleshooting & small jobs.',
      'We diagnose, fix it, and give you an honest bill.',
    ],
    ctaStyle: 'orange',
  },
  {
    badge: { text: '$1,200+', style: 'outline' },
    title: 'LARGER PROJECTS',
    anchor: '#larger-projects',
    items: [
      'Detailed written estimate before any work starts.',
      'Milestone-based billing—pay as we progress.',
      'Clearly defined scope, timeline, and deliverables.',
      'Best for panel replacements & whole-home rewires.',
      'Free on-site walk-through and consultation.',
    ],
  },
  {
    title: 'FOLLOW-UP VISITS',
    anchor: '#follow-up-visits',
    items: [
      'Priority scheduling for existing customers.',
      'Reduced diagnosis time—we already know your home.',
      'Same crew that did the original work.',
      'No need to re-explain the project from scratch.',
      'Discounted return-visit rate for past clients.',
    ],
  },
  {
    title: 'WANT TO SAVE ON THE FINAL INVOICE? HANDLE THE CLEANUP.',
    anchor: '#handle-cleanup',
    items: [
      'You handle debris removal after the job.',
      'Reduced labor cost reflected on your invoice.',
      'Same quality electrical work, lower total bill.',
      'Optional add-on to any pricing tier.',
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="wrap">
        <h2 className="pricing-heading">HOW WE <span className="text-orange">PRICE</span> JOBS</h2>
        <div className="pricing-grid">
          {cards.map((card, i) => (
            <div key={i} className={`pc${card.featured ? ' pc-featured' : ''}`}>
              {card.badge && (
                <span className={`pc-badge${card.badge.style === 'orange' ? ' pc-badge-orange' : card.badge.style === 'outline' ? ' pc-badge-outline' : ''}`}>
                  {card.badge.text}
                </span>
              )}
              <h3 className="pc-title">{card.title}</h3>
              <ul className="pc-list">
                {card.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
              <div className="pc-foot">
                <a href={card.anchor || '#pricing'} className="pc-readmore">READ MORE</a>
                <a href="/contact-us" className={`pc-cta${card.ctaStyle === 'orange' ? ' pc-cta-orange' : ''}`}>CONTACT US</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
