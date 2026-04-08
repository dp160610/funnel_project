import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  HeroSection,
  LogoSliderSection,
  BuiltForImpactSection,
  VideoBgSection,
  ServicesSection,
  CaseStudiesSection,
  ROICalculator,
} from '../components/sections'
import styles from '../styles/pages/Home.module.css'

const awards = [
  { title: 'BEST REAL ESTATE MARKETING AGENCY', org: 'PropTech India Summit · 2025' },
  { title: 'MOST EFFECTIVE PERFORMANCE CAMPAIGN OF THE YEAR', org: 'Real Estate Marketing Awards · 2025' },
  { title: 'TOP DIGITAL GROWTH PARTNER — REAL ESTATE', org: 'Growth100 India · 2024' },
]

const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

// Mumbai client logo image numbers from Realatte CDN
const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]

const culturePhotos = Array.from({ length: 11 }, (_, i) => i + 1)

export default function Home() {
  return (
    <>
      <NextSeo
        title="Property Edge - Real Estate Marketing Agency"
        description="Transform your real estate projects into sold-out successes with strategic digital marketing. Full funnel strategies, branding, performance campaigns, and real results."
        canonical="https://propertyedge.com"
        openGraph={{
          type: 'website',
          url: 'https://propertyedge.com',
          title: 'Property Edge - Real Estate Marketing Agency',
          description: 'Real estate marketing strategies that drive results',
        }}
      />

      <Header />

      <main>
        {/* 1. Hero — dark navy, two-column layout with autoplay video */}
        <HeroSection />

        {/* 2. Logo Slider — rotated marquee strip of client logos */}
        <LogoSliderSection />

        {/* 3. Built For Impact — white background, stats section */}
        <BuiltForImpactSection />

        {/* 3. Video Background — white background with floating dark card */}
        <VideoBgSection />

        {/* 4. Services / Full Funnel Strategy — dark background */}
        <ServicesSection />

        {/* 5. Performance Case Studies — dark background */}
        <CaseStudiesSection />
        {/* 6. ROI Calculator — white background */}
        <ROICalculator />

        {/* 7. Awards Section — dark background, matching Realatte */}
        <section className={styles.awardsSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Awards</span>
            </div>
            <h3 className={`${styles.sectionHeading} title`}>
              <span className="white_gradient">Recognized. Respected. </span>
              <span className="pink_gradient">Property Edge.</span>
            </h3>
            <p className={styles.sectionSub}>
              Winning isn&apos;t a goal — it&apos;s a habit. Every campaign we run is built to outperform, and the industry has taken notice. These accolades reflect the trust our clients place in us and the standards we refuse to lower.
            </p>
            <div className={styles.awardsGrid}>
              {awards.map((award, i) => (
                <div key={i} className={styles.awardCard}>
                  <div className={styles.awardImgWrap}>
                    <svg className={styles.awardIcon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id={`asg${i}`} x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#f6d365" />
                          <stop offset="100%" stopColor="#da0c89" />
                        </linearGradient>
                      </defs>
                      <path d="M32 4l5 15.5H53L40.5 28l5 15.5L32 35l-13.5 8.5 5-15.5L11 19.5H27L32 4z" fill={`url(#asg${i})`} />
                      <rect x="30" y="45" width="4" height="9" fill="rgba(218,12,137,0.6)" />
                      <rect x="21" y="54" width="22" height="4" rx="2" fill="rgba(218,12,137,0.6)" />
                    </svg>
                  </div>
                  <div className={styles.awardTxtWrap}>
                    <h3 className={styles.awardTitle}>{award.title}</h3>
                    <p className={styles.awardOrg}>{award.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Brands / Clients Section — white background, matching Realatte */}
        <section className={styles.brandsSection}>
          <div className={styles.sectionInner}>
            <div className="sec_title_wrap for_white_bg">
              <div className="title_top_wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
                <span className="top_title">Our Clients</span>
              </div>
              <h3 className={`${styles.sectionHeading} title black`}>
                <span className="black_gradient">Trusted by the Developers </span>
                <span className="pink_gradient">Who Build India</span>
              </h3>
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
                  <img
                    src={`https://realatte.com/images/clientslogo/Mumbai/${n}.png`}
                    alt=""
                    className={styles.brandLogo}
                    width={120}
                    height={50}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Culture Section — dark background */}
        <section className={styles.cultureSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap" style={{ background: 'rgba(218, 12, 137, 0.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Life at Property Edge</span>
            </div>
            <h3 className={`${styles.sectionHeading} title`}>
              <span className="white_gradient">People Who </span>
              <span className="pink_gradient">Obsess Over Results</span>
            </h3>
            <p className={styles.sectionSub}>
              Great marketing starts with great people. At Property Edge, we hire curious minds, train relentlessly, and build teams that actually care about the outcome — not just the output. This is the engine behind every campaign we run.
            </p>
            <div className={styles.cultureGrid}>
              {culturePhotos.map((n) => (
                <div key={n} className={styles.culturePhoto}>
                  <img
                    src={`https://realatte.com/images/companyphotos/${n}.png`}
                    alt={`Property Edge team photo ${n}`}
                  />
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

