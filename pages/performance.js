import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ServicesSection } from '../components/sections'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '₹760Cr+', label: 'Ad Spend Managed' },
  { num: '86L+', label: 'Leads Delivered' },
  { num: '415Cr+', label: 'Qualified Revenue Tracked' },
  { num: '25%', label: 'Avg CPL Reduction' },
]

const services = [
  {
    title: 'Performance Media Planning',
    desc: 'Before a single rupee is placed, we build a full channel mix model across awareness, acquisition, retargeting, and defence. Every allocation is tied to category benchmarks and project-specific data.',
    img: 'https://realatte.com/images/performance/offers/Media-Planning.jpg',
  },
  {
    title: 'Strategic Media Buying: Google, Meta & Beyond',
    desc: 'Hyper-local targeting on Meta, high-intent search on Google, and cross-platform orchestration across YouTube, Display, and programmatic networks.',
    img: 'https://realatte.com/images/performance/offers/Performance-Marketing.jpg',
  },
  {
    title: 'Conversion-Engineered Landing Pages',
    desc: 'Landing pages built as conversion instruments with persuasive architecture, social proof layering, and CTA placement informed by intent and behaviour.',
    img: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg',
  },
  {
    title: 'Performance-First Creative Production',
    desc: 'Statics, videos, reels, and carousel systems designed for a specific funnel stage and audience intent, then iterated through structured A/B testing.',
    img: 'https://realatte.com/images/performance/overview/1.jpg',
  },
  {
    title: 'Programmatic Advertising & DSP Buying',
    desc: 'Premium publisher reach across news, finance, and property ecosystems with real-time bidding that keeps impressions purposeful and premium.',
    img: 'https://realatte.com/images/performance/overview/2.jpg',
  },
  {
    title: 'Lead Nurture & CRM Automation',
    desc: 'Automated nurture sequences across WhatsApp, email, and retargeting so your sales team speaks only to prospects who are already warm.',
    img: 'https://realatte.com/images/performance/overview/3.jpg',
  },
]

const introCards = [
  {
    title: 'Signal-first targeting, not spray-and-pray',
    desc: 'We map buyer intent signals — search behaviour, micro-location data, and property portal activity — before we spend a single rupee on acquisition.',
  },
  {
    title: 'Attribution that actually makes sense',
    desc: 'Know exactly which platform, creative, audience segment, and ad copy generated your booking — not just your lead. We track through to CRM closure.',
  },
  {
    title: 'Every leak in your pipeline, found and fixed',
    desc: 'If CPL looks good but bookings are thin, we identify the exact dropout point — nurturing gap, sales script issue, landing-page friction, or targeting mismatch.',
  },
  {
    title: 'One team, end-to-end. Zero hand-off loss.',
    desc: 'Media planning, audience strategy, creative, landing pages, and CRM integration under one roof. No agency silos and no data lost in translation.',
  },
]

const platforms = [
  {
    title: 'Meta — Facebook & Instagram',
    desc: 'We reach buyers 30–90 days before active search mode with micro-geography targeting, CRM-based audiences, and sequenced creative journeys.',
    points: [
      'Micro-geography targeting down to 1km radius',
      'Custom audiences from CRM and site visitors',
      'Sequential creative journeys across awareness and conversion',
      'Instant-form lead gen with CRM sync',
    ],
  },
  {
    title: 'Google — Search, Display & YouTube',
    desc: 'Declared intent lives on Google. We dominate category keywords, conquest competitor searches, and re-engage site visitors with structured remarketing.',
    points: [
      'High-intent keyword campaigns',
      'Competitor conquest strategy',
      'YouTube walkthrough campaigns',
      'RLSA and structured remarketing',
    ],
  },
  {
    title: 'Programmatic, OTT & More',
    desc: 'Premium publisher inventory, OTT, LinkedIn, and DSP-led media designed to surround the right buyer across every high-affluence touchpoint.',
    points: [
      'Cross-publisher DSP buying',
      'OTT and connected TV reach',
      'LinkedIn for commercial and HNI buyers',
      'Frequency-controlled premium exposure',
    ],
  },
]

const costRungs = [
  { title: 'Raw Lead (Cost Per Lead)', desc: 'Any person who submits a form or calls. Unfiltered, unscored, unverified. This is what most agencies report.', stat: '₹190–800 / Per Lead' },
  { title: 'Qualified Lead (Scored & Verified)', desc: 'A buyer within budget range, relevant geography, and an active purchase timeline. This is where your sales team should start.', stat: '₹500–1,400 / Qualified Lead' },
  { title: 'Cost Per Site Visit', desc: 'The moment a qualified prospect reaches your site office or model flat. The highest-value event before the booking.', stat: '₹1,300–3,500 / Per Site Visit' },
  { title: 'Media Planning Retainer', desc: 'The intelligence layer: channel-mix modelling, pacing reports, and continuous optimisation above execution.', stat: '₹20K–80K / Per Month' },
  { title: 'Cost Per Booking (Full Funnel)', desc: 'The real north star. Total marketing spend divided by bookings, accounting for every touchpoint that contributed.', stat: '₹25K–80K / Per Booking' },
]

const reporting = [
  { title: 'Daily Campaign Pulse', desc: 'Spend, leads, and CPL every morning before the workday starts.', stat: 'Daily' },
  { title: 'Weekly Pipeline Movement Report', desc: 'A stage-by-stage view of raw leads, qualified leads, and site visits with dropout analysis.', stat: 'Weekly' },
  { title: 'Monthly Full Attribution Report', desc: 'Bookings traced back to campaign, platform, audience, and creative with next-step budget guidance.', stat: 'Monthly' },
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function PerformancePage() {
  return (
    <>
      <NextSeo
        title="Funnel Engineering - Property Edge"
        description="Every rupee, every lead, every handoff engineered. Funnel strategy, platform execution, attribution, and reporting built for real estate bookings."
        canonical="https://propertyedge.com/performance"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#FunnelEngineering</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Every Rupee. Every Lead.</span>{' '}
              <span className="pink_gradient">Every Step Engineered.</span>
            </h1>
            <p className={styles.sectionSub} style={{ maxWidth: '760px', marginBottom: '32px' }}>
              We don&apos;t run campaigns. We architect conversion pipelines, from the first impression a stranger sees to the moment they sign a booking cheque. No guesswork. No vanity metrics. No opaque reporting.
            </p>
            <Link href="/contact" className={styles.heroCta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.ctaIcon} />
              Show Me Where My Budget Leaks
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
              <span className="top_title">What We Actually Do</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Other agencies sell campaigns. </span>
              <span className="pink_gradient">We sell outcomes.</span>
            </h2>
            <p className={styles.sectionSub}>
              Most agencies hand you a leads report and call it a day. We hand you a full-funnel audit: where the money entered, where it got stuck, and what it cost you at every stage of the buyer&apos;s journey.
            </p>
            <div className={styles.servicesGrid} style={{ marginTop: '40px' }}>
              {introCards.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Performance Principle</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.sectionAction}>
              <Link href="/contact" className={styles.heroCta}>
                Audit My Current Campaigns
              </Link>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">What We Deploy</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Built to move one thing: </span>
              <span className="pink_gradient">your cost-per-booking.</span>
            </h2>
            <p className={styles.sectionSub}>
              Six specialised disciplines. One unified strategy. Every service connects directly to a stage of your pipeline and a number on your P&amp;L.
            </p>
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

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Platform Expertise</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Right platform. Right stage. </span>
              <span className="pink_gradient">Right spend.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {platforms.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Channel Strategy</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                    <div className={styles.cardList}>
                      {item.points.map((point) => (
                        <div key={point} className={styles.cardListItem}>{point}</div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">The Full Cost Ladder</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Nothing hidden. </span>
              <span className="pink_gradient">Every number accounted for.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {costRungs.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                    <div className={styles.cardStat}>{item.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Reporting & Transparency</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">You should know where </span>
              <span className="pink_gradient">every rupee went.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {reporting.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{item.stat}</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
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
                <span className="black_gradient">Developers who stopped counting leads </span>
                <span className="pink_gradient">and started counting closures</span>
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
