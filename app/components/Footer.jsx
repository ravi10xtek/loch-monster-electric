import { allCities } from '../data/serviceAreas'

export default function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-top">
        <div className="wrap footer-top-inner">

          {/* Brand column */}
          <div className="fc fc-brand">
            <img src="/logo-footer-mark.png" alt="Loch Monster Electric" className="footer-logo-img" />
            <div className="fc-contact-block">
              <a href="mailto:service@lochmonsterelectric.com" className="fc-contact-link">
                service@lochmonsterelectric.com
              </a>
              <p className="fc-address">7600 W 27th St # 213, St Louis Park, MN 55426</p>
            </div>
            <a href="tel:7632921191" className="fc-call">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
              CALL NOW! &nbsp;763-292-1191
            </a>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94z" /></svg>
              </a>
              <a href="#" aria-label="X">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" aria-label="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39-.67.67-1.08 1.34-1.39 2.13-.3.76-.5 1.64-.56 2.91C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91C24 15.67 24 15.26 24 12s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.31 1.34 20.64.93 19.85.62c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" /></svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 .77 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z" /></svg>
              </a>
              <a href="#" aria-label="TikTok">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.69a8.16 8.16 0 0 0 4.77 1.52V6.86a4.85 4.85 0 0 1-1.84-.17z" /></svg>
              </a>
            </div>
            <div className="fc-meta-block">
              <p className="fc-meta">Monday–Friday: 8:00 AM – 5:00 PM<br />Emergency service available 24/7</p>
              <p className="fc-meta">Licensed Minnesota &amp; Wisconsin Electrical Contractor Serving the Twin Cities Metro and Surrounding Areas</p>
              <p className="fc-meta">MN LIC: EA807591<br />WI LIC: 1443 — EC</p>
            </div>
          </div>

          {/* Link columns */}
          <div className="footer-links">
            <div className="fl-block">
              <h5>RESIDENTIAL</h5>
              <ul>
                <li><a href="/residential-electrical-services/electrical-repairs">Electrical Repairs</a></li>
                <li><a href="/residential-electrical-services/electrical-upgrades">Electrical Upgrades</a></li>
                <li><a href="/residential-electrical-services/installations">Installations</a></li>
                <li><a href="/residential-electrical-services/safety-compliance">Safety &amp; Compliance</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>COMMERCIAL</h5>
              <ul>
                <li><a href="/commercial-electrical-services/commercial-repairs">Commercial Repairs</a></li>
                <li><a href="/commercial-electrical-services/power-distribution">Power &amp; Distribution</a></li>
                <li><a href="/commercial-electrical-services/lighting-systems">Lighting Systems</a></li>
                <li><a href="/commercial-electrical-services/compliance-infrastructure">Compliance &amp; Infrastructure</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>PRICING</h5>
              <ul>
                <li><a href="/pricing-estimates">Residential Pricing</a></li>
                <li><a href="/pricing-estimates">Commercial Pricing</a></li>
                <li><a href="/pricing-estimates">Service Call Fees</a></li>
                <li><a href="/pricing-estimates">Financing Options</a></li>
              </ul>
            </div>
            <div className="fl-block fl-areas">
              <h5>SERVICE AREAS</h5>
              <ul className="fc-cities">
                {allCities.map((city) => (
                  <li key={city.slug}>
                    <a href={`/service-areas/${city.slug}`}>{city.name}, {city.state}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fl-block">
              <h5>COMPANY</h5>
              <ul>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/about-us">Company Overview</a></li>
                <li><a href="#">Licensing &amp; Certifications</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>CONTACT US</h5>
              <ul>
                <li><a href="/contact-us">Schedule Service</a></li>
                <li><a href="/contact-us">Request a Quote</a></li>
                <li><a href="/contact-us">Emergency Contact</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>MEDIA</h5>
              <ul>
                <li><a href="#">Photo Gallery</a></li>
                <li><a href="#">Video Library</a></li>
                <li><a href="#">Press &amp; Mentions</a></li>
                <li><a href="#">Brand Assets</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>ELECTRICAL GLOSSARY</h5>
              <ul>
                <li><a href="/electrical-glossary#gfci">GFCI</a></li>
                <li><a href="/electrical-glossary#afci">AFCI</a></li>
                <li><a href="/electrical-glossary#load-calculation">Load Calculation</a></li>
                <li><a href="/electrical-glossary#three-phase-power">Three-Phase Power</a></li>
                <li><a href="/electrical-glossary#nec-code">NEC Code</a></li>
              </ul>
            </div>
            <div className="fl-block">
              <h5>LEGAL &amp; POLICIES</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Disclaimer</a></li>
              </ul>
            </div>
            <div className="fl-block fl-block--empty" aria-hidden="true"></div>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <div className="wrap footer-bottom-inner">
          <span>&copy; 2026 Loch Monster Electric. All Rights Reserved.</span>
          <div className="fb-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
          <span>MN LIC: EA807591 &middot; WI LIC: 1443 — EC</span>
        </div>
      </div>
    </footer>
  );
}
