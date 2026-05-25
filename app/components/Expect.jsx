// Icons are fixed — the CMS provides text only; icons stay in order
const ICONS = [
  ( // $ — pricing
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#f97316" points="62,32 57.51,37.07 59.72,43.49 53.61,46.46 53.21,53.21 46.46,53.61 43.49,59.72 37.07,57.51 32,62 26.93,57.51 20.51,59.72 17.54,53.61 10.79,53.21 10.39,46.46 4.28,43.49 6.49,37.07 2,32 6.49,26.93 4.28,20.51 10.39,17.54 10.79,10.79 17.54,10.39 20.51,4.28 26.93,6.49 32,2 37.07,6.49 43.49,4.28 46.46,10.39 53.21,10.79 53.61,17.54 59.72,20.51 57.51,26.93" />
      <text x="32" y="42" textAnchor="middle" fontSize="26" fontWeight="900" fill="#fff" fontFamily="Arial, sans-serif">$</text>
    </svg>
  ),
  ( // checkmark — licensed & insured
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <polygon fill="#f97316" points="62,32 57.51,37.07 59.72,43.49 53.61,46.46 53.21,53.21 46.46,53.61 43.49,59.72 37.07,57.51 32,62 26.93,57.51 20.51,59.72 17.54,53.61 10.79,53.21 10.39,46.46 4.28,43.49 6.49,37.07 2,32 6.49,26.93 4.28,20.51 10.39,17.54 10.79,10.79 17.54,10.39 20.51,4.28 26.93,6.49 32,2 37.07,6.49 43.49,4.28 46.46,10.39 53.21,10.79 53.61,17.54 59.72,20.51 57.51,26.93" />
      <path d="M22 33 l7 7 l13 -14" stroke="#fff" strokeWidth="4.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ( // chat bubble — communication
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <path fill="#f97316" d="M14 10h36a6 6 0 0 1 6 6v22a6 6 0 0 1-6 6H32l-12 10a1.2 1.2 0 0 1-1.95-.94V44H14a6 6 0 0 1-6-6V16a6 6 0 0 1 6-6z" />
      <circle cx="22" cy="27" r="2.8" fill="#fff" />
      <circle cx="32" cy="27" r="2.8" fill="#fff" />
      <circle cx="42" cy="27" r="2.8" fill="#fff" />
    </svg>
  ),
  ( // person — local folks
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(32,30) scale(0.78) translate(-32,-30)">
        <path fill="#f97316" d="M14 30c0-10 8-17 18-17s18 7 18 17H14z" />
        <rect x="29" y="14" width="6" height="16" rx="1" fill="#fff" />
      </g>
      <rect x="9" y="30" width="46" height="4.5" rx="2" fill="#f97316" />
      <path fill="#f97316" d="M24 34h16v6.5c0 4.5-3.6 8-8 8s-8-3.5-8-8V34z" />
      <path fill="#f97316" d="M10 60c0-7.5 7.5-12 22-12s22 4.5 22 12H10z" />
      <path fill="#fff" d="M30 48h4v9h-4z" />
    </svg>
  ),
]

// Fallback text matches what was previously hardcoded in this component
const FALLBACK_TEXTS = [
  'Time And Materials Pricing—So You Only Pay For What Your Job Actually Needs.',
  'Licensed And Insured Electricians Who Treat Your Home Or Building With Respect',
  'Clear Communication—We\'ll Walk You Through What We\'re Doing And Why',
  'Local Folks Who Care About Doing Things The Right Way—Not Just The Fast Way',
]

export default function Expect({ dark = false, items: cmsProp }) {
  // cmsProp is [{text}] from the CMS; fall back to hardcoded texts + keep fixed icons
  const displayItems = cmsProp?.length
    ? cmsProp.map((ci, i) => ({ text: ci.text, icon: ICONS[i % ICONS.length] }))
    : FALLBACK_TEXTS.map((text, i) => ({ text, icon: ICONS[i] }))

  return (
    <section className={`expect-section${dark ? ' expect-dark' : ''}`} id="about">
      <div className="wrap">
        <p className="eyebrow-center">Who We Are</p>
        <h2 className="center-heading">WHAT YOU CAN <span className="text-orange">EXPECT</span></h2>
        <div className="expect-grid">
          {displayItems.map((item, i) => (
            <div className="expect-item" key={i}>
              <div className="expect-icon" aria-hidden="true">{item.icon}</div>
              <div className="expect-text"><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
