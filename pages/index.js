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
  {
    title: 'ADVERTISING AGENCY OF THE YEAR',
    org: 'CONCLAVE & EXCELLENCE AWARDS',
    year: '2025',
  },
  {
    title: 'MOST INNOVATIVE USE OF MULTI-CHANNEL MARKETING',
    org: 'CONCLAVE & EXCELLENCE AWARDS',
    year: '2025',
  },
  {
    title: 'OPEN WEB ROCKSTAR',
    org: 'TABOOLA ROCKSTARS AWARDS',
    year: '2024',
  },
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
              Our work doesn&apos;t just drive results&mdash;it sets benchmarks. Backed by industry accolades and the trust of leading brands, we continue to push the boundaries of digital excellence.
            </p>
            <div className={styles.awardsGrid}>
              {awards.map((award, i) => (
                <div key={i} className={styles.awardCard}>
                  <p className={styles.awardYear}>Year &ndash; {award.year}</p>
                  <h3 className={styles.awardTitle}>{award.title}</h3>
                  <p className={styles.awardOrg}>{award.org}</p>
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
                <span className="black_gradient">Hear from Those </span>
                <span className="pink_gradient">Who Know Us Best</span>
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
              <span className="top_title">Inside Property Edge</span>
            </div>
            <h3 className={`${styles.sectionHeading} title`}>
              <span className="white_gradient">Our Culture </span>
              <span className="pink_gradient">of Growth</span>
            </h3>
            <p className={styles.sectionSub}>
              Our work culture values growth, expertise, and partnership. We&apos;ve cultivated an environment where innovation thrives, and we&apos;re all committed to delivering unparalleled performance for our clients.
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

