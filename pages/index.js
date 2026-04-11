import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  HeroSection,
  BuiltForImpactSection,
  ServicesSection,
} from '../components/sections'
import styles from '../styles/pages/Home.module.css'

const truths = [
  {
    num: '01',
    heading: 'Your Best Closers Are Working on Your Worst Leads',
    body: 'Without lead scoring, your top sales executives spend 70% of their day chasing people who are curious, not committed. Funnel engineering ends this by filtering intent before a lead ever reaches the floor.',
    italic: 'Your sales team\'s time is your most expensive resource. We stop wasting it.',
    stat: 'Lead scoring consistently doubles average close rates.',
  },
  {
    num: '02',
    heading: 'You\'re Celebrating a CPL That\'s Quietly Killing You',
    body: 'A ₹400 CPL feels like a win. It isn\'t — not when only 1 in 80 leads produces a booking. Your real cost of sale is your CPB. Most developers have never calculated it. We put it on a dashboard on day one.',
    italic: 'The metric you track determines the outcome you get. You\'re tracking the wrong one.',
    stat: 'Industry CPB averages 80–150× CPL.',
  },
  {
    num: '03',
    heading: 'Your Buyer Is Ready in 8 Weeks. Your System Forgot Them in 8 Days.',
    body: 'Real estate decisions take 6–12 weeks. Without structured nurturing, an interested buyer goes cold and your CPL becomes a write-off. The funnel keeps them warm while your team focuses on closures.',
    italic: 'You didn\'t lose that lead to a competitor. You lost them to silence.',
    stat: 'Average real estate decision cycle: 6–12 weeks.',
  },
  {
    num: '04',
    heading: 'You Can\'t Cut What You\'ve Never Measured',
    body: 'If you cannot trace a booking back to the campaign that produced it, you are funding three things: what works, what doesn\'t, and what you have no idea about. Attribution alone reduces effective CPB by 20–35%.',
    italic: 'Unattributed marketing isn\'t a strategy. It\'s a donation with a logo on it.',
    stat: 'Closed-loop attribution reduces CPB by 20–35%.',
  },
]

const services = [
  { num: '01', title: 'Performance Media Planning', body: 'Before a single rupee is placed, we build a full channel mix model — what percentage of your budget goes to awareness, acquisition, retargeting, and defence. Every allocation backed by category benchmarks and project-specific data.', link: 'Optimise My Media Mix →' },
  { num: '02', title: 'Strategic Media Buying: Google, Meta & Beyond', body: 'Hyper-local targeting on Meta for geography-first buyers. High-intent search on Google for active researchers. Cross-platform synergy across YouTube, Display, and programmatic networks.', link: 'See My Platform Strategy →' },
  { num: '03', title: 'Conversion-Engineered Landing Pages', body: 'A landing page is a conversion instrument, not a brochure. Single-purpose intent — persuasive architecture, social proof layering, micro-commitment flows, and heat-map-informed CTA placement.', link: 'Audit My Landing Page →' },
  { num: '04', title: 'Performance-First Creative Production', body: "Creative is the last unfair advantage. Every static, video, carousel, and reel is built with a specific funnel stage in mind. We A/B test relentlessly until we find the variant that wins.", link: 'See Creative That Converts →' },
  { num: '05', title: 'Programmatic Advertising & DSP Buying', body: 'Reach in-market buyers across thousands of premium publishers — the news sites, property portals, and financial platforms they read every day — with precision targeting and real-time bidding.', link: 'Expand My Reach Strategically →' },
  { num: '06', title: 'Lead Nurture & CRM Automation', body: '80% of bookings happen after the 5th touchpoint. We build automated nurture sequences — WhatsApp, email, retargeting — timed to buying behaviour signals. Your team only calls when the buyer is already warm.', link: 'Engineer My Nurture Flow →' },
]

const costRungs = [
  { title: 'Raw Lead (Cost Per Lead)', desc: 'Any person who submits a form or calls. Unfiltered, unscored, unverified. This is what most agencies report as their headline metric.', val: '₹190–800', unit: 'Per Lead' },
  { title: 'Qualified Lead (Scored & Verified)', desc: 'A buyer within budget range, relevant geography, and an active purchase timeline. Phone-verified and intent-scored. This is where your sales team\'s time should start.', val: '₹500–1,400', unit: 'Qualified Lead' },
  { title: 'Cost Per Site Visit', desc: 'The moment a qualified prospect physically arrives at your site office. The most expensive and most valuable conversion event before the booking.', val: '₹1,300–3,500', unit: 'Per Site Visit' },
  { title: 'Media Planning & Execution', desc: 'Strategic media allocation, channel-mix modelling, pacing reports, and continuous optimisation across all active platforms. The intelligence layer above execution.', val: '₹20K–80K', unit: 'Per Month' },
  { title: 'Cost Per Booking (Full Funnel)', desc: 'The true north. Total marketing spend divided by total bookings — accounting for every touchpoint, channel, creative, and nurture sequence that contributed.', val: '₹25K–80K', unit: 'Per Booking' },
]

const cities = ['Mumbai', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Jaipur', 'Kolkata']
const clientLogos = ['Lodha', 'Godrej', 'Rustomjee', 'Runwal', 'Piramal', 'Oberoi', 'Mahindra', 'Kalpataru', 'Hiranandani', 'Dosti', 'Ashvin Sheth', 'Esbee']

const tickerItems = ['Funnel Engineering', 'Branding', 'Influence', 'RealTech', 'Performance Media', 'Lead Nurture', 'Site Visit Campaigns', 'Booking Attribution', 'OOH & Mainline', 'Video Production', 'Creator Marketing', 'CRM & Automation']

export default function Home() {
  return (
    <>
      <NextSeo
        title="Property Edge — Real Estate Marketing Agency"
        description="We engineer real estate funnels that close. Every stage tracked, every booking attributed. The only agency in India that answers to your cost per booking."
        canonical="https://propertyedge.com"
        openGraph={{
          type: 'website',
          url: 'https://propertyedge.com',
          title: 'Property Edge — Real Estate Marketing Agency',
          description: 'Real estate marketing engineered to close.',
        }}
      />

      <Header />

      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Ticker strip */}
        <div className={styles.ticker}>
          <div className={styles.tickerTrack}>
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className={styles.tickerItem}>
                {item}
                <span className={styles.tickerDot}>·</span>
              </span>
            ))}
          </div>
        </div>

        {/* 3. Four Disciplines — "Most agencies hand you leads" */}
        <BuiltForImpactSection />

        {/* 4. Five Stages funnel pipeline */}
        <ServicesSection />

        {/* 5. Every Service Tracks Back to a Booking Metric — 3×2 service grid */}
        <section className={styles.svcSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>What We Deploy</div>
            <h2 className={styles.sh}>
              Every Service Tracks Back<br />
              <em>to a Booking Metric.</em>
            </h2>
            <p className={styles.ss}>
              Six specialised disciplines. One unified strategy. Every service connects directly to a stage of your pipeline — and a number on your P&amp;L.
            </p>
            <div className={styles.svcGrid}>
              {services.map((s) => (
                <div key={s.num} className={styles.svcCard}>
                  <div className={styles.svcCardTop} />
                  <div className={styles.svcNum}>{s.num}</div>
                  <div className={styles.svcTitle}>{s.title}</div>
                  <p className={styles.svcBody}>{s.body}</p>
                  <Link href="/performance" className={styles.svcLink}>{s.link}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. The Uncomfortable Truth — dark section */}
        <section className={styles.truthSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>The Uncomfortable Truth</div>
            <h2 className={styles.sh}>
              Right Channel. Right Stage.<br />
              <em>Right Spend.</em>
            </h2>
            <p className={styles.ss}>
              Most real estate marketing isn&apos;t engineered — it&apos;s assembled. Here&apos;s what&apos;s actually happening in your acquisition pipeline right now.
            </p>
            <div className={styles.truthGrid}>
              {truths.map((t) => (
                <div key={t.num} className={styles.truthItem}>
                  <div className={styles.truthN}>{t.num}</div>
                  <div className={styles.truthH}>{t.heading}</div>
                  <p className={styles.truthP}>{t.body}</p>
                  <div className={styles.truthItalic}>{t.italic}</div>
                  <div className={styles.truthNum}>{t.stat}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. The Full Cost Ladder */}
        <section className={styles.costSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>The Full Cost Ladder</div>
            <h2 className={styles.sh}>
              CPL to Cost-per-Booking.<br />
              <em>Nothing Hidden.</em>
            </h2>
            <p className={styles.ss}>
              We show you the cost at every stage of your pipeline — not just your CPL. Because the gap between ₹350 CPL and ₹45,000 cost-per-booking is where most budgets disappear without explanation.
            </p>
            <div className={styles.costLadder}>
              {costRungs.map((r, i) => (
                <div key={i} className={styles.costRung}>
                  <div className={styles.costLeft}>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                  <div className={styles.costRight}>
                    <div className={styles.costVal}>{r.val}</div>
                    <div className={styles.costUnit}>{r.unit}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.costDisclaimer}>
              <p><strong>Note:</strong> These are category benchmarks across Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, and Tier-2 markets. Actual numbers vary by ticket size, project stage, brand recognition, and city. We provide project-specific benchmarks in our first onboarding call.</p>
            </div>
          </div>
        </section>

        {/* 8. You Should Know Where Every Rupee Went — dark reporting */}
        <section className={styles.reportSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>Reporting & Transparency</div>
            <h2 className={styles.sh}>
              You Should Know Where<br />
              <em>Every Rupee Went.</em>
            </h2>
            <p className={styles.ss}>
              Opacity is how agencies hide bad performance. We give you access to every number, at every stage, at every frequency — before you think to ask.
            </p>
            <div className={styles.reportGrid}>
              <div className={styles.reportCard}>
                <div className={styles.reportFreq}>Daily</div>
                <div className={styles.reportUnit}>Campaign Pulse</div>
                <div className={styles.reportTitle}>Spend, leads &amp; CPL — every morning</div>
                <p className={styles.reportBody}>A concise morning briefing that tells you exactly what was spent yesterday, how many leads came in, and whether your CPL is trending in the right direction.</p>
              </div>
              <div className={styles.reportCard}>
                <div className={styles.reportFreq}>Weekly</div>
                <div className={styles.reportUnit}>Pipeline Movement</div>
                <div className={styles.reportTitle}>Full funnel — lead to qualified to visited</div>
                <p className={styles.reportBody}>Every Monday, a stage-by-stage view of your pipeline: how many leads moved from raw to qualified, how many converted to site visits, and where dropout is happening.</p>
              </div>
              <div className={styles.reportCard}>
                <div className={styles.reportFreq}>Monthly</div>
                <div className={styles.reportUnit}>Full Attribution Report</div>
                <div className={styles.reportTitle}>Bookings traced back to the originating ad</div>
                <p className={styles.reportBody}>Every booking attributed to its originating campaign, platform, creative, and audience — with next month&apos;s budget recommendations based on what actually drove closures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. CTA Block */}
        <section className={styles.ctaSection}>
          <div className={styles.secInner}>
            <div className={styles.ctaBlk}>
              <div className={styles.ctaLeft}>
                <div className={styles.ctaKk}>#IfItDoesntCloseItDoesntCount</div>
                <div className={styles.ctaBig}>Property Edge</div>
                <h2 className={styles.ctaH2}>
                  Stop Paying for Leads.<br />
                  Pay for Closures.
                </h2>
                <p className={styles.ctaDesc}>
                  Most developers don&apos;t need more leads. They need a system that knows what to do with the ones they already have. Tell us your project — we&apos;ll show you the leak in 72 hours.
                </p>
                <div className={styles.ctaBtns}>
                  <Link href="/contact" className={styles.ctaBtnR}>
                    Audit My Funnel. Give Me the Uncomfortable Truth. →
                  </Link>
                  <Link href="/performance" className={styles.ctaBtnG}>
                    I Want to See How This Works First
                  </Link>
                </div>
                <p className={styles.ctaFine}>
                  We work exclusively in real estate. We answer exclusively to your cost per booking. Everything else is noise.
                </p>
              </div>
              <div className={styles.ctaBadge}>
                <div className={styles.ctaBadgeN}>72hr</div>
                <div className={styles.ctaBadgeL}>Funnel audit<br />turnaround</div>
                <div className={styles.ctaBadgeD}>No cost. No lock-in.</div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. Trusted By */}
        <section className={styles.trustedSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>Trusted By</div>
            <h2 className={styles.sh}>
              Developers Who Measure<br />
              <em>Success in Bookings.</em>
            </h2>
            <div className={styles.cityRow}>
              {cities.map((c) => (
                <span key={c} className={styles.cityTab}>{c}</span>
              ))}
            </div>
            <div className={styles.clientLogos}>
              {clientLogos.map((logo) => (
                <div key={logo} className={styles.clientLogo}>{logo}</div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

