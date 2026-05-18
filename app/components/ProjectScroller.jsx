'use client'

import { useState } from 'react'

const TABS = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'team-events', label: 'Team & Events' },
]

export default function ProjectScroller({ projects = [] }) {
  const [activeTab, setActiveTab] = useState('all')
  const [lightbox, setLightbox] = useState(null) // { project, photoIndex }

  const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab)

  const openLightbox = (project, photoIndex = 0) => {
    setLightbox({ project, photoIndex })
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightbox(null)
    document.body.style.overflow = ''
  }

  const prevPhoto = () => {
    const total = (lightbox.project.photos?.length || 0) + 1
    setLightbox(prev => ({ ...prev, photoIndex: (prev.photoIndex - 1 + total) % total }))
  }

  const nextPhoto = () => {
    const total = (lightbox.project.photos?.length || 0) + 1
    setLightbox(prev => ({ ...prev, photoIndex: (prev.photoIndex + 1) % total }))
  }

  // All photos for lightbox: coverImage first, then photos[]
  const getLightboxPhotos = (project) => {
    const photos = []
    if (project.coverImage) photos.push({ url: project.coverImage.url, alt: project.coverImage.alt })
    ;(project.photos || []).forEach(p => { if (p.image) photos.push({ url: p.image.url, alt: p.image.alt, caption: p.caption }) })
    return photos
  }

  return (
    <section className="projects-section" id="projects">
      <div className="wrap">
        <p className="eyebrow-center">Portfolio</p>
        <h2 className="center-heading">Our <span className="text-orange">Projects</span></h2>
        <p className="projects-intro">From residential panel upgrades to large-scale commercial installations — browse our completed work.</p>

        <div className="tabs-row">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`tab${activeTab === tab.id ? ' active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="projects-empty">No projects yet — check back soon.</p>
        ) : (
          <div className="project-cards-grid">
            {filtered.map(project => (
              <button
                key={project.id}
                className="project-card"
                onClick={() => openLightbox(project, 0)}
                aria-label={`View ${project.title}`}
              >
                <div className="project-card-img">
                  {project.coverImage ? (
                    <img src={project.coverImage.url} alt={project.coverImage.alt} loading="lazy" />
                  ) : (
                    <div className="project-card-img-placeholder" />
                  )}
                  <span className="project-card-category">{TABS.find(t => t.id === project.category)?.label}</span>
                </div>
                <div className="project-card-body">
                  <p className="project-card-service">{project.serviceType}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  {project.location && <p className="project-card-location">📍 {project.location}</p>}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {lightbox && (() => {
        const photos = getLightboxPhotos(lightbox.project)
        const photo = photos[lightbox.photoIndex]
        const hasMultiple = photos.length > 1
        return (
          <div className="lb-overlay" onClick={closeLightbox}>
            <div className="lb-modal" onClick={e => e.stopPropagation()}>
              <button className="lb-close" onClick={closeLightbox} aria-label="Close">✕</button>
              <div className="lb-left">
                <div className="lb-img-wrap">
                  {photo && <img src={photo.url} alt={photo.alt} />}
                  {hasMultiple && (
                    <>
                      <button className="lb-arrow lb-prev" onClick={prevPhoto} aria-label="Previous">‹</button>
                      <button className="lb-arrow lb-next" onClick={nextPhoto} aria-label="Next">›</button>
                    </>
                  )}
                </div>
                {hasMultiple && (
                  <div className="lb-dots">
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        className={`lb-dot${i === lightbox.photoIndex ? ' active' : ''}`}
                        onClick={() => setLightbox(prev => ({ ...prev, photoIndex: i }))}
                        aria-label={`Photo ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
                {photo?.caption && <p className="lb-caption">{photo.caption}</p>}
              </div>
              <div className="lb-right">
                <span className="lb-category">{TABS.find(t => t.id === lightbox.project.category)?.label}</span>
                <h2 className="lb-title">{lightbox.project.title}</h2>
                {lightbox.project.serviceType && <p className="lb-meta">🔧 {lightbox.project.serviceType}</p>}
                {lightbox.project.location && <p className="lb-meta">📍 {lightbox.project.location}</p>}
                {lightbox.project.completedAt && (
                  <p className="lb-meta">📅 {new Date(lightbox.project.completedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                )}
                {lightbox.project.excerpt && <p className="lb-excerpt">{lightbox.project.excerpt}</p>}
                <p className="lb-photo-count">{lightbox.photoIndex + 1} / {photos.length}</p>
              </div>
            </div>
          </div>
        )
      })()}
    </section>
  )
}
