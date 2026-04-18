import '../styles/globals.css'
import { Poppins, Sora, DM_Sans, Space_Grotesk } from 'next/font/google'

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

export default function App({ Component, pageProps }) {
  return (
    <div 
      className={`${poppins.variable} ${sora.variable} ${dmSans.variable} ${spaceGrotesk.variable}`} 
      style={{ minHeight: '100%' }}
    >
      <Component {...pageProps} />
    </div>
  )
}
