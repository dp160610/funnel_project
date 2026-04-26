import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
import {
  HeroSection,
  BuiltForImpactSection,
  HowItWorksSection,
  TestimonialsSection,
  BeforeAfterSection,
  CaseStudyStrip,
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

const cities = [
  { name: 'Mumbai', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic_view_of_Taj_Palace_Hotel_and_Taj_Tower_with_the_iconic_Gateway_of_India_in_the_background_%28cropped%29.jpg' },
  { name: 'Pune', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Shaniwar_Wada_during_sunset.jpg' },
  { name: 'Delhi NCR', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/India_Gate_from_Rajpath.jpg' },
  { name: 'Bengaluru', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lighting_of_Vidhana_Soudha.jpg' },
  { name: 'Hyderabad', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Charminar_-_May_2023.jpg' },
  { name: 'Chennai', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Marina-Beach-Light-House-Chennai.jpg' },
  { name: 'Jaipur', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg' },
  { name: 'Kolkata', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Howrah_Bridge_02.jpg' },
  { name: 'Ahmedabad', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Panoramic_view_of_Sabarmati_Riverfront_June_2015%2C_Ahmedabad.jpg' },
]

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

        {/* 3. Boardroom silence hash section */}
        <section className={styles.hashSection}>
          <div className={styles.hashInner}>
            <Reveal className={styles.hashBlk} distance="42px">
              <div className={styles.hashTag}>#TheAgencyThatStopsAtBookings</div>
              <h2 className={styles.hashH}>
                Your Campaigns Are Live.<br />
                Your Team Is Calling.<br />
                Your Budget Is Burning.<br />
                And Your Boardroom Still Can&apos;t<br />
                Answer - <em>Which Ad Sold That Flat?</em>
              </h2>
              <p className={styles.hashP}>
                That silence in the room - when your MD asks which campaign produced which booking and nobody has a clean answer - is not a data problem. It is a funnel problem. It means every stage of your buyer&apos;s journey is running disconnected, unmeasured, and unaccountable. We fix the structure. We engineer the stages. We close the loop. And we make sure the next time that question gets asked in a boardroom, the answer is sitting in a dashboard - sharp, sourced, and indisputable.
              </p>
              <Link href="/contact" className={styles.hashCta}>End the Boardroom Silence. Build My Funnel. →</Link>
            </Reveal>
          </div>
        </section>

        {/* 4. Before vs After */}
        <BeforeAfterSection />

        {/* 4b. Leaky Funnel Visual */}
        <section className={styles.funnelVizSection}>
          <div className={styles.funnelVizInner}>
            <Reveal as="div" className={styles.kk}>The Leaky Funnel Problem</Reveal>
            <Reveal as="h2" className={styles.sh} delay={80}>
              Every Stage Your Funnel Skips<br />
              <em>Is Money You'll Never See Again</em>
            </Reveal>
            <Reveal as="p" className={styles.ss} delay={160}>
              A broken pipeline vs. an engineered one — the difference at the booking end is not 10%. It's 10×.
            </Reveal>
            <div className={styles.funnelVizGrid}>
              {/* BROKEN FUNNEL */}
              <Reveal className={styles.funnelVizCol} delay={240}>
                <div className={`${styles.funnelVizColLabel} ${styles.broken}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L1 21h22L12 2zm1 13h-2v-4h2v4zm0 4h-2v-2h2v2z"/></svg>
                  Typical Agency Setup
                </div>
                <div className={styles.funnelStageViz}>
                  {[
                    { name: 'Ad Impressions', count: '100,000', width: '100%' },
                    { name: 'Clicks', count: '3,200', width: '78%' },
                    { name: 'Leads Captured', count: '420', width: '55%' },
                    { name: 'Leads Contacted', count: '180', width: '36%' },
                    { name: 'Site Visits', count: '28', width: '20%' },
                    { name: 'Bookings', count: '3', width: '8%' },
                  ].map((s, i) => (
                    <div key={s.name} className={styles.funnelStageRow}>
                      <div className={`${styles.funnelStageBar} ${styles.broken}`} style={{ width: s.width, minWidth: 80 }}>
                        <span className={styles.funnelStageName}>{s.name}</span>
                        <span className={`${styles.funnelStageCount} ${i > 0 ? styles.leaking : ''}`}>{s.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.funnelVizResult} ${styles.broken}`}>
                  <span>₹28.3L spend → 3 bookings</span>
                  Cost Per Booking: ₹9,43,000+
                </div>
              </Reveal>

              {/* ENGINEERED FUNNEL */}
              <Reveal className={styles.funnelVizCol} delay={320}>
                <div className={`${styles.funnelVizColLabel} ${styles.engineered}`}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                  Property Edge Funnel
                </div>
                <div className={styles.funnelStageViz}>
                  {[
                    { name: 'Ad Impressions', count: '100,000', width: '100%' },
                    { name: 'Clicks (Intent-Targeted)', count: '4,800', width: '88%' },
                    { name: 'Leads Captured', count: '890', width: '76%' },
                    { name: 'AI-Scored (≥7/10)', count: '310', width: '62%' },
                    { name: 'Site Visits', count: '94', width: '52%' },
                    { name: 'Bookings', count: '19', width: '44%' },
                  ].map((s) => (
                    <div key={s.name} className={styles.funnelStageRow}>
                      <div className={`${styles.funnelStageBar} ${styles.engineered}`} style={{ width: s.width, minWidth: 80 }}>
                        <span className={styles.funnelStageName}>{s.name}</span>
                        <span className={`${styles.funnelStageCount} ${styles.optimised}`}>{s.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`${styles.funnelVizResult} ${styles.engineered}`}>
                  <span>₹28.3L spend → 19 bookings</span>
                  Cost Per Booking: ₹1,49,000 — −84% CPB
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 4c. Client Results Proof */}
        <section className={styles.clientResultsSection}>
          <div className={styles.secInner}>
            <Reveal as="div" className={styles.kk}>Verified Client Outcomes</Reveal>
            <Reveal as="h2" className={styles.sh} delay={80}>
              Numbers From Real Engagements.<br />
              <em>Not Projections. Not Estimates.</em>
            </Reveal>
            <div className={styles.clientResultsGrid}>
              <Reveal className={styles.clientResultCard} delay={220}>
                <div className={styles.clientResultMetric}>−31%</div>
                <div className={styles.clientResultMetricSub}>CPB Reduction</div>
                <div className={styles.clientResultDesc}>Cost-per-booking cut in 90 days through closed-loop attribution and funnel restructuring.</div>
                <div className={styles.clientResultContext}>Lodha Palava, Mumbai — Residential Township</div>
              </Reveal>
              <Reveal className={styles.clientResultCard} delay={300}>
                <div className={styles.clientResultMetric}>2.4×</div>
                <div className={styles.clientResultMetricSub}>Close Rate Improvement</div>
                <div className={styles.clientResultDesc}>Sales team close rate doubled after AI lead scoring eliminated unqualified walk-ins.</div>
                <div className={styles.clientResultContext}>Prestige Estates, Bengaluru — Luxury High-rise</div>
              </Reveal>
              <Reveal className={styles.clientResultCard} delay={380}>
                <div className={styles.clientResultMetric}>3.8×</div>
                <div className={styles.clientResultMetricSub}>Site Visit Volume</div>
                <div className={styles.clientResultDesc}>Engineered site visit campaigns produced 3.8× more qualified walk-ins in a single quarter.</div>
                <div className={styles.clientResultContext}>Godrej Horizon, Pune — Integrated Township</div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 5. Five Disciplines */}
        <BuiltForImpactSection />

        {/* 6. How It Works */}
        <HowItWorksSection />

        {/* 7. The Uncomfortable Truth */}
        <section className={styles.truthSection}>
          <div className={styles.secInner}>
            <Reveal as="div" className={styles.kk}>The Uncomfortable Truth</Reveal>
            <Reveal as="h2" className={styles.sh} delay={80}>
              Your Funnel Isn&apos;t Leaking<br />
              Because the Market Is Hard.<br />
              <em>It&apos;s Leaking Because Nobody Built It.</em>
            </Reveal>
            <Reveal as="p" className={styles.ss} delay={160}>
              Most real estate marketing isn&apos;t engineered — it&apos;s assembled. Here&apos;s what&apos;s actually happening in your acquisition pipeline right now.
            </Reveal>
            <div className={styles.truthGrid}>
              {truths.map((t, index) => (
                <Reveal key={t.num} className={styles.truthItemWrap} delay={220 + (index * 70)}>
                  <div className={styles.truthItem}>
                  <div className={styles.truthN}>{t.num}</div>
                  <div className={styles.truthH}>{t.heading}</div>
                  <p className={styles.truthP}>{t.body}</p>
                  <div className={styles.truthItalic}>{t.italic}</div>
                  <div className={styles.truthNum}>{t.stat}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Trusted By */}
        {/* <section className={styles.trustedSection}>
          <div className={styles.secInner}>
            <Reveal as="div" className={styles.kk}>Trusted By</Reveal>
            <Reveal as="h2" className={styles.sh} delay={80}>
              Developers Across 9 Cities<br />
              <em>Who Stopped Counting Leads.</em>
            </Reveal>
            <Reveal className={styles.cityGallery} delay={140}>
              {cities.map((c, index) => (
                <article key={c.name} className={styles.cityCard} style={{ '--city-delay': `${index * 90}ms` }}>
                  <div className={styles.cityMedia}>
                    <img src={c.image} alt={c.name} className={styles.cityImage} loading="lazy" />
                    <div className={styles.cityShade} aria-hidden="true" />
                    <span className={styles.cityPulse} aria-hidden="true" />
                  </div>
                  <div className={styles.cityName}>{c.name}</div>
                </article>
              ))}
            </Reveal>
          </div>
        </section> */}

        {/* 8. Testimonials */}
        <TestimonialsSection />

        {/* 9. Case Study Proof Strip */}
        <CaseStudyStrip />

        {/* 10. CTA Block */}
        <section className={styles.ctaSection}>
          <div className={styles.secInner}>
            <Reveal className={styles.ctaBlk} distance="38px">
              <div className={styles.ctaLeft}>
                <div className={styles.ctaKk}>#IfItDoesntCloseItDoesntCount</div>
                <div className={styles.ctaBig}>Property Edge</div>
                <h2 className={styles.ctaH2}>
                  You Don&apos;t Have a Marketing Problem.<br />
                  You Have a Funnel That Was Never Built.
                </h2>
                <p className={styles.ctaDesc}>
                  Most developers don&apos;t need more leads. They need a system that knows what to do with the ones they already have. Tell us your project — we&apos;ll show you the leak in 72 hours.
                </p>
                <div className={styles.ctaBtns}>
                  <Link href="/contact" className={styles.ctaBtnR}>
                    Audit My Funnel. Give Me the Uncomfortable Truth. →
                  </Link>
                  <Link href="/funnelengineering" className={styles.ctaBtnG}>
                    I Want to See How This Works First
                  </Link>
                </div>
                <p className={styles.ctaFine}>
                  We work exclusively in real estate. We answer exclusively to your cost per booking. Everything else is noise.
                </p>
              </div>
              <div className={styles.ctaBadge}>
                <CountUp value="72hr" className={styles.ctaBadgeN} />
                <div className={styles.ctaBadgeL}>Funnel audit<br />turnaround</div>
                <div className={styles.ctaBadgeD}>No cost. No lock-in.</div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
