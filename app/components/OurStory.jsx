// Fallback text matches what was previously hardcoded in this component
const FALLBACK_EYEBROW = 'Our Story'
const FALLBACK_HEADING =
  'FROM PIPES TO POWER&mdash;<span class="text-orange">SAME CREW, SAME HEART.</span>'
const FALLBACK_PARAGRAPHS = [
  "Loch Monster started in plumbing. One truck. One goal: do the kind of work we'd want done in our own homes. Over the years, customers kept asking the same thing: “Do you guys do electrical too?” Now we do.",
  "Loch Monster Electric brings the same mindset to wiring — honest pricing, respectful service, and a crew that shows up when they say they will. Different trade. Same commitment to doing the job right.",
]
const FALLBACK_CTA_LABEL = 'LEARN MORE'
const FALLBACK_CTA_HREF = '/about-us'

export default function OurStory({ data }) {
  const d = data || {}
  const eyebrow = d.storyEyebrow || FALLBACK_EYEBROW
  const headingHtml = d.storyHeading || FALLBACK_HEADING
  const paragraphs = d.storyParagraphs?.length
    ? d.storyParagraphs.map(p => p.text).filter(Boolean)
    : FALLBACK_PARAGRAPHS
  const ctaLabel = d.storyCtaLabel || FALLBACK_CTA_LABEL
  const ctaHref = d.storyCtaHref || FALLBACK_CTA_HREF

  return (
    <section className="pipes-section" id="story">
      <div className="wrap">
        <div className="pipes-grid">
          <div className="pipes-text">
            <p className="pipes-eyebrow">{eyebrow}</p>
            <h2
              className="pipes-heading"
              dangerouslySetInnerHTML={{ __html: headingHtml }}
            />
            {paragraphs.map((p, i) => (
              <p key={i} className="pipes-body">{p}</p>
            ))}
            <a href={ctaHref} className="pipes-cta">{ctaLabel}</a>
          </div>
          <div className="pipes-video">
            <div className="pipes-video-frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/Y-slwgEpWgc?rel=0"
                title="Loch Monster Electric — Our Story"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
