import Image from 'next/image'
import { mediaUrl } from '../lib/normalize'

export default function WhatWeHandle({ data }) {
  const { eyebrow, heading, body, tabs, cards } = data;

  return (
    <section className="services-section">
      <div className="wrap">
        <p className="eyebrow-center">{eyebrow}</p>

        {/* Sticky anchor-link tab nav */}
        <div className="tabs-row wwh-tabs">
          {tabs.map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} className="tab">
              {tab.label}
            </a>
          ))}
        </div>

        {/* Tab active-state script — sets first tab active, switches on click */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function initTabs() {
              var tabs = document.querySelectorAll('.wwh-tabs .tab');
              if (!tabs.length) return;
              tabs[0].classList.add('wwh-active');
              tabs.forEach(function(tab) {
                tab.addEventListener('click', function() {
                  tabs.forEach(function(t) { t.classList.remove('wwh-active'); });
                  tab.classList.add('wwh-active');
                });
              });
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initTabs);
            } else {
              initTabs();
            }
          })();
        `}} />

        {/* All sections stacked — fully server-rendered */}
        {tabs.map((tab) => (
          <div key={tab.id} id={tab.id} className="wwh-section">

            {/* Section header */}
            <div className="wwh-section-header">
              <span className="wwh-category-tag">{tab.label}</span>
              {(tab.heading || heading) && <h2 className="wwh-section-heading">{tab.heading || heading}</h2>}
              {(tab.body || body) && <p className="wwh-section-body">{tab.body || body}</p>}
            </div>

            <div className="service-cards-grid">
              {(cards[tab.id] || []).map((card) => (
                <div className="scard" key={card.label}>
                  <div className="scard-img" style={{ backgroundColor: card.color }}>
                    {card.image?.url ? (
                      <Image
                        src={mediaUrl(card.image.url)}
                        alt={card.image.alt || card.label}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 300px"
                      />
                    ) : (
                      <div className="scard-img-inner" style={{ background: card.gradient }}></div>
                    )}
                    <div className="scard-label">{card.label}</div>
                  </div>
                  <div className="scard-body">{card.body}</div>
                  <a href={card.href || tab.href} className="scard-read-more">LEARN MORE</a>
                </div>
              ))}
              <a href={tab.href} className="services-cta-card">
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
