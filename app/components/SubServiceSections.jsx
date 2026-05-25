function splitBody(body) {
  const sentences = body.split(/(?<=\.) (?=[A-Z])/);
  const mid = Math.ceil(sentences.length / 2);
  const p1 = sentences.slice(0, mid).join(' ');
  const p2 = sentences.slice(mid).join(' ');
  return p2.trim() ? [p1, p2] : [p1];
}

export default function SubServiceSections({ subServices }) {
  return (
    <section className="hub-services-section">
      <div className="hub-alt-grid">
        {subServices.map((service, i) => {
          const [para1, para2] = splitBody(service.body);
          return (
            <div key={service.label} className={`hub-alt-row${i % 2 !== 0 ? ' hub-alt-row--reverse' : ''}`}>
              <div
                className="hub-alt-img"
                style={service.image
                  ? { backgroundImage: `url('${service.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }
                  : { background: service.gradient || service.color }
                }
              >
                <span className="hub-alt-label">{service.label}</span>
              </div>
              <div className="hub-alt-content">
                <h2>{service.heading}</h2>
                {service.tagline && <p className="hub-alt-tagline">{service.tagline}</p>}
                <p>{para1}</p>
                {para2 && <p>{para2}</p>}
                <div className="hub-alt-actions">
                  <a href="tel:7632921191" className="btn-dark-sm">CALL NOW</a>
                  <a href={service.readMoreHref} className="btn-outline-sm">LEARN MORE</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
