export default function CityGrid({ cities }) {
  return (
    <section className="city-grid-section">
      <p className="eyebrow-center">Where We Work</p>
      <div className="city-grid-links">
        {cities.map((city) => (
          <a key={city.slug} href={`/service-areas/${city.slug}`} className="city-grid-link">
            {city.name.toUpperCase()}, {city.state}
          </a>
        ))}
      </div>
    </section>
  )
}
