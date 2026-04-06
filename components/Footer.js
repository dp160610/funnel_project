import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h4>Property Edge</h4>
          <p>A results-driven real estate marketing agency committed to helping developers succeed online. Full-funnel digital strategies that close deals.</p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/RealatteDigitalAgency/" className="footer-social" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/realatte" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/realattedigital/" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Services</h4>
          <Link href="/branding">Branding</Link>
          <Link href="/influence">Influence</Link>
          <Link href="/performance">Performance</Link>
          <Link href="/tech">RealTech</Link>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <Link href="/about">Our Story</Link>
          <Link href="/portfolio">Our Work</Link>
          <Link href="/about#team">Meet Our Team</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="footer-column">
          <h4>Contact Info</h4>
          <a href="mailto:connect@propertyedge.com">connect@propertyedge.com</a>
          <a href="tel:+919987130371">+91 9987130371</a>
          <p className="footer-contact-detail">
            Head Office (Mumbai)<br />
            Premier IT Park, First Floor,<br />
            Road Number 11, Marol MIDC,<br />
            Andheri East, Mumbai,<br />
            Maharashtra 400069
          </p>
          <p className="footer-contact-detail" style={{ marginTop: '12px' }}>
            Office Hours:<br />
            Mon &ndash; Fri: 10 am To 7:00 pm<br />
            Sat: 10:00 am To 2:00 pm
          </p>
        </div>
      </div>
      <div className="footer-seo">
        <div className="footer-seo-inner">
          <p>At Property Edge, we are a results-driven real estate marketing agency committed to helping developers succeed online. As a leading real estate digital marketing agency, Property Edge delivers high-impact digital marketing for real estate that includes everything from real estate social media marketing to strategic real estate lead generation. Recognized among the best digital marketing agencies for real estate, our team specializes in custom solutions tailored to your brand.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright &copy; 2025, All Rights Reserved Property Edge</p>
        <p>Built for Real Estate. Driven by Results.</p>
      </div>
    </footer>
  )
}