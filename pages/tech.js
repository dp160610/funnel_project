import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
import MediaShowcase from '../components/common/MediaShowcase'
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
    img: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Lead Management Dashboard',
    desc: 'A single view of every lead: source, stage, quality score, last touchpoint, and follow-up status. Your team knows exactly who to call and when.',
    cta: "Stop guessing who's hot →",
    img: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Automated Nurture Flows',
    desc: 'Behaviour-triggered WhatsApp, email, and SMS sequences that keep leads warm between sales calls without a single manual touchpoint.',
    cta: 'Nurture at scale, without the headcount →',
    img: 'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Campaign Attribution Engine',
    desc: 'Every booking traced back to originating channel, audience, creative, and keyword so you know exactly what drove revenue and where to scale.',
    cta: 'Attribute every rupee to a result →',
    img: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Lead Scoring & Qualification',
    desc: 'AI-assisted lead scoring surfaces highest-intent prospects in real time, so sales teams spend time on buyers who are ready, not browsers who are not.',
    cta: 'Let data pick your next call →',
    img: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Reporting & Analytics',
    desc: 'Daily pulse, weekly breakdown, and monthly attribution in dashboards your leadership can read and marketing can act on instantly.',
    cta: 'Know your numbers before your agency does →',
    img: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=700',
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
            <div className={styles.featureGrid}>
              {services.map((s, i) => (
                <Reveal key={i} className={styles.featureCard} delay={160 + i * 80}>
                  <div className={styles.featureCardImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.title} className={styles.featureCardImg} loading="lazy" />
                  </div>
                  <div className={styles.featureCardContent}>
                    <div className={styles.featureIconBox}>
                      {i === 0 && <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>}
                      {i === 1 && <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>}
                      {i === 2 && <svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
                      {i === 3 && <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>}
                      {i === 4 && <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>}
                      {i === 5 && <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>}
                    </div>
                    <div className={styles.featureCardNum}>{String(i + 1).padStart(2, '0')}</div>
                    <div className={styles.featureCardTitle}>{s.title}</div>
                    <p className={styles.featureCardDesc}>{s.desc}</p>
                    <div className={styles.featureCardCta}>{s.cta}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Live Pipeline Intelligence</span></div>
            <h2 className={styles.sectionHeading}>This is what your sales team sees. Every morning.</h2>
            <p className={styles.sectionSub}>One dashboard. Every lead scored, every follow-up triaged, every rupee accounted for. Built live in 48 hours.</p>
            <Reveal delay={200}>
              <div className={styles.mockDash}>
                <div className={styles.mockDashHeader}>
                  <div className={styles.mockDashTitle}>Property Edge CRM — Live Pipeline</div>
                  <div className={styles.mockDashDots}><span /><span /><span /></div>
                </div>
                <div className={styles.mockDashGrid}>
                  {[
                    { val: '2,847', label: 'Total Leads (MTD)' },
                    { val: '634', label: 'Qualified Leads' },
                    { val: '218', label: 'Site Visits' },
                    { val: '31', label: 'Bookings' },
                  ].map((m) => (
                    <div key={m.label} className={styles.mockDashStat}>
                      <div className={styles.mockDashStatVal}>{m.val}</div>
                      <div className={styles.mockDashStatLabel}>{m.label}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.mockDashRows}>
                  {[
                    { name: 'Rahul M. — Worli', score: '92', fill: '92%', level: '' },
                    { name: 'Priya S. — Bandra', score: '78', fill: '78%', level: 'medium' },
                    { name: 'Vikram N. — Andheri', score: '61', fill: '61%', level: 'medium' },
                    { name: 'Anjali R. — Powai', score: '44', fill: '44%', level: 'low' },
                    { name: 'Deepak C. — Thane', score: '29', fill: '29%', level: 'low' },
                  ].map((row) => (
                    <div key={row.name} className={styles.mockDashRow}>
                      <div className={styles.mockDashRowLabel}>{row.name}</div>
                      <div className={styles.mockDashRowTrack}>
                        <div className={styles.mockDashRowFill} style={{ width: row.fill }} />
                      </div>
                      <div className={`${styles.mockDashRowScore} ${row.level ? styles[row.level] : ''}`}>
                        {row.score}/100
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', marginTop: '10px', letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif' }}>Illustrative data — real dashboards built for your actual pipeline</p>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <Reveal delay={180}>
              <div className={styles.guaranteeBox}>
                <div className={styles.guaranteeIcon}>
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className={styles.guaranteeBody}>
                  <div className={styles.guaranteeTitle}>Results in 48 Hours. Or We Work for Free.</div>
                  <p className={styles.guaranteeDesc}>We configure your full CRM, attribution engine, and lead management dashboard within 48 hours of kickoff — with your live data flowing through it. If we miss that window, we extend the engagement at no charge. No small print.</p>
                  <div className={styles.guaranteeBadge}>Claim the 48hr Setup →</div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <MediaShowcase
          title="RealTech in Action"
          subtitle="Real dashboards. Live pipelines. Attribution that closes the loop."
          items={techMedia}
        />

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
