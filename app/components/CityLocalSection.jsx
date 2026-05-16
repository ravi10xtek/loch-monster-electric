export default function CityLocalSection({ city }) {
  const issues = Array.isArray(city.commonIssues) ? city.commonIssues : []
  const neighborhoods = Array.isArray(city.neighborhoods) ? city.neighborhoods : []

  return (
    <>
      {/* Map + coverage */}
      <section className="city-coverage-section">
        <div className="city-map-embed">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(city.name + ', ' + city.state)}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className="city-coverage-content">
          <p className="eyebrow-left">Where We Work</p>
          <h2>
            WE SERVE THE ENTIRE <span className="text-orange">TWIN CITIES METRO</span>—FROM
            MINNEAPOLIS AND ST. PAUL TO MAPLE GROVE, WOODBURY, EDEN PRAIRIE, AND{' '}
            <span className="text-orange">EVERYWHERE</span> IN BETWEEN.
          </h2>
          <a href="/service-areas" className="btn-dark-sm">VIEW OUR SERVICE AREA</a>
        </div>
      </section>

      {/* Local electrician */}
      <section className="city-local-section">
        <div className="city-local-content">
          <p className="eyebrow-left">Now Hire</p>
          <h2>
            YOUR LOCAL <span className="text-orange">{city.name.toUpperCase()}, {city.state}</span> ELECTRICIAN
          </h2>
          <p>{city.blurb}</p>
          <p className="city-local-cta-label">Want to Know More?</p>
          <div className="city-local-actions">
            <a href="/residential-electrical-services" className="btn-dark-sm">ALL SERVICES</a>
            <a href="/pricing" className="btn-outline-sm">OUR PRICING</a>
          </div>
        </div>
        <div className="city-local-img" style={{ background: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)' }}></div>
      </section>

      {city.housingProfile && (
        <section className="city-housing-section">
          <div className="wrap">
            <p className="eyebrow-left">Local Housing Stock</p>
            <h2>HOMES AND BUILDINGS IN <span className="text-orange">{city.name.toUpperCase()}</span></h2>
            <p>{city.housingProfile}</p>
          </div>
        </section>
      )}

      {issues.length > 0 && (
        <section className="city-issues-section">
          <div className="wrap">
            <p className="eyebrow-left">What We Fix Most</p>
            <h2>COMMON ELECTRICAL ISSUES IN <span className="text-orange">{city.name.toUpperCase()}</span></h2>
            <div className="city-issues-grid">
              {issues.map((issue, i) => (
                <div className="city-issue-card" key={i}>
                  <h3>{issue.heading}</h3>
                  <p>{issue.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {neighborhoods.length > 0 && (
        <section className="city-neighborhoods-section">
          <div className="wrap">
            <p className="eyebrow-left">Neighborhoods Served</p>
            <h2>WHERE WE WORK IN <span className="text-orange">{city.name.toUpperCase()}</span></h2>
            <ul className="city-neighborhoods-list">
              {neighborhoods.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}
