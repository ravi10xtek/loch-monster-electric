import HeroForm from './HeroForm'

// Fallback text matches what was previously hardcoded in this component
const FALLBACK_TITLE_HTML =
  'FROM PIPES TO POWER&mdash;<br /><span class="text-orange">SAME CREW, SAME HEART.</span>'
const FALLBACK_AUTHOR = 'By Mike Lochner Jr.'
const FALLBACK_PARAGRAPHS = [
  'Because we kept hearing it.',
  '"Do you do electrical?"',
  '"I wish you could just handle the whole thing."',
  "So now we can. If we're already the crew you trust for plumbing, it makes sense to handle the rest. Remodels, panel upgrades, service calls—we've got the team, the tools, and the mindset to do it right. Different trade. Same neighbors. Same you.",
]

export default function AboutHero({ data }) {
  const d = data || {}

  const titleHtml = d.heroTitle || FALLBACK_TITLE_HTML
  const author = d.heroAuthor || FALLBACK_AUTHOR
  const paragraphs =
    d.heroParagraphs?.length
      ? d.heroParagraphs.map(p => p.text).filter(Boolean)
      : FALLBACK_PARAGRAPHS
  const bgImage = d.heroImage?.url || null

  return (
    <section className="hero about-hero" id="home">
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

      <nav className="breadcrumb-nav" aria-label="breadcrumb">
        <div className="wrap">
          <ol className="breadcrumb">
            <li><a href="/">Home</a></li>
            <li aria-current="page">About Us</li>
          </ol>
        </div>
      </nav>

      <div className="hero-inner about-hero-inner">
        <div className="hero-left">
          <h1
            className="about-hero-h1"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />
          <p className="about-hero-author">{author}</p>
          {paragraphs.map((p, i) => {
            // Treat lines that start and end with a quote as quote-styled
            const isQuote = /^["“].*["”]$/.test(p)
            return (
              <p
                key={i}
                className={isQuote ? 'about-hero-quote' : 'hero-body'}
              >
                {p}
              </p>
            )
          })}
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
