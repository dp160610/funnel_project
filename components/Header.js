import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// Simple header with logo and nav links. On mobile, shows a hamburger that opens a drawer.
export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { basePath } = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)

    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header" data-scrolled={scrolled ? 'true' : 'false'}>
      <div className="site-header-inner">
        <div className="site-header-glow" aria-hidden="true" />
        <Link href="/" className="site-brand" onClick={() => setOpen(false)}>
          <Image
            src={`${basePath}/assets/images/logo.png`}
            alt="Property Edge"
            width={160}
            height={49}
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

        {/* Hamburger - visible only on mobile */}
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
          <div className="mobile-nav-glow" aria-hidden="true" />
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
