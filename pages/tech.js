import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const services = [
  {
    title: 'Custom Web Development',
    desc: 'Scalable frontend & backend architecture, mobile-first development, fast SEO-optimized code, and 3rd-party integrations & API customization.',
    img: 'https://realatte.com/images/techsolutions/slider/imggs1.jpg',
  },
  {
    title: 'UI/UX Design',
    desc: 'Research-backed wireframes, mobile-first visual systems, UX audits that remove friction, and design systems built for scale & speed.',
    img: 'https://realatte.com/images/techsolutions/slider/imggs2.jpg',
  },
  {
    title: 'Search Engine Optimisation',
    desc: 'Strategic keyword mapping, on-page upgrades, high-authority backlink building, and local SEO enhancements to dominate nearby searches.',
    img: 'https://realatte.com/images/techsolutions/slider/imggs3.jpg',
  },
  {
    title: 'Salesforce CRM',
    desc: 'End-to-end CRM integration for lead-to-deal flow, smart pipelines with custom automations, and data-driven dashboards for developer insights.',
    img: 'https://realatte.com/images/techsolutions/A.jpg',
  },
  {
    title: 'Triplead Automation',
    desc: 'AI-powered lead scoring, seamless sync across WhatsApp, SMS & email, real-time alerts for hot leads, and drip campaigns tailored by buyer intent.',
    img: 'https://realatte.com/images/techsolutions/C.jpg',
  },
  {
    title: 'AI Voice Assistant',
    desc: '24/7 smart voice assistant for property queries, natural conversations that convert interest into action, and seamless integration with IVR & WhatsApp.',
    img: 'https://realatte.com/images/techsolutions/slider/imggs4.jpg',
  },
]

const sliderImages = [
  'https://realatte.com/images/techsolutions/slider/imggs5.jpg',
  'https://realatte.com/images/techsolutions/slider/imggs1.jpg',
  'https://realatte.com/images/techsolutions/slider/imggs2.jpg',
  'https://realatte.com/images/techsolutions/slider/imggs3.jpg',
  'https://realatte.com/images/techsolutions/slider/imggs4.jpg',
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function TechPage() {
  return (
    <>
      <NextSeo
        title="RealTech - Property Edge"
        description="Tech that powers transactions. From seamless user experiences to automation-driven efficiency, we engineer digital solutions that turn interest into investment."
        canonical="https://propertyedge.com/tech"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#SmartTechStacked</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Tech That Powers</span>{' '}
              <span className="pink_gradient">Transactions</span>
            </h1>
            <Link href="/contact" className={styles.heroCta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.ctaIcon} />
              Let&apos;s Talk Real Estate
            </Link>
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
              <span className="white_gradient">Why Tech Matters </span>
              <span className="pink_gradient">in Real Estate</span>
            </h2>
            <div className={styles.overviewGrid}>
              <p className={styles.overviewDesc}>
                A strong digital backbone is the difference between scattered leads and streamlined sales. Real estate isn&apos;t just about selling properties — it&apos;s about building ecosystems that nurture, convert, and retain buyers. Our tech solutions ensure that every interaction, every touchpoint, and every digital experience is optimized for performance, engagement, and growth.
              </p>
              <div className={styles.overviewImageGrid}>
                {sliderImages.slice(0, 4).map((src, i) => (
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
              <span className="white_gradient">Tech Solutions </span>
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
