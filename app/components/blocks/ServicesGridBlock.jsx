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
          return (
            <div key={card.label} className={`hub-alt-row${i % 2 !== 0 ? ' hub-alt-row--reverse' : ''}`}>
              <div
                className="hub-alt-img"
                style={{ background: card.gradient || card.color }}
              >
                <span className="hub-alt-label">{card.label}</span>
              </div>
              <div className="hub-alt-content">
                <h2>{card.heading}</h2>
                {card.tagline && <p className="hub-alt-tagline">{card.tagline}</p>}
                {para1 && <p>{para1}</p>}
                {para2 && <p>{para2}</p>}
                <div className="hub-alt-actions">
                  <a href="tel:7632921191" className="btn-dark-sm">CALL NOW</a>
                  {card.href && <a href={card.href} className="btn-outline-sm">LEARN MORE</a>}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
