import { formatDate } from '../lib/utils'
import { getSiteSettings } from '../lib/cms'

const PLATFORM_LABEL = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok' }
const PLATFORM_COLOR = { facebook: '#1877F2', instagram: '#E1306C', tiktok: '#010101' }

// Social icon SVGs — same set used in the footer for visual consistency
const SOCIAL_ICONS = {
  facebook: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39-.67.67-1.08 1.34-1.39 2.13-.3.76-.5 1.64-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91C24 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52V6.86a4.85 4.85 0 0 1-1.84-.17z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>
  ),
}

export default async function StayConnected({ posts = [], variant = 'dark' }) {
  const className = `stay-connected${variant === 'light' ? ' stay-connected--light' : ''}`

  // Pull social URLs from SiteSettings (same source as the footer)
  const s = (await getSiteSettings()) || {}
  const socialLinks = [
    { key: 'facebook',  href: s.facebook,  label: 'Facebook'  },
    { key: 'instagram', href: s.instagram, label: 'Instagram' },
    { key: 'tiktok',    href: s.tiktok,    label: 'TikTok'    },
    { key: 'youtube',   href: s.youtube,   label: 'YouTube'   },
  ].filter(l => l.href && l.href !== '#')

  return (
    <section className={className} id="stay-connected">
      <div className="wrap">
        <p className="eyebrow-center">Social</p>
        <h2 className="center-heading">STAY <span className="text-orange">CONNECTED</span></h2>
        <p className="stay-connected-sub">
          Follow us for project updates, electrical tips, and behind-the-scenes moments.
        </p>

        {socialLinks.length > 0 && (
          <div className="stay-connected-icons">
            {socialLinks.map(({ key, href, label }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="stay-connected-icon"
              >
                {SOCIAL_ICONS[key]}
              </a>
            ))}
          </div>
        )}

        {posts.length === 0 ? (
          <p className="social-posts-empty">Check back soon for updates.</p>
        ) : (
          <div className="social-posts-grid">
            {posts.map(post => (
              <a
                key={post.id}
                href={post.postUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="social-post-card"
                aria-label={post.caption}
              >
                <div className="social-post-thumb">
                  {post.thumbnail ? (
                    <img src={post.thumbnail.url} alt={post.thumbnail.alt} loading="lazy" />
                  ) : (
                    <div className="social-post-thumb-placeholder" />
                  )}
                  {post.postType === 'reel' && (
                    <span className="social-post-play">&#9654;</span>
                  )}
                  <span
                    className="social-post-platform-badge"
                    style={{ background: PLATFORM_COLOR[post.platform] || '#333' }}
                  >
                    {PLATFORM_LABEL[post.platform] || post.platform}
                  </span>
                </div>
                <div className="social-post-body">
                  <p className="social-post-caption">{post.caption}</p>
                  {post.publishedAt && (
                    <p className="social-post-date">{formatDate(post.publishedAt)}</p>
                  )}
                  <span className="social-post-cta">
                    View on {PLATFORM_LABEL[post.platform] || 'Social'} &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
