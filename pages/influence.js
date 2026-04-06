import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const services = [
  {
    title: 'SEO',
    desc: 'From hyper-local targeting to industry-wide visibility, we ensure your real estate brand dominates search rankings and drives high-intent traffic.',
    img: 'https://realatte.com/images/influence/img1.png',
  },
  {
    title: 'Influence Marketing',
    desc: 'We leverage industry thought leaders, local tastemakers, and digital powerhouses to create a buzz that translates into tangible leads.',
    img: 'https://realatte.com/images/influence/img2.png',
  },
  {
    title: 'Film Production, AVs & Photography',
    desc: 'From cinematic property films to crisp, high-converting visuals, we craft content that captivates, convinces, and converts.',
    img: 'https://realatte.com/images/influence/img3.png',
  },
  {
    title: 'Model-Based Reels',
    desc: 'We create aspirational, lifestyle-driven reels featuring professional models to make your property feel like home before buyers even step in.',
    img: 'https://realatte.com/images/influence/img4.png',
  },
  {
    title: 'Social Media Optimization',
    desc: 'Strategic content planning, profile optimization, and AI-enabled content intelligence for measurable business outcomes.',
    img: 'https://realatte.com/images/influence/img1.png',
  },
  {
    title: 'Hyperlocal Campaigns',
    desc: 'Geo-targeted execution, paid media amplification, and hyperlocal content strategies for scalable reach in target micro-markets.',
    img: 'https://realatte.com/images/influence/img2.png',
  },
]

const reelNums = [86, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function InfluencePage() {
  return (
    <>
      <NextSeo
        title="Influence - Property Edge"
        description="Strategic influence for market domination. We craft influence-driven strategies that turn properties into must-have investments."
        canonical="https://propertyedge.com/influence"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#CredibilityThroughCreativity</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Strategic Influence for</span>{' '}
              <span className="pink_gradient">Market Domination</span>
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
              <span className="white_gradient">Why Influence Matters </span>
              <span className="pink_gradient">in Real Estate</span>
            </h2>
            <div className={styles.overviewGrid}>
              <p className={styles.overviewDesc}>
                In an industry where trust drives transactions, the right influence can elevate brands, amplify reach, and accelerate sales. Buyers don&apos;t just invest in properties — they invest in the stories, aspirations, and credibility behind them. Our influence marketing strategies ensure that the right people talk, engage, and advocate — turning your project into the next big thing.
              </p>
              <div className={styles.overviewImageGrid}>
                <img src="https://realatte.com/images/influence/img1.png" alt="" className={styles.overviewImg} loading="lazy" />
                <img src="https://realatte.com/images/influence/img2.png" alt="" className={styles.overviewImg} loading="lazy" />
                <img src="https://realatte.com/images/influence/img3.png" alt="" className={styles.overviewImg} loading="lazy" />
                <img src="https://realatte.com/images/influence/img4.png" alt="" className={styles.overviewImg} loading="lazy" />
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
              <span className="white_gradient">Influence Solutions </span>
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

        {/* Reels Work */}
        <section className={styles.workSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Social Media Optimization</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Optimized Engagement </span>
              <span className="pink_gradient">for Real Growth</span>
            </h2>
            <div className={styles.workGrid}>
              {reelNums.map((n) => (
                <div key={n} className={styles.workCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://realatte.com/images/reels/${n}.mp4`} alt="" className={styles.workImg} loading="lazy"
                    onError={(e) => { e.currentTarget.src = 'https://realatte.com/images/influence/img1.png' }}
                  />
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
