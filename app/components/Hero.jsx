import HeroForm from "./HeroForm";

// Fallback text matches what was previously hardcoded in this component
const FALLBACK_TITLE_LINES = [
  'PROFESSIONAL <span class="text-orange">ELECTRICAL</span>',
  '<span class="text-orange">SERVICES</span> FOR MINNESOTA',
  'AND WISCONSIN',
]
const FALLBACK_TAGLINE = 'Serving Homes, Businesses & HOAs Across the Twin Cities'
const FALLBACK_BODY =
  "When something electrical goes wrong, it can throw your whole day off. That’s where we come in. " +
  "Loch Monster Electric helps homeowners, businesses, and community associations keep their power safe, " +
  "reliable, and up to code — without the runaround. From troubleshooting and repairs to major " +
  "upgrades, we show up ready to get the job done right."

export default function Hero({ data }) {
  const d = data || {}

  const titleLines = d.heroTitleLines?.length
    ? d.heroTitleLines.map(l => l.line).filter(Boolean)
    : FALLBACK_TITLE_LINES
  const tagline = d.heroTagline || FALLBACK_TAGLINE
  const body = d.heroBody || FALLBACK_BODY
  const bgImage = d.heroImage?.url || null

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={
          bgImage
            ? {
                backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${bgImage}')`,
              }
            : undefined
        }
      />
      <div className="hero-inner">
        <div className="hero-left">
          <h1>
            {titleLines.map((line, i) => (
              <span
                key={i}
                className="hero-title-line"
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </h1>
          <p className="hero-tagline">{tagline}</p>
          <p className="hero-body">{body}</p>
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>Phone Is Usually The Fastest Way To Reach You,</strong>{' '}But We&apos;re Happy To Follow Up However Works Best.
          </div>
          <HeroForm />
        </div>
      </div>
    </section>
  );
}
