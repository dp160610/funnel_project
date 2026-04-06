import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '415Cr+', label: 'Clicks Delivered' },
  { num: '760Cr+', label: 'Ad Spend Managed' },
  { num: '86L+', label: 'Conversions Driven' },
  { num: '25%', label: 'Avg CPL Reduction' },
]

const services = [
  {
    title: 'All Platforms: Meta, Google & More',
    desc: 'Whether it\'s hyper-local targeting on Meta, high-intent search campaigns on Google, or cross-platform synergy, we ensure your brand is everywhere your audience is.',
    img: 'https://realatte.com/images/performance/offers/Performance-Marketing.jpg',
  },
  {
    title: 'Performance Marketing',
    desc: 'From lead generation to final conversion, we deploy ROI-focused strategies that drive measurable business growth.',
    img: 'https://realatte.com/images/performance/offers/Media-Planning.jpg',
  },
  {
    title: 'Media Planning',
    desc: 'We craft multi-channel, data-backed media plans that maximize visibility, engagement, and lead flow.',
    img: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg',
  },
  {
    title: 'Google & Meta Creatives',
    desc: 'Performance-driven creatives built to convert — from static banners to dynamic ad reels optimized for each platform.',
    img: 'https://realatte.com/images/performance/overview/1.jpg',
  },
  {
    title: 'Landing Page Optimization',
    desc: 'High-impact landing pages with persuasive copy and a clear user journey — built to maximize every visitor\'s potential.',
    img: 'https://realatte.com/images/performance/overview/2.jpg',
  },
  {
    title: 'Programmatic Advertising',
    desc: 'Automated, data-driven ad buying across premium networks to reach the right buyer at the right moment with precision.',
    img: 'https://realatte.com/images/performance/overview/3.jpg',
  },
]

const overviewImages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 24].map(
  (n) => `https://realatte.com/images/performance/overview/${n}.jpg`
)

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function PerformancePage() {
  return (
    <>
      <NextSeo
        title="Performance Marketing - Property Edge"
        description="Data-driven performance across Google, Meta, Facebook, Instagram, YouTube, LinkedIn & Programmatic Platforms. ROI that gives your competitors chills."
        canonical="https://propertyedge.com/performance"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#AllAboutTheROI</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Data-Driven Performance Across</span>{' '}
              <span className="pink_gradient">Google, Meta, YouTube, LinkedIn & More</span>
            </h1>
            <Link href="/contact" className={styles.heroCta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.ctaIcon} />
              Let&apos;s Talk Real Estate
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.statsRow}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Overview</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Why Performance Matters </span>
              <span className="pink_gradient">in Real Estate</span>
            </h2>
            <div className={styles.overviewGrid}>
              <p className={styles.overviewDesc}>
                In a high-stakes industry like real estate, every click, every lead, and every conversion counts. Performance marketing isn&apos;t just about running ads — it&apos;s about strategic execution, data-driven decisions, and continuous optimization. We blend technology, targeting, and tactical media buying to ensure your marketing budget works as hard as you do.
              </p>
              <div className={styles.overviewImageGrid}>
                {overviewImages.slice(0, 4).map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={i} src={src} alt="" className={styles.overviewImg} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Services</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Performance Solutions </span>
              <span className="pink_gradient">We Offer</span>
            </h2>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={i} className={styles.serviceCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className={styles.serviceImg} loading="lazy" />
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                    <p className={styles.serviceCardDesc}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className={styles.brandsSection}>
          <div className={styles.sectionInner}>
            <div className="sec_title_wrap for_white_bg">
              <div className="title_top_wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
                <span className="top_title">Our Clients</span>
              </div>
              <h2 className={`${styles.sectionHeading} title black`}>
                <span className="black_gradient">Hear from Those </span>
                <span className="pink_gradient">Who Know Us Best</span>
              </h2>
            </div>
            <div className={styles.cityTabs}>
              {cities.map((city) => (
                <span key={city} className={styles.cityTab}>{city}</span>
              ))}
            </div>
            <div className={styles.brandsGrid}>
              {brandLogoNums.map((n, i) => (
                <div key={i} className={styles.brandCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://realatte.com/images/clientslogo/Mumbai/${n}.png`} alt="" className={styles.brandLogo} width={110} height={40} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
