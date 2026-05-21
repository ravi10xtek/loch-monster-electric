'use client'

import { useState } from 'react'
import Image from 'next/image'
import { mediaUrl } from '../lib/normalize'

export default function WhatWeHandle({ data }) {
  const { eyebrow, heading, body, cta, tabs, cards, ctaCard } = data;
  const [activeTab, setActiveTab] = useState(tabs[0]?.id)

  return (
    <section className="services-section">
      <div className="wrap">
        <p className="eyebrow-center">{eyebrow}</p>

        <div className="tabs-row">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab${tab.id === activeTab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane${tab.id === activeTab ? ' active' : ''}`}
          >
            <div className="services-intro">
              <div className="services-intro-left">
                <h2>{tab.heading || heading}</h2>
                <p>{tab.body || body}</p>
              </div>
              <div className="services-intro-right">
                <a href="/contact-us" className="btn-orange-sm">{cta}</a>
              </div>
            </div>

            <div className="service-cards-grid">
              {cards[tab.id].map((card) => (
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
