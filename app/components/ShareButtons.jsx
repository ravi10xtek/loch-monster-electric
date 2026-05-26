'use client'

import { useEffect, useState } from 'react'

/**
 * Blog post share buttons: Facebook, X/Twitter, LinkedIn, Email, Copy Link.
 *
 * Props:
 *   - url: canonical URL fallback (used during SSR + before hydration).
 *          Should be the production canonical (https://www.lochmonster...).
 *   - title: post title (used for X tweet text + email subject)
 *
 * On the client we override `url` with `window.location.href` so share
 * dialogs use the URL the visitor is actually on. This matters pre-launch
 * because the canonical production domain still serves the old Wix site
 * (so Facebook's scraper 404s when it fetches that URL).
 */
export default function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false)
  const [liveUrl, setLiveUrl] = useState(url)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location?.href) {
      // Strip hash/query so share previews don't pull random params
      setLiveUrl(window.location.href.split('#')[0].split('?')[0])
    }
  }, [])

  const enc = (s) => encodeURIComponent(s)
  const shareUrl = enc(liveUrl)
  const shareTitle = enc(title)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(liveUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers / non-https contexts
      const ta = document.createElement('textarea')
      ta.value = liveUrl
      document.body.appendChild(ta)
      ta.select()
      try { document.execCommand('copy'); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch {}
      document.body.removeChild(ta)
    }
  }

  return (
    <div className="jp-share">
      <span className="jp-share-label">Share</span>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="jp-share-btn"
        aria-label="Share on Facebook"
        title="Share on Facebook"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" />
        </svg>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="jp-share-btn"
        aria-label="Share on X"
        title="Share on X (Twitter)"
      >
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="jp-share-btn"
        aria-label="Share on LinkedIn"
        title="Share on LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.692H5.667v8.645h2.672zM7.003 8.541a1.546 1.546 0 1 0 0-3.092 1.546 1.546 0 0 0 0 3.092zm11.335 9.796v-4.957c0-2.405-1.282-3.522-2.992-3.522a2.58 2.58 0 0 0-2.349 1.295V9.692H10.32c.036.755 0 8.645 0 8.645h2.677V13.51a1.832 1.832 0 0 1 .088-.652c.24-.652.838-1.326 1.815-1.326 1.282 0 1.794.977 1.794 2.406v4.4h2.644z" />
        </svg>
      </a>

      <a
        href={`mailto:?subject=${shareTitle}&body=${enc('Thought you might find this useful: ')}${shareUrl}`}
        className="jp-share-btn"
        aria-label="Share via Email"
        title="Share via Email"
      >
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={`jp-share-btn jp-share-copy${copied ? ' jp-share-copy--copied' : ''}`}
        aria-label={copied ? 'Link copied' : 'Copy link'}
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {copied ? (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>

      {copied && <span className="jp-share-copied">Link copied!</span>}
    </div>
  )
}
