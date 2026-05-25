import { getCityBySlug } from '../data/serviceAreas'

export default function CityLocalSection({ city }) {
  const nearbyCities = (city.nearby || [])
    .map(slug => getCityBySlug(slug))
    .filter(Boolean)
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
            <a href="/pricing-estimates" className="btn-outline-sm">OUR PRICING</a>
          </div>
          {nearbyCities.length > 0 && (
            <p className="city-nearby">
              Also serving:{' '}
              {nearbyCities.map((c, i) => (
                <span key={c.slug}>
                  <a href={`/service-areas/${c.slug}`}>{c.name}</a>
                  {i < nearbyCities.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
          )}
        </div>
        <div
          className="city-local-img"
          style={city.cityImage
            ? {
                backgroundImage: `url('${city.cityImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }
            : { background: 'linear-gradient(160deg,#1a1a1a,#2e2e2e)' }
          }
          role={city.cityImage ? 'img' : undefined}
          aria-label={city.cityImage ? (city.cityImageAlt || `Electrician working in ${city.name}`) : undefined}
        />
      </section>
    </>
  )
}
