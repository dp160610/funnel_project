import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '100%', label: 'Attribution Tracked' },
  { num: '48hr', label: 'CRM Setup Time' },
  { num: '3x', label: 'Faster Lead Response' },
  { num: 'Zero', label: 'Data Black Boxes' },
]

const services = [
  {
    title: 'CRM Integration & Setup',
    desc: 'Connect lead sources, campaigns, and sales teams into a single real-time pipeline so nothing falls through and every follow-up is triggered automatically.',
    cta: 'Build a pipeline that closes itself →',
  },
  {
    title: 'Lead Management Dashboard',
    desc: 'A single view of every lead: source, stage, quality score, last touchpoint, and follow-up status. Your team knows exactly who to call and when.',
    cta: "Stop guessing who's hot →",
  },
  {
    title: 'Automated Nurture Flows',
    desc: 'Behaviour-triggered WhatsApp, email, and SMS sequences that keep leads warm between sales calls without a single manual touchpoint.',
    cta: 'Nurture at scale, without the headcount →',
  },
  {
    title: 'Campaign Attribution Engine',
    desc: 'Every booking traced back to originating channel, audience, creative, and keyword so you know exactly what drove revenue and where to scale.',
    cta: 'Attribute every rupee to a result →',
  },
  {
    title: 'Lead Scoring & Qualification',
    desc: 'AI-assisted lead scoring surfaces highest-intent prospects in real time, so sales teams spend time on buyers who are ready, not browsers who are not.',
    cta: 'Let data pick your next call →',
  },
  {
    title: 'Reporting & Analytics',
    desc: 'Daily pulse, weekly breakdown, and monthly attribution in dashboards your leadership can read and marketing can act on instantly.',
    cta: 'Know your numbers before your agency does →',
  },
]
const techSignals = [
  'CRM Integration',
  'Automation Flows',
  'Response Speed',
  'Lead Scoring',
  'Dashboards',
  'Attribution Engine',
  'WhatsApp Journeys',
  'Daily Reporting',
]
const techMedia = [
  {
    type: 'image',
    src: 'https://realatte.com/images/performance/offers/Media-Planning.jpg',
    label: 'Dashboard Layer',
    title: 'Operational clarity that turns scattered lead data into one system',
  },
  {
    type: 'image',
    src: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg',
    label: 'Automation Layer',
    title: 'Lead journeys and response workflows engineered around buyer behavior',
  },
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/Esbee_Credai_Video_1_d427a1c2a8.mp4',
    poster: 'https://backend.realatte.com/uploads/Esbee_Credai_Video_1_1c10ddc3fb.png',
    label: 'Reporting Layer',
    title: 'A richer operations experience with visible movement and control',
  },
]

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroInner}>
            <Reveal as="span" className={styles.heroTag}>#SmartTechStacked</Reveal>
            <Reveal as="h1" className={styles.heroTitle} delay={70}>
              <span className="white_gradient">Your Data Should Be</span><br />
              <span className="white_gradient">Your Best Sales Tool.</span><br />
              <span className="pink_gradient">Right Now It Isn&apos;t.</span>
            </Reveal>
            <Reveal as="p" className={styles.sectionSub} delay={190} style={{ marginBottom: '28px' }}>
              Technology that makes every campaign faster, every lead smarter, and every rupee answerable to a booking.
            </Reveal>
            <Reveal delay={330} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Audit My Tech Stack</Link>
              <Link href="/tech" className={styles.workTab}>See What&apos;s Possible</Link>
            </Reveal>
          </div>
        </section>

        <section className={styles.signalStrip}>
          <div className={styles.signalTrack}>
            {[...techSignals, ...techSignals].map((item, index) => (
              <span key={`${item}-${index}`} className={styles.signalItem}>
                <span className={styles.signalDot} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.statsRow}>
              {stats.map((s, index) => (
                <Reveal key={s.label} className={styles.statItem} delay={160 + index * 100}>
                  <CountUp value={s.num} className={styles.statNum} />
                  <div className={styles.statLabel}>{s.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">What We Build</span></div>
            <h2 className={styles.sectionHeading}>Technology That Turns Your Pipeline From a Spreadsheet Into a System.</h2>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <Reveal key={i} className={styles.serviceCard} delay={180 + i * 90}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{String(i + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                    <p className={styles.serviceCardDesc}>{s.desc}</p>
                    <div className={styles.cardStat}>{s.cta}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pageFinalCta}>
          <div className={styles.pageFinalInner}>
            <div className={styles.pageFinalLeft}>
              <div className={styles.pageFinalKk}>#YourDataShouldCloseDeals</div>
              <div className={styles.pageFinalBig}>Property Edge</div>
              <h2 className={styles.pageFinalH2}>Your Next Project Should Run on Data. Not Instinct.</h2>
              <p className={styles.pageFinalDesc}>Tell us your current setup. We&apos;ll map the gaps, build the integrations, and have your pipeline running on full attribution within 48 hours.</p>
              <div className={styles.pageFinalBtns}>
                <Link href="/contact" className={styles.pageFinalBtnW}>Audit My Tech Stack &#8212; Free →</Link>
                <Link href="/contact" className={styles.pageFinalBtnO}>Talk to a Tech Strategist</Link>
              </div>
              <p className={styles.pageFinalFine}>No lock-in. No long contracts. Results in 48 hours or we work for free.</p>
            </div>
            <div className={styles.pageFinalBadge}>
              <span className={styles.pageFinalBadgeN}>48hr</span>
              <div className={styles.pageFinalBadgeL}>CRM Setup<br />Time</div>
              <div className={styles.pageFinalBadgeD}>From kickoff to live pipeline</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
