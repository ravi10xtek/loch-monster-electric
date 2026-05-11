/**
 * ImageTextBlock — side-by-side image and text section.
 * Image is served from the Payload CMS origin (NEXT_PUBLIC_CMS_URL).
 */
import Image from 'next/image'

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || 'http://localhost:3001'

export default function ImageTextBlock({
  image,
  heading,
  body,
  ctaLabel,
  ctaHref,
  imagePosition = 'left',
}) {
  if (!image) return null

  const imgSrc = image.url?.startsWith('http') ? image.url : `${CMS_URL}${image.url}`
  const imgAlt = image.alt || heading || ''

  const imgCell = (
    <div className="it-img-wrap">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={image.width || 800}
        height={image.height || 600}
        className="it-img"
        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
      />
    </div>
  )

  const contentCell = (
    <div className="it-content">
      <h2>{heading}</h2>
      <p>{body}</p>
      {ctaLabel && ctaHref && (
        <div className="it-actions">
          <a href={ctaHref} className="btn-dark-sm">{ctaLabel}</a>
        </div>
      )}
    </div>
  )

  return (
    <section className="image-text-section">
      <div className={`it-grid${imagePosition === 'right' ? ' it-grid--reverse' : ''}`}>
        {imagePosition === 'left' ? [imgCell, contentCell] : [contentCell, imgCell]}
      </div>
    </section>
  )
}
