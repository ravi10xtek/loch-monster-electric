import { buildPageMetadata } from '../lib/cms'
import HomeInteractions from '../ui/home-interactions'

export async function generateMetadata() {
  return buildPageMetadata('cookie-policy', {
    title: 'Cookie Policy | Loch Monster Electric',
    description: 'How Loch Monster Electric uses cookies and similar tracking technologies on its website.',
  })
}

export default function CookiePolicyPage() {
  return (
    <>
      <HomeInteractions />
      <main>

        {/* Hero */}
        <section className="legal-hero">
          <div className="wrap">
            <p className="legal-hero-eyebrow">Legal</p>
            <h1>Cookie Policy</h1>
            <p className="legal-hero-date">Effective Date: July 23, 2025</p>
          </div>
        </section>

        {/* Body */}
        <section className="legal-body">
          <div className="wrap legal-wrap">

            <p className="legal-intro">
              This Cookie Policy explains how Loch Monster Electric and its parent company (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) use cookies and similar technologies when you visit our website at lochmonsterelectric.com.
            </p>

            <div className="legal-section">
              <h2>What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how visitors interact with it. Cookies cannot run programs or deliver viruses — they are simply a record of information.
              </p>
            </div>

            <div className="legal-section">
              <h2>What Cookies We Use</h2>
              <p>Our website uses a limited set of cookies solely for analytics purposes:</p>
              <ul>
                <li>
                  <strong>Google Analytics:</strong> We use Google Analytics to understand how visitors find and use our site — for example, which pages are most visited and how long visitors stay. This data is aggregated and anonymous; it does not identify you personally. Google Analytics sets cookies such as <code>_ga</code> and <code>_gid</code> to track sessions and distinguish users.
                </li>
                <li>
                  <strong>Essential / Functional Cookies:</strong> Our site may set a small number of technical cookies required for basic site functionality, such as remembering form state. These are session-based and expire when you close your browser.
                </li>
              </ul>
              <p>
                We do not use advertising cookies, tracking pixels, or any third-party cookies for retargeting or marketing purposes at this time.
              </p>
            </div>

            <div className="legal-section">
              <h2>How to Control Cookies</h2>
              <p>
                You can control and delete cookies through your browser settings at any time. Most browsers allow you to refuse new cookies, delete existing cookies, or be notified when a new cookie is set. Please note that disabling cookies may affect the functionality of some parts of our website.
              </p>
              <p>
                For instructions on managing cookies in your specific browser, visit your browser&rsquo;s help documentation. You can also opt out of Google Analytics tracking at any time by installing the{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>
            </div>

            <div className="legal-section">
              <h2>Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in the technologies we use or applicable legal requirements. Any updates will be posted on this page with a revised effective date. We encourage you to check back periodically.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>If you have any questions about how we use cookies, please reach out:</p>
              <div className="legal-contact">
                <p><strong>Phone:</strong> <a href="tel:7632921191">763-292-1191</a></p>
                <p><strong>Email:</strong> <a href="mailto:joseph.loch12@gmail.com">joseph.loch12@gmail.com</a></p>
              </div>
            </div>

          </div>
        </section>

      </main>
    </>
  )
}
