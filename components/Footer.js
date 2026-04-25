import Link from 'next/link'

const services = [
  { label: 'Branding', href: '/branding' },
  { label: 'Influence', href: '/influence' },
  { label: 'Funnel Engineering', href: '/funnelengineering' },
  { label: 'RealTech', href: '/tech' },
]

const company = [
  { label: 'Our Story', href: '/about' },
  { label: 'Meet Our Team', href: '/about#team' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* ── Main grid ────────────────────────────────────────── */}
      <div className="footer-main">

        {/* Brand column */}
        <div className="footer-brand-col">
          <div className="footer-logo-text">Property<span>Edge</span></div>
          <p className="footer-tagline">
            We fill booking pipelines,<br />not just ad reports.
          </p>

          <div>
            <div className="footer-address-label">Head Office · Mumbai</div>
            <p className="footer-address">
              Premier IT Park, First Floor,<br />
              Road Number 11, Marol MIDC,<br />
              Andheri East, Mumbai 400069
            </p>
          </div>

          <div className="footer-contact-links">
            <a href="mailto:connect@propertyedge.com" className="footer-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              connect@propertyedge.com
            </a>
            <a href="tel:+919987130371" className="footer-contact-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.97-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9987130371
            </a>
          </div>

          <div className="footer-socials">
            <a href="https://www.facebook.com/propertyedge/" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/propertyedge" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
            <a href="https://www.instagram.com/propertyedge/" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
          </div>
        </div>

        {/* Navigation columns */}
        <div className="footer-links-grid">
          <div className="footer-col">
            <div className="footer-col-head">Services</div>
            {services.map(s => (
              <Link key={s.href} href={s.href} className="footer-link">{s.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="footer-col-head">Company</div>
            {company.map(c => (
              <Link key={c.href} href={c.href} className="footer-link">{c.label}</Link>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div className="footer-col">
          <div className="footer-col-head">Get in Touch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div className="footer-address-label">Head Office · Mumbai</div>
              <p className="footer-address">
                Premier IT Park, First Floor,<br />
                Road Number 11, Marol MIDC,<br />
                Andheri East, Mumbai 400069
              </p>
            </div>
            <a href="mailto:connect@propertyedge.com" className="footer-contact-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              connect@propertyedge.com
            </a>
            <a href="tel:+919987130371" className="footer-contact-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.97-.98a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9987130371
            </a>
            <div className="footer-socials" style={{ marginTop: '4px' }}>
              <a href="https://www.facebook.com/propertyedge/" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/propertyedge" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com/propertyedge/" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* ── SEO text ─────────────────────────────────────────── */}
      <div className="footer-seo">
        <div className="footer-seo-inner">
          <p>Property Edge is a specialist real estate marketing agency that partners with developers, builders, and property brands to fill booking pipelines faster. From brand positioning and creative storytelling to high-performance digital campaigns, we offer end-to-end marketing solutions built exclusively for the real estate sector. Our work spans SEO, paid media, influencer activation, and conversion optimization — all engineered to reduce your cost per booking and accelerate project sell-outs. Whether you are launching a new residential tower, a commercial complex, or a township, Property Edge brings the strategy, technology, and execution muscle to make it a market success.</p>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="footer-bottom">
        <p>© 2025 Property Edge. All Rights Reserved.</p>
        <p className="footer-bottom-tag">Built for Real Estate. Driven by Results.</p>
      </div>

    </footer>
  )
}
