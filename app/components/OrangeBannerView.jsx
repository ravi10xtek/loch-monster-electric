export default function OrangeBannerView({ heading, body, note, ctaLabel }) {
  return (
    <section className="orange-banner" id="commercial">
      <div className="orange-banner-inner">
        <div className="ob-text">
          <h2 dangerouslySetInnerHTML={{ __html: heading }} />
          <p>{body}</p>
          {note && <p className="ob-mini">{note}</p>}
          <a href="tel:7632921191" className="btn-dark-sm">{ctaLabel}</a>
        </div>
      </div>
    </section>
  )
}
