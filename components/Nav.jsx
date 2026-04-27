'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/funnelengineering', label: 'Funnel Engineering' },
  { href: '/branding', label: 'Branding' },
  { href: '/influence', label: 'Influence' },
  { href: '/tech', label: 'RealTech' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <header data-testid="site-nav" className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? 'bg-ink/85 backdrop-blur-xl border-b border-line' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">
        <Link href="/" data-testid="logo-link" className="flex items-center gap-3 group">
          <span
            className="bg-white inline-block transition-transform duration-500 group-hover:scale-[1.03] shadow-sm"
            style={{
              width: '230px',
              height: '56px',
              backgroundImage: 'url(https://customer-assets.emergentagent.com/job_funnel-metrics-10/artifacts/ft1ohwlb_PE%20Logo.jpg.jpeg)',
              backgroundSize: '200% auto',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            role="img"
            aria-label="Property Edge Consulting Pvt Ltd"
          />
          <span className="hidden xl:flex flex-col leading-tight ml-1 border-l border-line/70 pl-3">
            <span className="font-tech text-[9px] uppercase tracking-wider2 text-gold">Real Estate Only</span>
            <span className="font-tech text-[9px] uppercase tracking-wider2 text-bone/55">Engineered for Bookings</span>
          </span>
        </Link>
        <nav className="hidden lg:flex items-center gap-9">
          {links.slice(1).map(l => (
            <Link key={l.href} href={l.href} data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g,'-')}-link`} className="font-tech text-[12px] tracking-wider2 uppercase text-bone/80 hover:text-accent transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" data-testid="nav-cta-button" className="hidden lg:inline-flex items-center gap-2 font-tech text-[12px] tracking-wider2 uppercase border border-bone/30 px-5 py-2.5 hover:bg-bone hover:text-ink transition-all">
          72hr Audit →
        </Link>
        <button data-testid="mobile-menu-toggle" aria-label="Toggle menu" className="lg:hidden text-bone" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div data-testid="mobile-menu" className="lg:hidden bg-ink border-t border-line">
          <div className="flex flex-col px-6 py-6 gap-5">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-tech text-sm uppercase tracking-wider2 text-bone/80 hover:text-accent">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
