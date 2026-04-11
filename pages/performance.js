import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '₹760Cr+', label: 'Ad Spend Managed' },
  { num: '86L+', label: 'Leads Delivered' },
  { num: '415Cr+', label: 'Qualified Revenue Tracked' },
  { num: '25%', label: 'Avg CPL Reduction' },
]

const introCards = [
  {
    title: 'Signal-first targeting, not spray-and-pray',
    desc: 'We map buyer intent signals — search behaviour, micro-location data, property portal activity — before we spend a single rupee on acquisition.',
  },
  {
    title: 'Attribution that actually makes sense',
    desc: 'Know exactly which platform, creative, audience segment, and ad copy generated your booking — not just your lead. We track through to CRM closure.',
  },
  {
    title: 'Every leak in your pipeline, found and fixed',
    desc: 'CPL looks great but bookings are thin? We diagnose the exact dropout point — whether it\'s a nurturing gap, a sales script failure, or a targeting mismatch.',
  },
  {
    title: 'One team, end-to-end. Zero hand-off loss.',
    desc: 'Media planning, creative, audience strategy, landing page, and CRM integration — all under one roof. No agency silos, no data lost in translation.',
  },
]

const services = [
  {
    title: 'Performance Media Planning',
    desc: 'Before a single rupee is placed, we build a full channel mix model — what percentage of your budget goes to awareness, acquisition, retargeting, and defence of existing leads. No guessing. Every allocation is backed by category benchmarks and project-specific data.',
    img: 'https://realatte.com/images/performance/offers/Media-Planning.jpg',
  },
  {
    title: 'Strategic Media Buying: Google, Meta & Beyond',
    desc: 'Hyper-local targeting on Meta for geography-first buyers. High-intent search on Google for active researchers. Cross-platform synergy across YouTube, Display, and programmatic networks. Your brand, present at every stage of the consideration window.',
    img: 'https://realatte.com/images/performance/offers/Performance-Marketing.jpg',
  },
  {
    title: 'Conversion-Engineered Landing Pages',
    desc: 'A landing page is not a brochure. It is a conversion instrument. We build pages with single-purpose intent — to capture a decision, not inform one. Persuasive architecture, social proof layering, micro-commitment flows, and heat-map-informed CTA placement.',
    img: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg',
  },
  {
    title: 'Performance-First Creative Production',
    desc: 'Creative is the last unfair advantage. We produce ad creatives that are engineered for performance — not just aesthetics. Every static, video, carousel, and reel is built with a specific funnel stage and audience intent in mind. We A/B test relentlessly until we find the variant that wins.',
    img: 'https://realatte.com/images/performance/overview/1.jpg',
  },
  {
    title: 'Programmatic Advertising & DSP Buying',
    desc: 'Reach in-market real estate buyers across thousands of premium publishers — the news sites, property portals, and financial platforms they read every day — with precision targeting and real-time bidding that keeps your CPM competitive and your impressions purposeful.',
    img: 'https://realatte.com/images/performance/overview/2.jpg',
  },
  {
    title: 'Lead Nurture & CRM Automation',
    desc: '80% of bookings happen after the 5th touchpoint. We build automated nurture sequences — WhatsApp, email, retargeting — timed to buying behaviour signals. Your sales team only picks up the phone when the buyer is already warm. We fill the gap in between.',
    img: 'https://realatte.com/images/performance/overview/3.jpg',
  },
]

const platforms = [
  {
    title: 'Meta — Facebook & Instagram',
    desc: 'Meta is where purchase intent is formed, not declared. We reach buyers 30–90 days before they enter active search mode — with hyper-local targeting, lookalike audiences modelled on your past buyers, and creative sequencing that builds purchase desire over time.',
    points: [
      'Micro-geography targeting down to 1km radius',
      'Custom audiences from site visitors, CRM data & portal traffic',
      'Sequential creative journeys across awareness & conversion',
      'Instant Form lead gen with CRM sync in real-time',
      'Dynamic product ads for project catalogues',
      'Retargeting across Instagram Reels, Stories & Feed',
    ],
  },
  {
    title: 'Google — Search, Display & YouTube',
    desc: 'Google is where declared intent lives. We dominate your category keywords, conquest competitor searches, and re-engage site visitors with display retargeting that keeps your project top-of-mind throughout a 90-day decision window.',
    points: [
      'High-intent keyword campaigns with negative list management',
      'Competitor conquest campaigns for category capture',
      'YouTube TrueView for project walkthroughs',
      'RLSA campaigns for past site visitors',
    ],
  },
  {
    title: 'Programmatic, OTT & More',
    desc: 'Premium publishers. Financial news sites. Property portals. OTT platforms. We buy cross-platform inventory that puts your brand in front of the right affluence segment — wherever they consume content. One unified strategy, one cohesive buyer experience.',
    points: [
      'DSP-powered cross-publisher programmatic buying',
      'OTT & connected TV for premium segment reach',
      'LinkedIn for commercial & HNI buyer targeting',
      'Real-time bidding with frequency control',
    ],
  },
]

const costRungs = [
  {
    title: 'Raw Lead (Cost Per Lead)',
    desc: 'Any person who submits a form or calls. Unfiltered, unscored, unverified. This is what most agencies report as their headline metric.',
    stat: '₹190–800 / Per Lead',
  },
  {
    title: 'Qualified Lead (Scored & Verified)',
    desc: 'A buyer within budget range, relevant geography, and an active purchase timeline. Phone-verified and intent-scored. This is where your sales team\'s time should start.',
    stat: '₹500–1,400 / Qualified Lead',
  },
  {
    title: 'Cost Per Site Visit',
    desc: 'The moment a qualified prospect physically arrives at your site office or model flat. The most expensive and most valuable conversion event before the booking.',
    stat: '₹1,300–3,500 / Per Site Visit',
  },
  {
    title: 'Media Planning Retainer',
    desc: 'Strategic media allocation, channel-mix modelling, pacing reports, and continuous optimisation across all active platforms. The intelligence layer above execution.',
    stat: '₹20K–80K / Per Month',
  },
  {
    title: 'Cost Per Booking (Full Funnel)',
    desc: 'The true north. Total marketing spend divided by total bookings in the period — accounting for every touchpoint, channel, creative, and nurture sequence that contributed.',
    stat: '₹25K–80K / Per Booking',
  },
]

const reporting = [
  {
    title: 'Daily Campaign Pulse',
    desc: 'Spend, leads & CPL — every morning before you have had your coffee.',
    stat: 'Daily',
  },
  {
    title: 'Weekly Pipeline Movement Report',
    desc: 'Every Monday you receive a stage-by-stage view of your pipeline, conversion movement, and drop-off diagnostics.',
    stat: 'Weekly',
  },
  {
    title: 'Monthly Full Attribution Report',
    desc: 'Every booking attributed to campaign, platform, creative, and audience, with recommendations for next month allocation.',
    stat: 'Monthly',
  },
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Coimbatore']

export default function PerformancePage() {
  return (
    <>
      <NextSeo
        title="Funnel Engineering - Property Edge"
        description="Every rupee, every lead, every handoff engineered. Full-funnel architecture for real estate outcomes."
        canonical="https://propertyedge.com/performance"
      />

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>Performance Marketing</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Every Rupee. Every Lead.</span>{' '}
              <span className="pink_gradient">Every Step - Engineered.</span>
            </h1>
            <p className={styles.sectionSub} style={{ maxWidth: '760px', marginBottom: '32px' }}>
              We don't run campaigns. We architect conversion pipelines — from the first impression a stranger sees to the moment they sign a booking cheque. No guesswork. No vanity metrics. No opaque reporting.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Show Me Where My Budget Leaks</Link>
              <Link href="/" className={styles.workTab}>See Full Pipeline</Link>
            </div>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.statsRow}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">What We Actually Do</span></div>
            <h2 className={styles.sectionHeading}>Other agencies sell campaigns. We sell outcomes.</h2>
            <p className={styles.sectionSub}>Most agencies hand you a leads report and call it a day. We hand you a full-funnel audit - where the money entered, where it got stuck, and what it cost you at every stage of the buyer journey.</p>
            <div className={styles.servicesGrid}>
              {introCards.map((c) => (
                <div key={c.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{c.title}</h3>
                    <p className={styles.serviceCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">What We Deploy</span></div>
            <h2 className={styles.sectionHeading}>Built to move one thing: your cost-per-booking.</h2>
            <p className={styles.sectionSub}>Six specialised disciplines. One unified strategy. Every service connects directly to a stage of your pipeline — and a number on your P&L.</p>
            <div className={styles.servicesGrid}>
              {services.map((s) => (
                <div key={s.title} className={styles.serviceCard}>
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
            <div className="title_top_wrap"><span className="top_title">Platform Expertise</span></div>
            <h2 className={styles.sectionHeading}>Right platform. Right stage. Right spend.</h2>
            <p className={styles.sectionSub}>Platform selection is strategy. We do not run everything everywhere - we allocate with precision based on where your buyer is in their journey.</p>
            <div className={styles.servicesGrid}>
              {platforms.map((p) => (
                <div key={p.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{p.title}</h3>
                    <p className={styles.serviceCardDesc}>{p.desc}</p>
                    <div className={styles.cardList}>
                      {p.points.map((pt) => (
                        <div key={pt} className={styles.cardListItem}>{pt}</div>
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
            <div className="title_top_wrap"><span className="top_title">The Full Cost Ladder</span></div>
            <h2 className={styles.sectionHeading}>Nothing hidden. Every number accounted for.</h2>
            <p className={styles.sectionSub}>We show you the cost at every stage of your pipeline — not just CPL.</p>
            <div className={styles.servicesGrid}>
              {costRungs.map((r) => (
                <div key={r.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{r.stat}</div>
                    <h3 className={styles.serviceCardTitle}>{r.title}</h3>
                    <p className={styles.serviceCardDesc}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cardStat}>Important: These are category benchmarks across Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, and Tier-2 markets. Actual numbers vary by ticket size, project stage, brand recognition, and city.</div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Reporting & Transparency</span></div>
            <h2 className={styles.sectionHeading}>Opacity is how agencies hide bad performance.</h2>
            <p className={styles.sectionSub}>We give you access to every number, at every stage, at every frequency.</p>
            <div className={styles.servicesGrid}>
              {reporting.map((r) => (
                <div key={r.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{r.stat}</div>
                    <h3 className={styles.serviceCardTitle}>{r.title}</h3>
                    <p className={styles.serviceCardDesc}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.brandsSection}>
          <div className={styles.sectionInner}>
            <div className="sec_title_wrap for_white_bg">
              <div className="title_top_wrap"><span className="top_title">Our Clients</span></div>
              <h2 className={`${styles.sectionHeading} title black`}>
                <span className="black_gradient">Developers who stopped counting leads</span>{' '}
                <span className="pink_gradient">and started counting closures.</span>
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

        <section style={{ background: '#fff', padding: '60px 0' }}>
          <div className={styles.sectionInner}>
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaBannerTitle}>Show us your funnel. We'll show you the leak.</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/contact" className={styles.heroCta}>Get My Free Funnel Audit</Link>
                <Link href="/contact" className={styles.workTab}>Talk to a Strategist</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
