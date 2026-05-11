export default function WhatWeHandle({ data }) {
  const { eyebrow, heading, body, cta, tabs, cards, ctaCard } = data;

  return (
    <section className="services-section">
      <div className="wrap">
        <p className="eyebrow-center">{eyebrow}</p>

        <div className="tabs-row">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              className={`tab${i === 0 ? ' active' : ''}`}
              data-tab={`wwh-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab, i) => (
          <div
            key={tab.id}
            className={`tab-pane${i === 0 ? ' active' : ''}`}
            id={`tab-wwh-${tab.id}`}
          >
            <div className="services-intro">
              <div className="services-intro-left">
                <h2>{heading}</h2>
                <p>{body}</p>
              </div>
              <div className="services-intro-right">
                <a href="/contact-us" className="btn-orange-sm">{cta}</a>
              </div>
            </div>

            <div className="service-cards-grid">
              {cards[tab.id].map((card) => (
                <div className="scard" key={card.label}>
                  <div className="scard-img" style={{ backgroundColor: card.color }}>
                    <div className="scard-img-inner" style={{ background: card.gradient }}></div>
                    <div className="scard-label">{card.label}</div>
                  </div>
                  <div className="scard-body">{card.body}</div>
                  <a href={card.href || tab.href} className="scard-read-more">READ MORE</a>
                </div>
              ))}
              <a href="/contact-us" className="services-cta-card">
                <span>ALL<br />{tab.label}</span>
                <span className="cta-arrow">&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
