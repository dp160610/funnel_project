import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://realatte.com/images/logo-2.png"
            alt="Property Edge"
            style={{ height: '36px', width: 'auto' }}
            onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'inline'; }}
          />
          <span style={{ display: 'none', color: '#fff', fontWeight: 800, fontSize: '20px' }}>Property Edge</span>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/branding" className="nav-link">Branding</Link></li>
            <li><Link href="/influence" className="nav-link">Influence</Link></li>
            <li><Link href="/performance" className="nav-link">Performance</Link></li>
            <li><Link href="/tech" className="nav-link">RealTech</Link></li>
            <li><Link href="/gifting" className="nav-link">Gifting</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
          </ul>
        </nav>
        <Link href="/contact" className="header-cta">Let&apos;s Talk</Link>
      </div>
    </header>
  )
}
