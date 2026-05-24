import PhoneIcon from './PhoneIcon'

export default function OrangeBannerView({ heading, body, note, ctaLabel }) {
  // Strip any leading 📞 emoji (and surrounding whitespace) from older CMS
  // copy so the SVG icon is the only phone visual.
  const cleanLabel = String(ctaLabel || '').replace(/^\s*📞\s*/, '').trim()
  return (
    <section className="orange-banner" id="commercial">
      <div className="orange-banner-inner">
        <div className="ob-text">
          <h2 dangerouslySetInnerHTML={{ __html: heading }} />
          <p>{body}</p>
          {note && <p className="ob-mini">{note}</p>}
          <a href="tel:7632921191" className="btn-dark-sm">
            <PhoneIcon /> <span>{cleanLabel}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
