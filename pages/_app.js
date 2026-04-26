import '../styles/globals.css'
import Link from 'next/link'
import { Poppins, Sora, DM_Sans, Space_Grotesk, Playfair_Display, Cormorant_Garamond } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <div 
      className={`${poppins.variable} ${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable} ${cormorantGaramond.variable}`} 
      style={{ minHeight: '100%' }}
    >
      <Component {...pageProps} />

      {/* ── Site-wide Trust Bar ── */}
      <div className="trust-bar" aria-label="Agency credentials">
        <div className="trust-bar-inner">
          {[
            { val: '₹760Cr+', label: 'Ad Spend Managed' },
            { val: '50+', label: 'Projects Delivered' },
            { val: '12', label: 'Cities Active' },
            { val: '4.9/5', label: 'Client NPS' },
            { val: '72hr', label: 'Free Funnel Audit' },
          ].map((item) => (
            <div key={item.label} className="trust-bar-item">
              <span className="trust-bar-val">{item.val}</span>
              <span className="trust-bar-label">{item.label}</span>
            </div>
          ))}
          <div className="trust-bar-badge">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Real Estate Only
          </div>
        </div>
      </div>

      {/* ── WhatsApp Floating Button ── */}
      <a
        href="https://wa.me/919987130371?text=Hi%20Property%20Edge%2C%20I%27d%20like%20a%2072-hour%20free%20funnel%20audit%20for%20my%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.554 4.11 1.522 5.838L.057 23.486a.75.75 0 0 0 .92.92l5.744-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.702 9.702 0 0 1-4.95-1.358l-.354-.21-3.658.953.977-3.56-.23-.368A9.702 9.702 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
        </svg>
        <span className="wa-float-label">Let's Connect</span>
      </a>
    </div>
  )
}
