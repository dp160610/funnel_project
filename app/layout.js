import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import StickyStats from '../components/StickyStats';
import WhatsAppCTA from '../components/WhatsAppCTA';

export const metadata = {
  title: 'Property Edge Consulting — Real Estate Marketing That Earns Trust First',
  description: 'We engineer real estate funnels that close. Every stage tracked, every booking attributed. The only agency in India that answers to your cost per booking.',
  keywords: 'real estate marketing, funnel engineering, property edge, lead generation, India, real estate agency',
  icons: {
    icon: 'https://customer-assets.emergentagent.com/job_funnel-metrics-10/artifacts/ft1ohwlb_PE%20Logo.jpg.jpeg',
  },
  openGraph: {
    title: 'Property Edge Consulting Pvt Ltd — Real Estate Marketing Agency',
    description: 'We engineer real estate funnels that close. Every stage tracked, every booking attributed.',
    type: 'website',
    images: ['https://customer-assets.emergentagent.com/job_funnel-metrics-10/artifacts/ft1ohwlb_PE%20Logo.jpg.jpeg'],
  },
};

export const viewport = { themeColor: '#0A0A0A', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grain min-h-screen bg-ink text-bone antialiased">
        <Nav />
        <main className="relative z-[2]">{children}</main>
        <Footer />
        <StickyStats />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
