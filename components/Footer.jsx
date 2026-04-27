import Link from 'next/link';

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="relative z-[2] border-t border-line bg-ink mt-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div
              className="bg-white inline-block mb-8 shadow-sm"
              style={{
                width: '280px',
                height: '70px',
                backgroundImage: 'url(https://customer-assets.emergentagent.com/job_funnel-metrics-10/artifacts/ft1ohwlb_PE%20Logo.jpg.jpeg)',
                backgroundSize: '200% auto',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              role="img"
              aria-label="Property Edge Consulting Pvt Ltd"
            />
            <h2 className="font-display text-5xl md:text-6xl tracking-tightest leading-[0.95]">
              The agency that<br/>stops at <em className="text-accent not-italic">bookings.</em>
            </h2>
            <p className="mt-6 text-muted max-w-md leading-relaxed">
              We work exclusively in real estate. We answer exclusively to your cost per booking. Everything else is noise.
            </p>
            <Link href="/contact" data-testid="footer-cta-link" className="btn-primary mt-8">
              Get my 72-hour audit →
            </Link>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Disciplines</p>
            <ul className="space-y-3 text-bone/85">
              <li><Link href="/funnelengineering" className="link-underline">Funnel Engineering</Link></li>
              <li><Link href="/branding" className="link-underline">Branding</Link></li>
              <li><Link href="/influence" className="link-underline">Influence</Link></li>
              <li><Link href="/tech" className="link-underline">RealTech</Link></li>
              <li><Link href="/contact" className="link-underline">Sales & Pitching</Link></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Studio</p>
            <ul className="space-y-3 text-bone/85">
              <li><Link href="/about" className="link-underline">About</Link></li>
              <li><Link href="/contact" className="link-underline">Contact</Link></li>
              <li><Link href="/" className="link-underline">Home</Link></li>
              <li><a className="link-underline" href="https://wa.me/919987130371">WhatsApp</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="eyebrow mb-5">Office</p>
            <p className="text-bone/85 leading-relaxed">Mumbai, India<br/>Available globally</p>
            <p className="mt-4 text-muted text-sm">hello@propertyedge.com</p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted font-tech tracking-wider2 uppercase">© {new Date().getFullYear()} Property Edge Consulting Pvt Ltd — Real Estate Only.</p>
          <p className="text-xs text-muted font-tech tracking-wider2 uppercase"><span className="text-accent">#</span>IfItDoesntCloseItDoesntCount</p>
        </div>
      </div>
    </footer>
  );
}
