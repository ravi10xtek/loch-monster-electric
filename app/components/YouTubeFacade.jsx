'use client'

import { useState } from 'react'

/**
 * Click-to-play YouTube facade.
 *
 * Renders a static poster image with a custom play button overlay; only
 * loads the YouTube iframe when the user clicks. Lets us pick the thumbnail
 * (avoiding awkward play-button-on-face issues) and improves page load by
 * deferring the ~500KB YouTube embed until interaction.
 *
 * Props:
 *   - videoId: YouTube video ID (e.g. "v_VTPohPgDI")
 *   - title: video title (used for aria-label + img alt)
 *   - poster: optional custom poster image URL.
 *             Defaults to YouTube's auto-generated hqdefault (always available)
 *   - buttonPosition: 'center' | 'bottom-right' | 'top-right' (default 'center')
 */
export default function YouTubeFacade({
  videoId,
  title = 'Video',
  poster,
  buttonPosition = 'center',
}) {
  const [loaded, setLoaded] = useState(false)

  // Try the HD maxresdefault (1280x720) first; fall back to hqdefault
  // (480x360) if it 404s — maxresdefault isn't generated for every video.
  const [posterSrc, setPosterSrc] = useState(
    poster || `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  )
  const handlePosterError = () => {
    if (!poster && !posterSrc.includes('hqdefault')) {
      setPosterSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)
    }
  }

  if (loaded) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    )
  }

  return (
    <button
      type="button"
      className={`yt-facade yt-facade--${buttonPosition}`}
      onClick={() => setLoaded(true)}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={posterSrc}
        alt={title}
        loading="lazy"
        onError={handlePosterError}
        className="yt-facade-poster"
      />
      <span className="yt-facade-button" aria-hidden="true">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path
            d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74 0.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
            fill="#212121"
            fillOpacity="0.85"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  )
}
