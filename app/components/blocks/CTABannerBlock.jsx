/**
 * CTABannerBlock — CTA banner in orange or dark variant.
 * Mirrors the HTML/class structure of OrangeBanner.jsx.
 */
export default function CTABannerBlock({
  heading = "Ready to Get Started? Let's Talk.",
  subheading,
  ctaLabel = 'CALL NOW — 763-292-1191',
  ctaHref = 'tel:7632921191',
  variant = 'orange',
}) {
  return (
    <section
      className={`orange-banner${variant === 'dark' ? ' orange-banner--dark' : ''}`}
      id="cta-banner"
    >
      <div className="orange-banner-inner">
        <div className="ob-text">
          <h2>{heading}</h2>
          {subheading && <p>{subheading}</p>}
          <a href={ctaHref} className="btn-dark-sm">{ctaLabel}</a>
        </div>
      </div>
    </section>
  )
}
