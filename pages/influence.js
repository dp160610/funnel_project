import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '2,400+', label: 'Reels Produced' },
  { num: '180+', label: 'Influencer Collaborations' },
  { num: '340Cr+', label: 'Organic Impressions' },
  { num: '3.2x', label: 'Avg Trust Lift vs Paid Ads' },
]

const reasons = [
  {
    title: 'Buyers Research Before They Respond',
    desc: 'Before a buyer calls your number, they have already watched multiple videos about your project, location, or builder reputation. If none of that content is yours, you lose ground before the first conversation.',
    stat: '11+ content pieces consumed pre-visit',
  },
  {
    title: 'Ad Fatigue Has Reached a Ceiling',
    desc: 'Influence content commands far higher engagement because it does not feel like an ad and therefore gets consumed, shared, and remembered differently.',
    stat: '6-8x higher engagement vs display ads',
  },
  {
    title: 'NRI & HNI Buyers Rely on Curated Discovery',
    desc: 'Affluent and non-resident buyers discover opportunities through trusted creator ecosystems, not generic ads.',
    stat: '73% of NRI buyers via peer/content influence',
  },
  {
    title: 'Organic Reach Compounds Over Time',
    desc: 'Creator content continues to rank and circulate long after a paid campaign ends, making it a compounding trust asset.',
    stat: 'Content longevity: 6-18 months per piece',
  },
  {
    title: 'Project Launch Windows Are Non-Negotiable',
    desc: 'The first 60 to 90 days after launch set long-term velocity. Influence creates concentrated trust in that critical window.',
    stat: 'Launch window: first 60 days set the tone',
  },
  {
    title: 'Your Reputation Is Built in Comments, Not Ads',
    desc: 'Search and social proof outcomes decide who gets called. Influence lets you shape that decision layer.',
    stat: 'Search perception shapes 60%+ of final decisions',
  },
]

const services = [
  {
    title: 'Influencer Marketing & Creator Partnerships',
    desc: 'End-to-end campaigns from creator identification and briefing to production oversight and performance tracking. Every creator mapped to project buyer persona and funnel objective.',
  },
  {
    title: 'Film Production, AVs & Cinematic Photography',
    desc: 'Project films, aerial walkthroughs, and high-conversion visual assets designed to create aspiration, credibility, and action.',
  },
  {
    title: 'Model-Based Reels & Lifestyle Content',
    desc: 'Scroll-stopping short-form narratives produced for Instagram and Shorts with conversion-oriented hooks and CTA architecture.',
  },
  {
    title: 'Real Estate SEO & Content Visibility',
    desc: 'Hyperlocal SEO, YouTube SEO, and content indexing so your project appears where high-intent buyers are actively researching.',
  },
  {
    title: 'Social Media Management & Community Building',
    desc: 'Complete social operations including content cadence, engagement systems, and community handling that supports pipeline conversion.',
  },
  {
    title: 'Digital PR & Thought Leadership',
    desc: 'Media placements, editorial narratives, and authority-building content that create credibility halos around the project and developer brand.',
  },
]

const tiers = [
  { title: 'Nano', range: '5K-50K', desc: 'Hyperlocal voices with strong trust and high contextual relevance.' },
  { title: 'Micro', range: '50K-500K', desc: 'Niche authority creators with strong engagement and buyer fit.' },
  { title: 'Macro', range: '500K-5M', desc: 'Mass-reach creators for launch visibility and broad narrative spread.' },
  { title: 'Celebrity', range: '5M+', desc: 'National trust overlays for luxury and township-scale positioning.' },
]

const process = [
  { title: 'Buyer Persona & Creator Mapping', desc: 'Match project buyer signals with creator audience quality and relevance.' },
  { title: 'Content Strategy & Brief Development', desc: 'Build narratives that feel native while preserving positioning accuracy.' },
  { title: 'Production Oversight & QC', desc: 'Manage execution quality, messaging control, and output consistency.' },
  { title: 'Amplification & Paid Boost', desc: 'Scale top-performing organic assets with precision media extension.' },
  { title: 'Performance Tracking & Attribution', desc: 'Track influence outcomes against pipeline movement and business metrics.' },
]

const formats = [
  { title: 'Project Walkthrough Reels', desc: 'Immersive walkthrough content with context, narrative, and intent cues.' },
  { title: 'Talking-Head Expert Reviews', desc: 'Opinion-led authority content that strengthens trust and consideration.' },
  { title: 'Model & Lifestyle Reels', desc: 'Aspirational narratives that sell lived experience, not just inventory.' },
  { title: 'Cinematic Project Films', desc: 'Flagship visual narratives that establish premium perception quickly.' },
  { title: 'Resident Testimonial Content', desc: 'Social proof content that resolves objections and boosts confidence.' },
  { title: 'Site Visit Vlogs & Location Reviews', desc: 'First-person realism for remote buyers evaluating before physical visits.' },
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Coimbatore']

export default function InfluencePage() {
  return (
    <>
      <NextSeo
        title="Influence - Property Edge"
        description="Real estate influence ecosystems that turn awareness into trust and trust into conversion."
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
            <p className={styles.sectionSub} style={{ maxWidth: '780px', marginBottom: '32px' }}>
              Buyers do not trust ads anymore. They trust people. We build influence ecosystems that put your project in front of the right audiences - through voices they already follow and content they already consume.
            </p>
            <Link href="/contact" className={styles.heroCta}>Build My Influence Strategy</Link>
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
            <div className="title_top_wrap"><span className="top_title">The Problem with Ads Alone</span></div>
            <h2 className={styles.sectionHeading}>Buyers ignore ads. They listen to people they trust.</h2>
            <p className={styles.sectionSub}>Real estate is high-stakes and high-emotion. Paid ads can reach buyers. Influence makes them believe.</p>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceCardTitle}>The Trust Deficit in Real Estate Marketing</h3>
                  <p className={styles.serviceCardDesc}>Average banner blindness is high, and buyers consume multiple third-party signals before site visits. The gap between click and conviction is where budgets leak.</p>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceCardTitle}>What Influence Marketing Actually Solves</h3>
                  <p className={styles.serviceCardDesc}>Influence closes credibility gaps by turning brand communication into recommendation-like trust signals.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Why Builders Need Influence</span></div>
            <h2 className={styles.sectionHeading}>Six reasons every developer needs an influence-first strategy.</h2>
            <div className={styles.servicesGrid}>
              {reasons.map((r) => (
                <div key={r.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{r.title}</h3>
                    <p className={styles.serviceCardDesc}>{r.desc}</p>
                    <div className={styles.cardKicker}>{r.stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Influence Services</span></div>
            <h2 className={styles.sectionHeading}>The complete influence stack for real estate.</h2>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>0{i + 1}</div>
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
            <div className="title_top_wrap"><span className="top_title">Creator Selection Framework</span></div>
            <h2 className={styles.sectionHeading}>Not every creator is right for every project.</h2>
            <div className={styles.servicesGrid}>
              {tiers.map((t) => (
                <div key={t.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{t.title}</h3>
                    <div className={styles.cardKicker}>{t.range} followers</div>
                    <p className={styles.serviceCardDesc}>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Our Process</span></div>
            <h2 className={styles.sectionHeading}>How we build an influence campaign that actually converts.</h2>
            <div className={styles.servicesGrid}>
              {process.map((p, i) => (
                <div key={p.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Stage {String(i + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{p.title}</h3>
                    <p className={styles.serviceCardDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Content Formats</span></div>
            <h2 className={styles.sectionHeading}>Every format has a job in the funnel.</h2>
            <div className={styles.servicesGrid}>
              {formats.map((f) => (
                <div key={f.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{f.title}</h3>
                    <p className={styles.serviceCardDesc}>{f.desc}</p>
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

        <section style={{ background: '#fff', padding: '60px 0' }}>
          <div className={styles.sectionInner}>
            <div className={styles.ctaBanner}>
              <h2 className={styles.ctaBannerTitle}>Make your project the one everyone is talking about.</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/contact" className={styles.heroCta}>Start My Influence Campaign</Link>
                <Link href="/about" className={styles.workTab}>See how we work</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
