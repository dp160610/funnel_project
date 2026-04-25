import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import CountUp from '../components/common/CountUp'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '2,400+', label: 'Reels Produced' },
  { num: '180+', label: 'Influencer Collaborations' },
  { num: '340 Cr+', label: 'Organic Impressions' },
  { num: '3.2x', label: 'Avg Trust Lift vs Paid Ads' },
]

const problemPoints = [
  'Converts passive awareness into active conviction',
  'Generates organic content that outperforms paid media in engagement',
  'Builds a searchable, indexable trust trail around your project',
  'Compresses time-to-decision for high-intent buyers',
]

const reasons = [
  {
    title: 'Buyers Research Before They Respond',
    desc: "Before a buyer calls your number, they have already watched 5-8 videos about your project, location, or builder reputation. If none of that content is yours - or endorsed by voices they trust - you have already lost ground before the conversation starts.",
    stat: '11+ content pieces consumed pre-visit',
  },
  {
    title: 'Ad Fatigue Has Reached a Ceiling',
    desc: "Indian real estate buyers see 400+ digital ads per day. CTR on display ads in real estate has dropped below 0.4% industrywide. Influence content commands 6-8x higher engagement because it does not feel like an ad.",
    stat: '6-8x higher engagement vs. display ads',
  },
  {
    title: 'NRI & HNI Buyers Rely on Curated Discovery',
    desc: 'Affluent and non-resident buyers rarely engage with generic paid ads. They discover investments through trusted financial creators, NRI community leaders, and lifestyle voices. If you are not present in those conversations, a competitor is.',
    stat: '73% of NRI buyers via peer/content influence',
  },
  {
    title: 'Organic Reach Compounds Over Time',
    desc: 'Unlike paid ads that stop the moment you stop spending, influence content continues to rank, circulate, and convert for months. A well-placed influencer video is a perpetual trust asset, not a one-time expense.',
    stat: 'Content longevity: 6-18 months per piece',
  },
  {
    title: 'Project Launch Windows Are Non-Negotiable',
    desc: 'The first 60-90 days after a project launch set the entire sales velocity for the project lifetime. Influence campaigns create concentrated buzz during this window with organic amplification and pre-launch wait-lists.',
    stat: 'Launch window: first 60 days set the tone',
  },
  {
    title: 'Your Reputation Is Built in Comments, Not Ads',
    desc: 'When a buyer is on the fence, they search your builder name, project name, and location. What they find decides whether they call or move on. Influence marketing populates that layer with credibility signals.',
    stat: 'Search perception shapes 60%+ of final decisions',
  },
]

const comparisonRows = [
  { metric: 'Buyer Trust Score', paid: 'Low - ads feel promotional', influence: 'High - peer-validated credibility' },
  { metric: 'Content Shelf Life', paid: 'Ends when budget stops', influence: '6-18 months of organic reach' },
  { metric: 'NRI / HNI Reach', paid: 'Limited, expensive targeting', influence: 'Natural via niche creator audiences' },
  { metric: 'Search Presence', paid: 'Paid only - no indexing', influence: 'Reels and videos rank organically' },
  { metric: 'Cost per Engaged View', paid: 'Rs 3-8 per view', influence: 'Rs 0.4-1.2 per view' },
  { metric: 'Emotional Conviction', paid: 'Difficult - format mismatch', influence: 'High - story-led walkthroughs' },
  { metric: 'Site Visit Conversion Rate', paid: '1-3% of leads', influence: '4-9% of leads (influence-warmed)' },
]

const smoPillars = [
  {
    title: 'Strategic Content Architecture',
    desc: 'Data-driven content calendars mapped to project milestones, buyer intent signals, and platform algorithm windows. Every post has a defined role - reach, engagement, or conversion.',
  },
  {
    title: 'Profile Authority & Discoverability',
    desc: 'Bio optimisation, highlight architecture, keyword indexing, and cross-platform consistency so when a buyer searches for your builder or project, your profile shows up and convinces immediately.',
  },
  {
    title: 'AI-Powered Content Intelligence',
    desc: 'Real-time analytics to track what content types drive profile visits, DMs, and link clicks, with continuous iteration to amplify what works and retire what does not.',
  },
  {
    title: 'Hyperlocal & Geo-Targeted Execution',
    desc: 'Neighbourhood-specific content, geo-targeted stories, and location-tagged reels that capture buyers actively researching your micro-market.',
  },
]

const smoMetrics = [
  { value: '4.8x', label: 'Avg Profile Visit Increase' },
  { value: '62%', label: 'Higher DM Conversion' },
  { value: '3.1x', label: 'Organic Reach Growth' },
  { value: '28%', label: 'CPL Reduction via Organic' },
]

const services = [
  {
    title: 'Influencer Marketing & Creator Partnerships',
    desc: "We build and manage end-to-end influencer campaigns from creator identification and briefing to production oversight and reporting. We work across macro, micro, and hyperlocal creator tiers and map each creator's audience profile to your project's buyer persona.",
  },
  {
    title: 'Film Production, AVs & Cinematic Photography',
    desc: 'From full-length project films and cinematic aerial walkthroughs to high-conversion property photography, we produce content that creates emotional resonance and intent, not just information.',
  },
  {
    title: 'Model-Based Reels & Lifestyle Content',
    desc: 'Aspirational short-form narratives featuring professional models that bring your project to life as lived experience. Scripted and produced for Instagram and YouTube Shorts with conversion hooks built in.',
  },
  {
    title: 'Real Estate SEO & Content Visibility',
    desc: 'Hyperlocal and category SEO that helps your project dominate search when buyers look for location, builder, or project terms. Includes landing pages, blog content, YouTube SEO, and GBP optimisation.',
  },
  {
    title: 'Social Media Management & Community Building',
    desc: 'Full-service management of builder and project social channels: content calendars, community engagement, DM response protocols, and brand voice consistency.',
  },
  {
    title: 'Digital PR & Thought Leadership',
    desc: 'Media placements, builder profile stories, project launch coverage, and thought leadership that establish authority and create a credibility halo that paid media cannot replicate.',
  },
]

const tiers = [
  {
    title: 'Nano',
    range: '5K-50K followers',
    desc: 'Neighbourhood community leaders and local trusted voices with high engagement and authenticity.',
    bestFor: 'Best for: Affordable and mid-segment',
  },
  {
    title: 'Micro',
    range: '50K-500K followers',
    desc: 'Niche authority creators with strong category relevance and engaged purchase-intent audiences.',
    bestFor: 'Best for: Most residential projects',
  },
  {
    title: 'Macro',
    range: '500K-5M followers',
    desc: 'Mass reach creators for launch windows and broad salience when visibility must scale quickly.',
    bestFor: 'Best for: Premium and launch campaigns',
  },
  {
    title: 'Celebrity',
    range: '5M+ followers',
    desc: 'National personalities delivering maximum credibility and awareness for premium inventory.',
    bestFor: 'Best for: Luxury and township launches',
  },
]

const process = [
  {
    title: 'Buyer Persona & Creator Mapping',
    desc: 'Define exact buyer profile and map creator audiences that mirror this profile with precision.',
    output: 'Output: Creator shortlist + audience match report',
  },
  {
    title: 'Content Strategy & Brief Development',
    desc: 'Build campaign narrative, key messages, and creator briefs that preserve authenticity without losing positioning accuracy.',
    output: 'Output: Campaign narrative + creator briefs',
  },
  {
    title: 'Production Oversight & QC',
    desc: 'Manage execution, review rounds, and brand compliance checks to ensure quality and conversion readiness.',
    output: 'Output: Approved content ready to publish',
  },
  {
    title: 'Amplification & Paid Boost',
    desc: 'Scale top-performing organic content with paid overlays on Meta and YouTube to precise location and demographic cohorts.',
    output: 'Output: Boosted content with paid reach overlay',
  },
  {
    title: 'Performance Tracking & Attribution',
    desc: 'Track views, saves, profile visits, clicks, and lead quality attribution against pipeline movement and CPL.',
    output: 'Output: Influence attribution report',
  },
]

const formats = [
  {
    title: 'Project Walkthrough Reels',
    desc: '90-second to 3-minute immersive project tours with voiceover, lifestyle context, and location cues.',
    role: 'Funnel role: Awareness -> Intent',
  },
  {
    title: 'Talking-Head Expert Reviews',
    desc: 'Creator-led analysis on location investment potential, amenity breakdowns, and value benchmarks.',
    role: 'Funnel role: Trust Building -> Conviction',
  },
  {
    title: 'Model & Lifestyle Reels',
    desc: 'Aspirational moments that sell the lived experience, not just inventory and specifications.',
    role: 'Funnel role: Emotional Connect -> Desire',
  },
  {
    title: 'Cinematic Project Films',
    desc: 'Flagship 3-5 minute narratives with premium production quality to establish authority quickly.',
    role: 'Funnel role: Brand Authority -> Premium Perception',
  },
  {
    title: 'Resident Testimonial Content',
    desc: 'Authentic resident perspectives covering trust, build quality, and daily living confidence.',
    role: 'Funnel role: Objection Resolution -> Close',
  },
  {
    title: 'Site Visit Vlogs & Location Reviews',
    desc: 'First-person realism that helps remote and NRI buyers evaluate with confidence before visiting.',
    role: 'Funnel role: Consideration -> Site Visit Decision',
  },
]

const influenceSignals = [
  'Creator Partnerships',
  'Launch Buzz',
  'Hyperlocal Reels',
  'Social Proof',
  'NRI Discovery',
  'Lifestyle Content',
  'Digital PR',
  'Search Visibility',
]
const influenceMedia = [
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/hiranandani_video_new_2_1_fae209948e.mp4',
    poster: 'https://backend.realatte.com/uploads/hiranandani_video_new_2_1_ce5772998e.png',
    label: 'Influence Film',
    title: 'Creator-led storytelling that builds trust before the site visit',
  },
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/Dosti_Sales_Video_1_1_620ce95488.mp4',
    poster: 'https://backend.realatte.com/uploads/Dosti_Sales_Video_1_1_ce02681275.png',
    label: 'Social Reel',
    title: 'Short-form visual proof designed to travel organically',
  },
  {
    type: 'image',
    src: 'https://backend.realatte.com/uploads/i_stay_thum_b9eadfd2a4.png',
    label: 'Launch Content',
    title: 'Content systems that create buzz across search and social',
  },
]

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroInner}>
            <Reveal as="h1" className={styles.heroTitle} delay={70}>
              <span className="white_gradient">Real Estate Doesn't Get Sold.</span>{' '}
              <span className="pink_gradient">It Gets Believed.</span>
            </Reveal>
            <Reveal as="p" className={styles.sectionSub} delay={190} style={{ marginBottom: '32px' }}>
              Buyers do not trust ads anymore. They trust people. We build influence ecosystems that put your project in front of the right audiences through the voices they already follow, the content they already consume, and the stories that make them act.
            </Reveal>
            <Reveal delay={330} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Build My Influence Strategy</Link>
              <a href="#why" className={styles.workTab}>See why it works</a>
            </Reveal>
          </div>
        </section>

        <section className={styles.signalStrip}>
          <div className={styles.signalTrack}>
            {[...influenceSignals, ...influenceSignals].map((item, index) => (
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

        <section id="why" className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">The problem with ads alone</span></div>
            <h2 className={styles.sectionHeading}>Buyers Have Learned to Ignore Your Ads. They Have Not Learned to Ignore People They Trust.</h2>
            <p className={styles.sectionSub}>Real estate is a high-stakes, high-emotion category. The higher the ticket size, the more social proof and emotional conviction a buyer needs before even making a call. Paid ads can reach them. Influence convinces them.</p>
            <div className={styles.servicesGrid}>
              <Reveal className={styles.serviceCard}>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceCardTitle}>The Trust Deficit in Real Estate Marketing</h3>
                  <p className={styles.serviceCardDesc}>Average banner blindness in digital advertising is now above 86%. Buyers in the Rs 50L-5Cr bracket consume 11+ pieces of third-party content before visiting a site. Ad spend gets them to scroll, but not to believe.</p>
                  <div className={styles.cardStat}>
                    "I saw the ad. But I only booked after three people I follow talked about the project."
                    <br />
                    <span style={{ fontSize: '11px' }}>Actual buyer feedback, Hyderabad, 2024</span>
                  </div>
                </div>
              </Reveal>
              <Reveal className={styles.serviceCard} delay={180}>
                <div className={styles.serviceCardBody}>
                  <h3 className={styles.serviceCardTitle}>What Influence Marketing Actually Solves</h3>
                  <p className={styles.serviceCardDesc}>Influence marketing closes the credibility gap. When a respected voice endorses your project, it feels less like an ad and more like a recommendation.</p>
                  <div className={styles.cardList}>
                    {problemPoints.map((point) => (
                      <div key={point} className={styles.cardListItem}>{point}</div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Why builders need influence</span></div>
            <h2 className={styles.sectionHeading}>Six Reasons Every Developer Needs an Influence-First Strategy</h2>
            <p className={styles.sectionSub}>In a category where trust is the primary purchase trigger, influence marketing is not supplementary. It is foundational.</p>
            <div className={styles.servicesGrid}>
              {reasons.map((r, idx) => (
                <Reveal key={r.title} className={styles.serviceCard} delay={idx * 60}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Reason {String(idx + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{r.title}</h3>
                    <p className={styles.serviceCardDesc}>{r.desc}</p>
                    <div className={styles.cardStat}>{r.stat}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">The comparison</span></div>
            <h2 className={styles.sectionHeading}>Influence Marketing vs. Traditional Paid Ads</h2>
            <p className={styles.sectionSub}>Understanding where influence fits and why smart builders run both in combination.</p>
            <div style={{ marginTop: '30px', border: '1px solid rgba(200,16,46,0.25)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', background: 'rgba(200,16,46,0.08)', borderBottom: '1px solid rgba(200,16,46,0.25)' }}>
                <div style={{ padding: '12px 14px', fontWeight: 800, fontSize: '12px', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.08em' }}>What You&apos;re Measuring</div>
                <div style={{ padding: '12px 14px', fontWeight: 800, fontSize: '12px', color: '#111111', textTransform: 'uppercase', letterSpacing: '0.08em', borderLeft: '1px solid rgba(200,16,46,0.2)' }}>Paid Ads Only</div>
                <div style={{ padding: '12px 14px', fontWeight: 800, fontSize: '12px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.08em', borderLeft: '1px solid rgba(200,16,46,0.2)' }}>Influence + Paid</div>
              </div>
              {comparisonRows.map((row, i) => (
                <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr 1fr', borderBottom: '1px solid rgba(0,0,0,0.08)', background: i % 2 === 0 ? 'rgba(0,0,0,0.03)' : 'transparent' }}>
                  <div style={{ padding: '11px 14px', fontSize: '13px', color: '#111111', fontWeight: 600 }}>{row.metric}</div>
                  <div style={{ padding: '11px 14px', fontSize: '13px', color: 'rgba(17,17,17,0.55)', borderLeft: '1px solid rgba(0,0,0,0.08)' }}>{row.paid}</div>
                  <div style={{ padding: '11px 14px', fontSize: '13px', color: '#C8102E', borderLeft: '1px solid rgba(0,0,0,0.08)', fontWeight: 500 }}>{row.influence}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Social media optimisation</span></div>
            <h2 className={styles.sectionHeading}>Your Social Presence is a Sales Channel. We Treat It Like One.</h2>
            <p className={styles.sectionSub}>Social media optimisation is not about posting consistently. It is about building a presence that pre-qualifies, pre-convinces, and pre-warms buyers before sales even engage.</p>

            {/* SMO two-column: intro copy left, pillars grid right */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '48px', alignItems: 'start' }}>
              {/* Left: intro copy */}
              <div>
                <h3 style={{ color: '#ffffff', fontFamily: 'Cormorant Garamond, Cormorant, Georgia, serif', fontSize: 'clamp(20px,2.2vw,28px)', fontWeight: 600, lineHeight: 1.3, marginBottom: '20px' }}>
                  Optimised Engagement for Real Buyer Behaviour
                </h3>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '13px', lineHeight: 1.85, margin: '0 0 16px' }}>
                  We approach SMO as conversion architecture. Every piece of content, story, and caption is designed to move buyers one step closer to a site visit. Not just followers. Buyer pipeline.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '13px', lineHeight: 1.85, margin: 0 }}>
                  Our framework combines content strategy, profile authority building, algorithm intelligence, and paid amplification calibrated to the real estate decision cycle: awareness, consideration, intent, action.
                </p>
              </div>

              {/* Right: 2×2 pillars grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {smoPillars.map((pillar) => (
                  <div key={pillar.title} style={{ background: 'rgba(200,16,46,0.05)', border: '1px solid rgba(200,16,46,0.18)', padding: '22px 18px' }}>
                    <h4 style={{ color: '#ffffff', fontSize: '13px', fontWeight: 700, margin: '0 0 10px', lineHeight: 1.4 }}>{pillar.title}</h4>
                    <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '12px', lineHeight: 1.75, margin: 0 }}>{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics row */}
            <div className={styles.statsRow} style={{ marginTop: '40px' }}>
              {smoMetrics.map((item, index) => (
                <Reveal key={item.label} className={styles.statItem} delay={180 + index * 90}>
                  <CountUp value={item.value} className={styles.statNum} />
                  <div className={styles.statLabel}>{item.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Influence services</span></div>
            <h2 className={styles.sectionHeading}>The Complete Influence Stack for Real Estate</h2>
            <p className={styles.sectionSub}>Every service is designed for one outcome: making a buyer believe in your project before your sales team ever makes contact.</p>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <Reveal key={s.title} className={styles.serviceCard} delay={180 + i * 90}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>{String(i + 1).padStart(2, '0')} - Service</div>
                    <h3 className={styles.serviceCardTitle}>{s.title}</h3>
                    <p className={styles.serviceCardDesc}>{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Creator selection framework</span></div>
            <h2 className={styles.sectionHeading}>Not Every Creator is Right for Every Project. We Know the Difference.</h2>
            <p className={styles.sectionSub}>We match creator tier, audience profile, and format to your project price point, location, and segment. Reach without relevance is noise.</p>
            <div className={styles.servicesGrid}>
              {tiers.map((tier, index) => (
                <Reveal key={tier.title} className={styles.serviceCard} delay={180 + index * 90}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{tier.title}</h3>
                    <div className={styles.cardKicker}>{tier.range}</div>
                    <p className={styles.serviceCardDesc}>{tier.desc}</p>
                    <div className={styles.cardStat}>{tier.bestFor}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.servicesSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Our process</span></div>
            <h2 className={styles.sectionHeading}>How We Build an Influence Campaign That Actually Converts</h2>
            <p className={styles.sectionSub}>Five stages from brief to booking. Each with a defined output, clear owner, and measurable outcome.</p>
            <div className={styles.servicesGrid}>
              {process.map((p, i) => (
                <Reveal key={p.title} className={styles.serviceCard} delay={180 + i * 90}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Stage {String(i + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{p.title}</h3>
                    <p className={styles.serviceCardDesc}>{p.desc}</p>
                    <div className={styles.cardStat}>{p.output}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Content formats</span></div>
            <h2 className={styles.sectionHeading}>Every Format Has a Job in the Funnel. We Know Which Does What.</h2>
            <p className={styles.sectionSub}>We do not produce content for volume. Every format is assigned a funnel role: awareness, trust-building, or conversion.</p>
            <div className={styles.servicesGrid}>
              {formats.map((f, index) => (
                <Reveal key={f.title} className={styles.serviceCard} delay={180 + index * 90}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{f.title}</h3>
                    <p className={styles.serviceCardDesc}>{f.desc}</p>
                    <div className={styles.cardStat}>{f.role}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pageFinalCta}>
          <div className={styles.pageFinalInner}>
            <div className={styles.pageFinalLeft}>
              <div className={styles.pageFinalKk}>#CredibilityAtScale</div>
              <div className={styles.pageFinalBig}>Property Edge</div>
              <h2 className={styles.pageFinalH2}>Make Your Project the One Everyone Is Talking About.</h2>
              <p className={styles.pageFinalDesc}>We connect your project with the right voices — creators, critics, and community leaders who move audiences from scroll to site visit.</p>
              <div className={styles.pageFinalBtns}>
                <Link href="/contact" className={styles.pageFinalBtnW}>Start My Influence Campaign →</Link>
                <Link href="/about" className={styles.pageFinalBtnO}>See How We Work</Link>
              </div>
              <p className={styles.pageFinalFine}>Campaign strategy delivered within 72 hours of brief submission.</p>
            </div>
            <div className={styles.pageFinalBadge}>
              <span className={styles.pageFinalBadgeN}>180+</span>
              <div className={styles.pageFinalBadgeL}>Influencer<br />Collaborations</div>
              <div className={styles.pageFinalBadgeD}>Across real estate verticals</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
