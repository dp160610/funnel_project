import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
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

        {/* 4. Five Disciplines */}
        <BuiltForImpactSection />

        {/* 5. The Uncomfortable Truth */}
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
        <section className={styles.trustedSection}>
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
        </section>

        {/* 7. CTA Block */}
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
