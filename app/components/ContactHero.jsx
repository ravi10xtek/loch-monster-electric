import SmartBreadcrumb from '../ui/smart-breadcrumb'

export default function ContactHero({ cms }) {
  const c = cms || {}

  const bgImage    = c.heroImage?.url || null
  const heading    = c.heading        || "LET'S TALK"
  const phone      = c.phone          || '763-292-1191'
  const phoneHref  = c.phoneHref      || 'tel:7632921191'
  const email      = c.email          || 'service@lochmonsterelectric.com'
  const address    = c.address        || '7600 W 27th St # 213,\nSt Louis Park, MN 55426'
  const formHeader = c.formHeader     || "Phone Is Usually The Fastest Way To Reach You, But We're Happy To Follow Up However Works Best."

  const bodyParagraphs = c.bodyParagraphs?.length
    ? c.bodyParagraphs.map(p => p.text)
    : [
        'Call, text, email, or fill out the form — whatever works for you.',
        "Whether you've got a small repair, a bigger project, or something that suddenly stopped working — reach out. We're here to help.",
      ]

  // Split heading into two lines for orange treatment — last word gets orange
  const words = heading.trim().split(/\s+/)
  const line1 = words.slice(0, -1).join(' ')
  const line2 = words[words.length - 1]

  return (
    <section className="hero" id="home">
      <div
        className="hero-bg"
        style={bgImage ? {
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.62) 45%, rgba(0,0,0,0.68) 100%), url('${bgImage}')`,
        } : undefined}
      />
      <SmartBreadcrumb />
      <div className="hero-inner">

        {/* ── Left — info ──────────────────────────────────── */}
        <div className="hero-left">
          <p className="hero-eyebrow">Contact Us</p>
          <h1>
            {line1 && <span className="hero-title-line">{line1}</span>}
            <span className="hero-title-line"><span className="text-orange">{line2}</span></span>
          </h1>

          {bodyParagraphs.map((text, i) => (
            <p key={i} className="hero-body" style={i > 0 ? { marginTop: '10px' } : undefined}>{text}</p>
          ))}

          <div className="contact-details">
            <a href={phoneHref} className="contact-detail-row">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>CALL NOW!&nbsp; {phone}</span>
            </a>
            <a href={`mailto:${email}`} className="contact-detail-row">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>{email}</span>
            </a>
            <div className="contact-detail-row">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span style={{ whiteSpace: 'pre-line' }}>{address}</span>
            </div>
          </div>
        </div>

        {/* ── Right — form ─────────────────────────────────── */}
        <div className="hero-form-wrap">
          <div className="hero-form-header">
            <strong>{formHeader}</strong>
          </div>
          <form className="hero-form" action="#" method="post">
            <div className="form-row-2">
              <input type="text" placeholder="First &amp; Last name *" required />
              <input type="tel" placeholder="Phone number *" required />
            </div>
            <input type="email" placeholder="Email*" required />
            <textarea placeholder="Write your message.." rows="5"></textarea>
            <button type="submit" className="btn-orange-full">SUBMIT</button>
          </form>
        </div>

      </div>
    </section>
  )
}
