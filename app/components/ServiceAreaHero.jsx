import ServiceAreaHeroForm from './ServiceAreaHeroForm'

export default function ServiceAreaHero({ heading, subheading, body, body2, breadcrumb, heroImage, heroImageAlt }) {
  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={heroImage ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${heroImage}')`,
        } : undefined}
      ></div>

      {breadcrumb && (
        <nav className="breadcrumb-nav" aria-label="breadcrumb">
          <div className="wrap">
            <ol className="breadcrumb">
              {breadcrumb.map((crumb, i) =>
                i === breadcrumb.length - 1
                  ? <li key={i} aria-current="page">{crumb.label}</li>
                  : <li key={i}><a href={crumb.href}>{crumb.label}</a></li>
              )}
            </ol>
          </div>
        </nav>
      )}

      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="sa-city-title">{heading}</h1>
          {subheading && <p className="hero-tagline">{subheading}</p>}
          <p className="hero-body">{body}</p>
          {body2 && <p className="hero-body">{body2}</p>}
        </div>
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>Phone Is Usually The Fastest Way To Reach You,</strong>{' '}But We&apos;re Happy To Follow Up However Works Best.
          </div>
          <ServiceAreaHeroForm />
        </div>
      </div>
    </section>
  );
}
