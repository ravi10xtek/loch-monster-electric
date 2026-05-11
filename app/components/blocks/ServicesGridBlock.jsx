/**
 * ServicesGridBlock — alternating image/content grid of service cards.
 * Mirrors the HTML/class structure of SubServiceSections.jsx.
 */
function splitBody(body) {
  if (!body) return ['', '']
  const sentences = body.split(/(?<=\.) (?=[A-Z])/)
  const mid = Math.ceil(sentences.length / 2)
  const p1 = sentences.slice(0, mid).join(' ')
  const p2 = sentences.slice(mid).join(' ')
  return p2.trim() ? [p1, p2] : [p1, '']
}

export default function ServicesGridBlock({ heading, cards = [] }) {
  return (
    <section className="hub-services-section">
      {heading && (
        <div className="wrap">
          <h2 className="center-heading">{heading}</h2>
        </div>
      )}
      <div className="hub-alt-grid">
        {cards.map((card, i) => {
          const [para1, para2] = splitBody(card.body)
          const imgCell = (
            <div
              key={`${card.label}-img`}
              className="hub-alt-img"
              style={{ background: card.gradient || card.color }}
            >
              <span className="hub-alt-label">{card.label}</span>
            </div>
          )
          const contentCell = (
            <div key={`${card.label}-content`} className="hub-alt-content">
              <h2>{card.heading}</h2>
              {card.tagline && <p className="hub-alt-tagline">{card.tagline}</p>}
              {para1 && <p>{para1}</p>}
              {para2 && <p>{para2}</p>}
              <div className="hub-alt-actions">
                <a href="/contact-us" className="btn-dark-sm">BOOK NOW</a>
                {card.href && <a href={card.href} className="btn-outline-sm">READ MORE</a>}
              </div>
            </div>
          )
          return i % 2 === 0
            ? [imgCell, contentCell]
            : [contentCell, imgCell]
        })}
      </div>
    </section>
  )
}
