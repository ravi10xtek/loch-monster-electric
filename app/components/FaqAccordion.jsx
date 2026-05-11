'use client'
import { useState } from 'react'

export default function FaqAccordion({ items, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null)

  if (!items?.length) return null

  function toggle(i) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className="jp-faq-wrap">
      <h2 className="jp-faq-title">{title}</h2>
    <div className="jp-faq">
      {items.map((item, i) => (
        <div key={i} className="acc-item">
          <button
            className={`acc-btn${openIndex === i ? ' open' : ''}`}
            onClick={() => toggle(i)}
          >
            {item.question}
          </button>
          <div className={`acc-body${openIndex === i ? ' open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}
