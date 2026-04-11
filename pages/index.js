import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {
  HeroSection,
  BuiltForImpactSection,
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

        {/* 3. Boardroom silence hash section */}
        <section className={styles.hashSection}>
          <div className={styles.hashInner}>
            <div className={styles.hashBlk}>
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
            </div>
          </div>
        </section>

        {/* 4. Five Disciplines */}
        <BuiltForImpactSection />

        {/* 5. The Uncomfortable Truth */}
        <section className={styles.truthSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>The Uncomfortable Truth</div>
            <h2 className={styles.sh}>
              Your Funnel Isn&apos;t Leaking<br />
              Because the Market Is Hard.<br />
              <em>It&apos;s Leaking Because Nobody Built It.</em>
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

        {/* 6. Trusted By */}
        <section className={styles.trustedSection}>
          <div className={styles.secInner}>
            <div className={styles.kk}>Trusted By</div>
            <h2 className={styles.sh}>
              Developers Across 18 Cities<br />
              <em>Who Stopped Counting Leads.</em>
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

        {/* 7. CTA Block */}
        <section className={styles.ctaSection}>
          <div className={styles.secInner}>
            <div className={styles.ctaBlk}>
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
                <div className={styles.ctaBadgeN}>72hr</div>
                <div className={styles.ctaBadgeL}>Funnel audit<br />turnaround</div>
                <div className={styles.ctaBadgeD}>No cost. No lock-in.</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

