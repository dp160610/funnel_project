import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-brand" onClick={() => setOpen(false)}>
          <Image
            src="/assets/images/logo.png"
            alt="Property Edge"
            height={36}
            width={160}
            priority
          />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/branding" className="nav-link">Branding</Link></li>
            <li><Link href="/influence" className="nav-link">Influence</Link></li>
              <li><Link href="/funnelengineering" className="nav-link">Funnel Engineering</Link></li>
            <li><Link href="/tech" className="nav-link">RealTech</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
          </ul>
        </nav>

        <Link href="/contact" className="header-cta" onClick={() => setOpen(false)}>
          Let&apos;s Talk
        </Link>

        {/* Hamburger — visible only on mobile */}
        <button
          className={`nav-hamburger${open ? ' is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="mobile-nav" onClick={() => setOpen(false)}>
          <ul>
            <li><Link href="/" className="nav-link">Home</Link></li>
            <li><Link href="/branding" className="nav-link">Branding</Link></li>
            <li><Link href="/influence" className="nav-link">Influence</Link></li>
              <li><Link href="/funnelengineering" className="nav-link">Funnel Engineering</Link></li>
            <li><Link href="/tech" className="nav-link">RealTech</Link></li>
            <li><Link href="/about" className="nav-link">About Us</Link></li>
            <li><Link href="/contact" className="nav-link">Let&apos;s Talk</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
