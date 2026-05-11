/**
 * HeroBlock — block-driven hero section.
 * Mirrors the HTML/class structure of ServiceHero.jsx and Hero.jsx.
 */
export default function HeroBlock({
  eyebrow,
  titleLines = [],
  tagline,
  body,
  ctaLabel = 'CALL NOW — 763-292-1191',
  ctaHref = '/contact-us',
  backgroundGradient,
  breadcrumb = [],
}) {
  return (
    <section className="hero" id="home" style={backgroundGradient ? { background: backgroundGradient } : undefined}>
      <div className="hero-bg"></div>

      {breadcrumb.length > 0 && (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <ol className="breadcrumb-list">
            {breadcrumb.map((crumb, i) => (
              <li key={i} className="breadcrumb-item">
                {crumb.href ? (
                  <a href={crumb.href}>{crumb.label}</a>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {i < breadcrumb.length - 1 && <span className="breadcrumb-sep" aria-hidden="true"> / </span>}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="hero-inner">
        <div className="hero-left">
          {eyebrow && <p className="hero-eyebrow">{eyebrow}</p>}
          {titleLines.length > 0 && (
            <h1>
              {titleLines.map((item, i) => (
                <span className="hero-title-line" key={i}>
                  {i === 0 ? item.line : <span className="text-orange">{item.line}</span>}
                </span>
              ))}
            </h1>
          )}
          {tagline && <p className="hero-tagline">{tagline}</p>}
          {body && <p className="hero-body">{body}</p>}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="btn-orange-full">{ctaLabel}</a>
          )}
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>Phone Is Usually The Fastest Way To Reach You,</strong> But We&apos;re Happy To Follow Up However Works Best.
          </div>
          <form className="hero-form" action="#" method="post">
            <div className="form-row-2">
              <input type="text" placeholder="First &amp; Last name *" required />
              <input type="tel" placeholder="Phone number *" required />
            </div>
            <input type="email" placeholder="Email*" required />
            <button type="submit" className="btn-orange-full">NEXT</button>
          </form>
        </div>
      </div>
    </section>
  )
}
