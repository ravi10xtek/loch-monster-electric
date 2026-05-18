import { formatDate } from '../lib/utils'

const PLATFORM_LABEL = { facebook: 'Facebook', instagram: 'Instagram', tiktok: 'TikTok' }
const PLATFORM_COLOR = { facebook: '#1877F2', instagram: '#E1306C', tiktok: '#010101' }

export default function StayConnected({ posts = [] }) {
  return (
    <section className="stay-connected" id="stay-connected">
      <div className="wrap">
        <p className="eyebrow-center">Social</p>
        <h2 className="center-heading">Stay <span className="text-orange">Connected</span></h2>
        <p className="stay-connected-sub">
          Follow us for project updates, electrical tips, and behind-the-scenes moments.
        </p>
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
