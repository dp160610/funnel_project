import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '2,400+', label: 'Reels Produced' },
  { num: '180+', label: 'Influencer Collaborations' },
  { num: '340Cr+', label: 'Organic Impressions' },
  { num: '3.2x', label: 'Trust Lift vs Paid Ads' },
]

const trustGap = [
  {
    title: 'The Trust Deficit in Real Estate Marketing',
    desc: 'Buyers in the Rs50L to Rs5Cr range consume multiple third-party content pieces before visiting a site. Ads create awareness, but recommendations create conviction.',
  },
  {
    title: 'What Influence Marketing Actually Solves',
    desc: 'Influence closes the credibility gap by placing your project through voices buyers already trust, turning passive awareness into action-ready demand.',
  },
]

const reasons = [
  {
    title: 'Buyers Research Before They Respond',
    desc: 'Before buyers call, they have already watched location, builder and project content. If those stories are not yours, a competitor owns the narrative.',
  },
  {
    title: 'Ad Fatigue Is Real',
    desc: 'Paid impressions are everywhere. Influence content earns attention because it is consumed as opinion and education, not interruption.',
  },
  {
    title: 'NRI and HNI Discovery Is Curated',
    desc: 'Affluent and non-resident buyers often rely on trusted creators and experts for shortlisting decisions.',
  },
  {
    title: 'Organic Reach Compounds',
    desc: 'Influence assets keep working long after launch and continue to build trust over time.',
  },
  {
    title: 'Launch Windows Are Non-Negotiable',
    desc: 'The first 60 to 90 days define sales velocity. Influence creates concentrated credibility when timing matters most.',
  },
  {
    title: 'Reputation Is Built in Public',
    desc: 'Buyers search your project and builder online before decisions. Influence helps ensure what they find supports conversion.',
  },
]

const services = [
  {
    title: 'Influencer Discovery & Fit Mapping',
    desc: 'Creator shortlisting by city relevance, audience quality, content format fit, and buyer-stage alignment.',
    img: 'https://realatte.com/images/influence/img1.png',
  },
  {
    title: 'Campaign Narrative & Content Strategy',
    desc: 'Story architecture for pre-launch buzz, social proof, walkthrough credibility, and conversion nudges.',
    img: 'https://realatte.com/images/influence/img2.png',
  },
  {
    title: 'Creator Collaboration Management',
    desc: 'End-to-end coordination from briefing and scripting to shooting, publishing cadence, and compliance.',
    img: 'https://realatte.com/images/influence/img3.png',
  },
  {
    title: 'Amplification with Paid + Organic',
    desc: 'Top-performing creator assets are extended via paid media to improve reach efficiency and sustained engagement.',
    img: 'https://realatte.com/images/influence/img4.png',
  },
  {
    title: 'Social Media Optimisation',
    desc: 'Profile optimisation, content cadence, and engagement operations to convert visibility into trust and enquiries.',
    img: 'https://realatte.com/images/influence/img1.png',
  },
  {
    title: 'Attribution & Influence Reporting',
    desc: 'Visibility, engagement, inquiry quality, and funnel movement reporting tied back to campaign objectives.',
    img: 'https://realatte.com/images/influence/img2.png',
  },
]

const tiers = [
  { title: 'Nano', range: '5K-25K', use: 'Hyper-local credibility' },
  { title: 'Micro', range: '25K-100K', use: 'Strong engagement and trust' },
  { title: 'Mid Tier', range: '100K-500K', use: 'Balanced scale and authority' },
  { title: 'Macro', range: '500K+', use: 'High reach and launch visibility' },
]

const process = [
  'Audience and buyer-stage mapping',
  'Creator shortlist and fit scoring',
  'Narrative, scripting and briefs',
  'Publishing, amplification and moderation',
  'Performance review and optimisation',
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function InfluencePage() {
  return (
    <>
      <NextSeo
        title="Influence - Property Edge"
        description="Real estate influence ecosystems designed to build trust, create conviction, and accelerate conversion timelines."
        canonical="https://propertyedge.com/influence"
      />

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#CredibilityAtScale</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Real Estate Doesn't Get Sold.</span>{' '}
              <span className="pink_gradient">It Gets Believed.</span>
            </h1>
            <p className={styles.sectionSub} style={{ maxWidth: '760px', marginBottom: '32px' }}>
              Buyers trust people more than ads. We build influence ecosystems that place your project in front of the right audiences through voices they already follow.
            </p>
            <Link href="/contact" className={styles.heroCta}>Build My Influence Strategy</Link>
          </div>
        </section>

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

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">The Problem with Ads Alone</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Buyers Ignore Ads.</span>{' '}
              <span className="pink_gradient">They Listen to People.</span>
            </h2>
            <p className={styles.sectionSub}>
              In a high-ticket category, trust and validation drive decisions. Influence creates recommendation-led conviction where paid media alone cannot.
            </p>
            <div className={styles.servicesGrid} style={{ marginTop: '40px' }}>
              {trustGap.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Why Builders Need Influence</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Six Reasons Influence Should Be</span>{' '}
              <span className="pink_gradient">Core to Your Launch</span>
            </h2>
            <div className={styles.servicesGrid}>
              {reasons.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Influence Solutions</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Complete Influence Stack</span>{' '}
              <span className="pink_gradient">for Real Estate</span>
            </h2>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={i} className={styles.serviceCard}>
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

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Creator Tiers + Process</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Right Creator Mix.</span>{' '}
              <span className="pink_gradient">Right Buying Stage.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {tiers.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.range} followers</p>
                    <p className={styles.serviceCardDesc}>Best for: {item.use}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.workTabs} style={{ marginTop: '28px' }}>
              {process.map((step, i) => (
                <button key={step} className={`${styles.workTab} ${i === 0 ? styles.activeTab : ''}`} type="button">
                  {step}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.brandsSection}>
          <div className={styles.sectionInner}>
            <div className="sec_title_wrap for_white_bg">
              <div className="title_top_wrap">
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
                <span className="top_title">Our Clients</span>
              </div>
              <h2 className={`${styles.sectionHeading} title black`}>
                <span className="black_gradient">Trusted by Developers Across</span>{' '}
                <span className="pink_gradient">India</span>
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
