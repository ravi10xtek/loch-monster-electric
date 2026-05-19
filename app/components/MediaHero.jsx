import SmartBreadcrumb from '../ui/smart-breadcrumb'
import HeroForm from './HeroForm'

export default function MediaHero({ data }) {
  const d = data || {}
  const eyebrow    = d.heroEyebrow    || 'Our Work'
  const titleLines = d.heroTitleLines?.length
    ? d.heroTitleLines.map(t => t.line || t)
    : ['EXPLORE OUR', 'WORK IN ACTION']
  const tagline    = d.heroTagline    || 'Real projects. Real results. From panel upgrades to full commercial builds.'
  const body       = d.heroBody       || 'Step into our world of precision, safety, and innovation. Every project tells the story of how we deliver reliable electrical solutions every day.'
  const cta1Label  = d.heroCta1Label  || 'VIEW PROJECTS'
  const cta1Href   = d.heroCta1Href   || '#projects'
  const cta2Label  = d.heroCta2Label  || 'FOLLOW US'
  const cta2Href   = d.heroCta2Href   || '#stay-connected'
  const formTitle  = d.heroFormTitle  || 'GET A FREE ESTIMATE'
  const formSub    = d.heroFormSubtitle || 'Fast response. No obligation.'
  const bgImage    = d.heroImage?.url || null

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={bgImage ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${bgImage}')`,
        } : undefined}
      />
      <SmartBreadcrumb />
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-eyebrow">{eyebrow}</p>
          <h1>
            {titleLines.map((line, i) => (
              <span key={i} className="hero-title-line">
                {i === 0 ? line : <span className="text-orange">{line}</span>}
              </span>
            ))}
          </h1>
          <p className="hero-tagline">{tagline}</p>
          <p className="hero-body">{body}</p>
          <div className="media-hero-ctas">
            <a href={cta1Href} className="btn-dark-outline">{cta1Label}</a>
            <a href={cta2Href} className="btn-orange">{cta2Label}</a>
          </div>
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>{formTitle}</strong>
            {formSub && <p style={{ marginTop: '6px', fontWeight: 400 }}>{formSub}</p>}
          </div>
          <HeroForm />
        </div>
      </div>
    </section>
  )
}
