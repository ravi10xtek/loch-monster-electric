import Link from 'next/link'

export const metadata = {
  title: '404 — Page Not Found | Loch Monster Electric',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111', color: '#fff', textAlign: 'center', padding: '4rem 1.5rem' }}>
      <div>
        <p style={{ color: '#f97316', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          404 — Page Not Found
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.25rem' }}>
          THIS PAGE<br /><span style={{ color: '#f97316' }}>DOESN&rsquo;T EXIST</span>
        </h1>
        <p style={{ color: '#aaa', maxWidth: '36ch', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Looks like that link is dead. Head back home or give us a call&nbsp;—&nbsp;we&rsquo;re easier to reach than this page.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ display: 'inline-block', background: '#f97316', color: '#fff', fontWeight: 700, letterSpacing: '0.08em', padding: '0.85rem 2rem', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Back to Home
          </Link>
          <a href="tel:7632921191" style={{ display: 'inline-block', border: '1px solid #444', color: '#fff', fontWeight: 700, letterSpacing: '0.08em', padding: '0.85rem 2rem', textDecoration: 'none', textTransform: 'uppercase', fontSize: '0.875rem' }}>
            Call 763-292-1191
          </a>
        </div>
      </div>
    </main>
  )
}
