import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const services = [
  {
    title: 'New Brand Launch & Rebranding',
    desc: 'From defining your identity to repositioning for success, we create brands that stand tall, evolve, and thrive in a competitive market.',
    img: 'https://realatte.com/images/branding/logos/1.jpg',
  },
  {
    title: 'Social Media Management',
    desc: 'From trend-setting campaigns to community engagement, we ensure your brand stays relevant, visible, and impactful across all platforms.',
    img: 'https://realatte.com/images/branding/logos/3.jpg',
  },
  {
    title: 'Original Content & Copywriting',
    desc: 'Words that sell, inspire, and persuade — our strategic storytelling turns real estate projects into desirable destinations.',
    img: 'https://realatte.com/images/branding/logos/5.jpg',
  },
  {
    title: 'Graphic Design & Illustrations',
    desc: 'Striking visual identities that make your brand instantly recognizable and resonate with the right audience.',
    img: 'https://realatte.com/images/branding/logos/7.jpg',
  },
  {
    title: 'Video Editing & Animation',
    desc: 'Dynamic videos and high-impact animations that bring your projects to life and create immersive experiences for potential buyers.',
    img: 'https://realatte.com/images/branding/logos/9.jpg',
  },
  {
    title: 'Print, OOH & Mainline Advertising',
    desc: 'Billboards that grab eyeballs, brochures that command attention, and print ads that drive action across every medium.',
    img: 'https://realatte.com/images/branding/mainline/1.jpg',
  },
]

const workImages = [
  'https://realatte.com/images/branding/logos/1.jpg',
  'https://realatte.com/images/branding/logos/2.jpg',
  'https://realatte.com/images/branding/logos/3.jpg',
  'https://realatte.com/images/branding/logos/4.jpg',
  'https://realatte.com/images/branding/logos/5.jpg',
  'https://realatte.com/images/branding/logos/6.jpg',
  'https://realatte.com/images/branding/mainline/1.jpg',
  'https://realatte.com/images/branding/mainline/2.jpg',
  'https://realatte.com/images/branding/mainline/3.jpg',
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function BrandingPage() {
  return (
    <>
      <NextSeo
        title="Branding - Property Edge"
        description="Branding that sells, not just stands out. We craft real estate brands that build trust, drive demand, and close deals."
        canonical="https://propertyedge.com/branding"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#IdentityThatImpacts</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Branding That Sells,</span>{' '}
              <span className="pink_gradient">Not Just Stands Out.</span>
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
              <span className="white_gradient">Why Branding Matters </span>
              <span className="pink_gradient">in Real Estate</span>
            </h2>
            <div className={styles.overviewGrid}>
              <p className={styles.overviewDesc}>
                In a saturated market, a strong brand is the difference between interest and investment. Buyers don&apos;t just purchase properties — they buy into a vision, a lifestyle, a promise. We shape real estate brands that exude credibility, create emotional connections, and leave lasting impressions, ensuring your project rises above the noise and commands attention.
              </p>
              <div className={styles.overviewImageGrid}>
                {['img3', 'img5', 'img10', 'img1'].map((img) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={img} src={`https://realatte.com/images/brand/slider/${img}.png`} alt="" className={styles.overviewImg} loading="lazy" />
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
              <span className="white_gradient">Branding Solutions </span>
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

        {/* Our Work */}
        <section className={styles.workSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Our Branding Work</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Logos, Ad Films </span>
              <span className="pink_gradient">& Mainline Creatives</span>
            </h2>
            <div className={styles.workGrid}>
              {workImages.map((src, i) => (
                <div key={i} className={styles.workCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className={styles.workImg} loading="lazy" />
                  <div className={styles.workOverlay}>
                    <span className={styles.workPlay}>&#9654; View</span>
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
