import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import MediaShowcase from '../components/common/MediaShowcase'
import styles from '../styles/pages/ServicePage.module.css'

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

const funnelStages = [
  {
    label: 'Stage 01 - TOFU',
    title: 'Demand Generation',
    desc: "Building brand salience with in-market buyers before they have entered active search. Video, display, and social reach campaigns engineered for maximum relevant reach.",
    tags: ['Meta Reach', 'YouTube Pre-Roll', 'Programmatic Display', 'Keyword Conquesting'],
    metric: 'Rs 18-35',
    metricLabel: 'Cost Per Click',
  },
  {
    label: 'Stage 02 - MOFU',
    title: 'Lead Acquisition',
    desc: 'Converting warm awareness into captured intent. High-intent lead gen forms, conversion-optimised landing pages, and search campaigns targeting buyers actively comparing options.',
    tags: ['Google Search', 'Meta Lead Gen', 'Dynamic Landing Pages', 'A/B Testing'],
    metric: 'Rs 190-800',
    metricLabel: 'Cost Per Lead',
  },
  {
    label: 'Stage 03 - Lead Qualification',
    title: 'Intent Scoring & Filtering',
    desc: 'Not every lead is a buyer. We deploy behavioural scoring models, CRM integrations, and intelligent drip sequences to surface only sales-ready prospects to your team.',
    tags: ['Lead Scoring', 'CRM Integration', 'Drip Sequences', 'Suppression Logic'],
    metric: 'Rs 500-2,500',
    metricLabel: 'Qualified Lead',
  },
  {
    label: 'Stage 04 - BOFU',
    title: 'Site Visit Conversion',
    desc: 'Getting a qualified prospect from screen to sales floor. Retargeting, WhatsApp automation, personalised offer overlays, and geo-fencing around your site office.',
    tags: ['Dynamic Retargeting', 'WhatsApp Automation', 'Geo-Fencing', 'Offer Engineering'],
    metric: 'Rs 6,000',
    metricLabel: 'Cost Per Visit',
  },
  {
    label: 'Stage 05 - Closure',
    title: 'Booking & Revenue',
    desc: 'The only metric that pays salaries. We track every booking back to originating ad, audience, creative, and platform, then reinvest into what actually closes deals.',
    tags: ['Booking Attribution', 'Closing Loop Tracking', 'Post-Visit Nurture', 'Revenue Analytics'],
    metric: 'Rs 25K-80K',
    metricLabel: 'Cost Per Booking',
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
    subTitle: 'Where Real Estate Buyers Dream Before They Search',
    desc: 'Meta is where purchase intent is formed, not declared. We reach buyers 30–90 days before they enter active search mode — with hyper-local targeting, lookalike audiences modelled on your past buyers, and creative sequencing that builds purchase desire over time.',
    img: 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=700',
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
    subTitle: 'Capture Buyers Who Are Already Looking',
    desc: 'Google is where declared intent lives. We dominate your category keywords, conquest competitor searches, and re-engage site visitors with display retargeting that keeps your project top-of-mind throughout a 90-day decision window.',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=700',
    points: [
      'High-intent keyword campaigns with negative list management',
      'Competitor conquest campaigns for category capture',
      'YouTube TrueView for project walkthroughs',
      'RLSA campaigns for past site visitors',
    ],
  },
  {
    title: 'Programmatic, OTT & More',
    subTitle: 'Surround Your Buyer. Everywhere They Go.',
    desc: 'Premium publishers. Financial news sites. Property portals. OTT platforms. We buy cross-platform inventory that puts your brand in front of the right affluence segment — wherever they consume content. One unified strategy, one cohesive buyer experience.',
    img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=700',
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
    stat: '₹500–2,500 / Qualified Lead',
  },
  {
    title: 'Cost Per Site Visit',
    desc: 'The moment a qualified prospect physically arrives at your site office or model flat. The most expensive and most valuable conversion event before the booking.',
    stat: '₹6,000 / Per Site Visit',
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
    title: 'Spend, leads & CPL - every morning',
    desc: "A concise morning briefing that tells you exactly what was spent yesterday, how many leads came in, and whether your CPL is trending in the right direction - before you've had your coffee.",
    stat: 'Daily',
    img: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Full funnel - lead to qualified to visited',
    desc: 'Every Monday, you receive a stage-by-stage view of your pipeline. How many leads moved from raw to qualified. How many qualified leads converted to site visits. Where the dropout is happening and why.',
    stat: 'Weekly',
    img: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Bookings traced back to the originating ad',
    desc: "Every booking from the month, attributed to its originating campaign, platform, creative, and audience. With recommendations for next month's budget allocation based on what actually drove closures - not impressions.",
    stat: 'Monthly',
    img: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
]

const funnelSignals = [
  'Demand Generation',
  'Lead Capture',
  'Scoring Logic',
  'CRM Sync',
  'Visit Conversion',
  'Booking Attribution',
  'Cost Ladder',
  'Revenue Analytics',
]
const funnelMedia = [
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/videobanner2_603c643007.mp4',
    poster: 'https://realatte.com/images/videobg.png',
    label: 'Funnel Film',
    title: 'A system-wide growth story with motion and commercial clarity',
  },
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/top_funnel_b6cbf4d0e3.mp4',
    poster: 'https://realatte.com/images/thumb1.jpg',
    label: 'Top Funnel',
    title: 'Awareness media designed to create intent before search begins',
  },
  {
    type: 'image',
    src: 'https://backend.realatte.com/uploads/BLU_Banner_Video_1_1_b8532e3fdc.png',
    label: 'Performance Creative',
    title: 'Ad systems built to scale from click to booking',
  },
]

// Funnel Media

export default function FunnelEngineeringPage() {
  return (
    <>
      <NextSeo
        title="Funnel Engineering - Property Edge"
        description="Every rupee, every lead, every handoff engineered. Full-funnel architecture for real estate outcomes."
        canonical="https://propertyedge.com/funnelengineering"
      />

      <Header />

      <main>
        <section className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroInner}>
            <Reveal as="span" className={styles.heroTag}>#FunnelEngineering</Reveal>
            <Reveal as="h1" className={styles.heroTitle} delay={70}>
              <span className="white_gradient">Every Rupee. Every Lead.</span>{' '}
              <span className="pink_gradient">Every Step - Engineered.</span>
            </Reveal>
            <Reveal as="p" className={styles.sectionSub} delay={190} style={{ marginBottom: '32px' }}>
              We don't run campaigns. We architect conversion pipelines — from the first impression a stranger sees to the moment they sign a booking cheque. No guesswork. No vanity metrics. No opaque reporting.
            </Reveal>
            <Reveal delay={330} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Show Me Where My Budget Leaks</Link>
              <Link href="#funnel" className={styles.workTab}>See Full Pipeline</Link>
            </Reveal>
            <Reveal delay={420}>
              <div className={styles.heroMetrics}>
                <div className={styles.heroMetric}>
                  <span className={styles.heroMetricVal}>₹760Cr+</span>
                  <span className={styles.heroMetricLabel}>Managed Ad Spend</span>
                </div>
                <div className={styles.heroMetric}>
                  <span className={styles.heroMetricVal}>400+</span>
                  <span className={styles.heroMetricLabel}>Campaigns Tracked</span>
                </div>
                <div className={styles.heroMetric}>
                  <span className={styles.heroMetricVal}>20–35%</span>
                  <span className={styles.heroMetricLabel}>Avg CPB Reduction</span>
                </div>
                <div className={styles.heroMetric}>
                  <span className={styles.heroMetricVal}>72hr</span>
                  <span className={styles.heroMetricLabel}>Free Funnel Audit</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className={styles.signalStrip}>
          <div className={styles.signalTrack}>
            {[...funnelSignals, ...funnelSignals].map((item, index) => (
              <span key={`${item}-${index}`} className={styles.signalItem}>
                <span className={styles.signalDot} />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">What We Actually Do</span></div>
            <h2 className={styles.sectionHeading}>Other agencies sell campaigns. We sell outcomes.</h2>
            <p className={styles.sectionSub}>Most agencies hand you a leads report and call it a day. We hand you a full-funnel audit - where the money entered, where it got stuck, and what it cost you at every stage of the buyer journey.</p>
            <p className={styles.sectionSub} style={{ marginTop: '14px' }}>Real estate is not an impulse buy. A buyer journey spans 30-180 days. We engineer every touchpoint of that journey with data, not instinct, so your sales team speaks to people who are already convinced.</p>
            <div className={styles.servicesGrid}>
              {introCards.map((c, index) => (
                <Reveal key={c.title} className={styles.serviceCard} delay={180 + index * 90}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{c.title}</h3>
                    <p className={styles.serviceCardDesc}>{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link href="/contact" className={styles.heroCta}>Audit My Current Campaigns</Link>
            </div>
          </div>
        </section>

        <section id="funnel" className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">The Full Funnel Architecture</span></div>
            <h2 className={styles.sectionHeading}>Five Stages. One Accountable System.</h2>
            <p className={styles.sectionSub}>Most budgets die between awareness and closure because no one owns the middle. We map every stage, instrument every handoff, and assign a specific strategy with a specific benchmark to each one.</p>

            {/* Funnel overview — visual tapering bars showing all 5 stages at a glance */}
            <Reveal delay={80}>
              <div className={styles.funnelOverview}>
                {funnelStages.map((stage, i) => {
                  const pcts = ['100%', '80%', '62%', '46%', '32%']
                  return (
                    <div key={stage.label} className={styles.funnelOverviewBar} style={{ width: pcts[i] }}>
                      <span className={styles.funnelOverviewLabel}>{stage.label}</span>
                      <span className={styles.funnelOverviewMetric}>{stage.metric}</span>
                    </div>
                  )
                })}
              </div>
            </Reveal>

            <div className={styles.funnelDiagram}>
              {funnelStages.map((stage, index) => (
                <Reveal key={stage.title} style={{ width: '100%' }} delay={160 + index * 70}>
                  <div className={styles.funnelStageBar}>
                    <div className={styles.funnelStageNum}>{String(index + 1).padStart(2, '0')}</div>
                    <div className={styles.funnelStageBody}>
                      <div className={styles.funnelStageName}>{stage.label}</div>
                      <div className={styles.funnelStageTitle}>{stage.title}</div>
                      <div className={styles.funnelStageDesc}>{stage.desc}</div>
                      <div className={styles.funnelTagRow}>
                        {stage.tags.map((tag) => (
                          <span key={tag} className={styles.funnelTag}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.funnelStageCost}>
                      <span className={styles.funnelStageCostVal}>{stage.metric}</span>
                      <span className={styles.funnelStageCostLabel}>{stage.metricLabel}</span>
                    </div>
                  </div>
                  {index < funnelStages.length - 1 && (
                    <div className={styles.funnelArrow}>
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                        <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </Reveal>
              ))}
            </div>
            <div className={styles.cardStat} style={{ marginTop: '18px' }}>
              <strong>Want to know your exact cost-per-booking potential?</strong> Share your current CPL and we will reverse-engineer the full funnel benchmark for your project size and ticket value within 72 hours.
            </div>
            <div style={{ marginTop: '16px' }}>
              <Link href="/contact" className={styles.heroCta}>Calculate My Funnel Benchmarks</Link>
            </div>
          </div>
        </section>

        <section className={styles.deploySection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">What We Deploy</span></div>
            <h2 className={styles.sectionHeading}>Built to move one thing: your cost-per-booking.</h2>
            <p className={styles.sectionSub}>Six specialised disciplines. One unified strategy. Every service connects directly to a stage of your pipeline — and a number on your P&L.</p>
            <div className={styles.deployGrid}>
              {services.map((s, index) => (
                <Reveal key={s.title} className={styles.deployCard} delay={180 + index * 90}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className={styles.deployCardImg} loading="lazy" />
                  <div className={styles.deployCardBody}>
                    <h3 className={styles.deployCardTitle}>{s.title}</h3>
                    <p className={styles.deployCardDesc}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <MediaShowcase
          title="Funnel Engineering in Action"
          subtitle="Real campaigns. Real data. Real estate outcomes — documented at every stage."
          items={funnelMedia}
        />

        <section className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Platform Expertise</span></div>            <h2 className={styles.sectionHeading}>Right platform. Right stage. Right spend.</h2>
            <p className={styles.sectionSub}>Platform selection is strategy. We do not run everything everywhere - we allocate with surgical precision based on where your specific buyer is in their journey.</p>
            <div className={styles.servicesGrid}>
              {platforms.map((p, index) => (
                <Reveal key={p.title} className={styles.serviceCard} delay={180 + index * 90}>
                  <div className={styles.serviceCardImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.title} className={styles.serviceCardImg} loading="lazy" />
                  </div>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{p.title}</div>
                    <h3 className={styles.serviceCardTitle}>{p.subTitle}</h3>
                    <p className={styles.serviceCardDesc}>{p.desc}</p>
                    <div className={styles.cardList}>
                      {p.points.map((pt) => (
                        <div key={pt} className={styles.cardListItem}>{pt}</div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">The Full Cost Ladder</span></div>
            <h2 className={styles.sectionHeading}>Nothing hidden. Every number accounted for.</h2>
            <p className={styles.sectionSub}>We show you the cost at every stage of your pipeline - not just your CPL. The gap between Rs 350 CPL and Rs 45,000 cost-per-booking is where most budgets disappear without explanation.</p>
            <Reveal delay={160}>
              <div className={styles.costLadder}>
                {costRungs.map((r, index) => {
                  const fillWidths = ['10%', '25%', '40%', '60%', '100%']
                  return (
                    <div key={r.title} className={styles.costRung}>
                      <div className={styles.costRungLabel}>
                        <span className={styles.costRungStat}>{r.stat}</span>
                        <span className={styles.costRungName}>{r.title}</span>
                      </div>
                      <div className={styles.costRungDesc}>{r.desc}</div>
                      <div className={styles.costRungBar}>
                        <div className={styles.costRungTrack}>
                          <div className={styles.costRungFill} style={{ '--fill-w': fillWidths[index] }} />
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Reveal>
            <div className={styles.cardStat} style={{ marginTop: '16px' }}>Important: These are category benchmarks across Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, and Tier-2 markets. Actual numbers vary by ticket size, project stage, brand recognition, and city.</div>
            <div style={{ marginTop: '16px' }}>
              <Link href="/contact" className={styles.heroCta}>Show Me My Full Cost Ladder</Link>
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Reporting & Transparency</span></div>
            <h2 className={styles.sectionHeading}>Opacity is how agencies hide bad performance.</h2>
            <p className={styles.sectionSub}>We give you access to every number, at every stage, at every frequency. You never need to ask for a report because it is already in your inbox before you think to ask.</p>
            <div className={styles.servicesGrid}>
              {reporting.map((r, index) => (
                <Reveal key={r.title} className={styles.serviceCard} delay={180 + index * 90}>
                  <div className={styles.serviceCardImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.img} alt={r.title} className={styles.serviceCardImg} loading="lazy" />
                  </div>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{r.stat}</div>
                    <h3 className={styles.serviceCardTitle}>{r.title}</h3>
                    <p className={styles.serviceCardDesc}>{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div style={{ marginTop: '16px' }}>
              <Link href="/contact" className={styles.heroCta}>See a Sample Report</Link>
            </div>
          </div>
        </section>

        <section className={styles.pageFinalCta}>
          <div className={styles.pageFinalInner}>
            <div className={styles.pageFinalLeft}>
              <div className={styles.pageFinalKk}>#ShowMeWhereMyBudgetLeaks</div>
              <div className={styles.pageFinalBig}>Property Edge</div>
              <h2 className={styles.pageFinalH2}>
                Show us your funnel.<br />We&apos;ll show you the leak.
              </h2>
              <p className={styles.pageFinalDesc}>
                Bring us your current CPL, your lead-to-visit ratio, and your last 3 months of campaign data. We will return a full pipeline audit within 72 hours.
              </p>
              <div className={styles.pageFinalBtns}>
                <Link href="/contact" className={styles.pageFinalBtnW}>Get My Free Funnel Audit →</Link>
                <Link href="/about" className={styles.pageFinalBtnO}>See how we work</Link>
              </div>
              <p className={styles.pageFinalFine}>No cost. No lock-in. No agency fluff. Just the truth about your funnel.</p>
            </div>
            <div className={styles.pageFinalBadge}>
              <span className={styles.pageFinalBadgeN}>72hr</span>
              <div className={styles.pageFinalBadgeL}>Funnel audit<br />turnaround</div>
              <div className={styles.pageFinalBadgeD}>No cost. No lock-in.</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
