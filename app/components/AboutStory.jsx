// Fallback text matches what was previously hardcoded in this component
const FALLBACK_EYEBROW = 'About Loch Monster Electric'
const FALLBACK_HEADING =
  'WORK WE’D WANT IN OUR <span class="text-orange">OWN HOME.</span>'
const FALLBACK_PARAGRAPHS = [
  'We started with plumbing. One truck, one guy, and one goal: take care of people and do the kind of work we’d want done in our own homes. Over the years, customers kept asking — and we kept hearing the same things done.',
  'Turns out, when you show up, do good work, and treat folks right — they ask if you do other things too.',
  'So yeah… now we do electrical.',
  'Loch Monster Electric is the same Loch Monster mindset, just with wires instead of water. Same crew (well, different licenses). Same commitment to showing up when we say we will. Same honest pricing — time and materials, so you only pay for what the job actually saves. Same respect for your time, your home, and your budget.',
  'We’re not trying to be the biggest company in town — we’re focused on being the most legendary. The crew you call first. The one you tell your neighbors about. The one you know will handle it right, every time.',
]
const FALLBACK_CTA_LABEL = 'BOOK NOW'
const FALLBACK_CTA_HREF = '/#contact'
const FALLBACK_CTA2_LABEL = 'OUR PRICING'
const FALLBACK_CTA2_HREF = '/pricing-estimates'

export default function AboutStory({ data }) {
  const d = data || {}

  const eyebrow = d.storyEyebrow || FALLBACK_EYEBROW
  const headingHtml = d.storyHeading || FALLBACK_HEADING
  const paragraphs = d.storyParagraphs?.length
    ? d.storyParagraphs.map(p => p.text).filter(Boolean)
    : FALLBACK_PARAGRAPHS
  const ctaLabel = d.storyCtaLabel || FALLBACK_CTA_LABEL
  const ctaHref = d.storyCtaHref || FALLBACK_CTA_HREF
  const ctaSecondaryLabel = d.storyCtaSecondaryLabel || FALLBACK_CTA2_LABEL
  const ctaSecondaryHref = d.storyCtaSecondaryHref || FALLBACK_CTA2_HREF

  return (
    <div className="hub-alt-grid about-story">
      <div className="hub-alt-row">

        {/* Left — YouTube video */}
        <div className="hub-alt-img about-story-video">
          <iframe
            src="https://www.youtube-nocookie.com/embed/v_VTPohPgDI?rel=0"
            title="About Loch Monster Electric"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        {/* Right — copy */}
        <div className="hub-alt-content about-story-content">
          <p className="about-story-eyebrow">{eyebrow}</p>
          <h2 dangerouslySetInnerHTML={{ __html: headingHtml }} />
          {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <p className="about-story-cta-label">Having an Electrical Problem?</p>
          <div className="hub-alt-actions">
            <a href={ctaHref} className="btn-dark-sm">{ctaLabel}</a>
            <a href={ctaSecondaryHref} className="btn-outline-sm">{ctaSecondaryLabel}</a>
          </div>
        </div>
      </div>
    </div>
  );
}
