import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const stats = [
  { num: '300+', label: 'Brands Built' },
  { num: '18+', label: 'Cities Across India' },
  { num: '₹40KCr+', label: 'Developer Inventory Branded' },
  { num: '12x', label: 'Avg Brand Recall Lift' },
]

const whyCards = [
  {
    title: 'Your brand is your first price negotiation',
    desc: "A strong brand commands price premiums of 8-22% over comparable unbranded inventory in the same micro-market. Branding is not a cost - it is your highest-leverage pricing strategy.",
  },
  {
    title: 'Brand equity shortens your sales cycle',
    desc: 'Buyers who already trust your brand arrive at the site office pre-sold. They ask fewer objections, spend less time in due diligence, and close 40% faster than cold prospects.',
  },
  {
    title: "A brand that's remembered costs less to market",
    desc: 'Every rupee you invest in brand equity today lowers your future cost of acquisition. Recognised brands require 30-50% less paid media spend to generate the same volume of qualified leads.',
  },
  {
    title: "Your second project sells itself on your first one's reputation",
    desc: 'Developers who build brand equity do not start from zero on every launch. Each project compounds the value of the last. We build brands that scale across your entire portfolio — not just the current project.',
  },
  {
    title: "Without brand, you're competing on price. Always.",
    desc: 'Price competition is a race to the bottom. The only sustainable escape from it is a brand so well-positioned that the comparison becomes irrelevant. We build that escape route.',
  },
]

const process = [
  {
    title: 'Brand Discovery & Market Audit',
    desc: 'We map your competitive set, identify the white space in your buyer mind, and audit what your current brand communicates vs. what it should. This is where the strategy is born — not in a mood board, but in a market analysis.',
  },
  {
    title: 'Positioning & Identity Architecture',
    desc: 'We define your brand positioning statement, buyer archetype, emotional territory, and the single most important thing your brand must make people feel. Every creative decision that follows is anchored to this document.',
  },
  {
    title: 'Visual Identity & Brand System',
    desc: 'Logo, typography, colour palette, imagery style, iconography — built as a cohesive system, not a collection of assets. Every element is designed to communicate your positioning without saying a word.',
  },
  {
    title: 'Brand Rollout & Market Activation',
    desc: 'We take the brand live across digital touchpoints, OOH, sales centres, collateral, and performance campaigns in one coordinated market launch.',
  },
]

const services = [
  {
    title: 'Brand Launch & Strategic Repositioning',
    desc: 'For new developers entering the market and established ones who have outgrown their current identity. We define your category, your differentiator, and your brand voice — then bring it to life with an identity system built to own mindshare in your specific micro-market.',
    icon: 'launch',
  },
  {
    title: 'Social Media Brand Management',
    desc: 'Your social presence is your trust storefront. We manage it as a brand system with strategic cadence, visual consistency, and community handling that supports conversion.',
    icon: 'social',
  },
  {
    title: 'Strategic Copywriting & Brand Voice',
    desc: 'Taglines, narratives, project messaging, and ad scripts that make the right buyer feel the project was built for them.',
    icon: 'copy',
  },
  {
    title: 'Visual Identity & Graphic Design System',
    desc: 'Logo, brand guidelines, typography, color architecture, collateral, site hoardings, and sales kit design as one coherent visual system.',
    icon: 'identity',
  },
  {
    title: 'Ad Films, Reels & Motion Brand Content',
    desc: 'Brand films, walkthroughs, testimonials, and short-form content that create desire before the site visit.',
    icon: 'video',
  },
  {
    title: 'Print, OOH & Mainline Advertising',
    desc: 'Site hoardings, brochures, jackets, and direct mailers that dominate the physical market where your buyer lives and commutes.',
    icon: 'mainline',
  },
]

function renderBrandingIcon(icon) {
  if (icon === 'launch') {
    return <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>
  }
  if (icon === 'social') {
    return <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
  }
  if (icon === 'copy') {
    return <svg viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
  }
  if (icon === 'identity') {
    return <svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
  }
  if (icon === 'video') {
    return <svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" /></svg>
  }
  return <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
}

const positioning = [
  {
    title: 'Buyer Archetype Definition',
    desc: 'We build a precise profile of your ideal buyer - not demographics, but psychographics. What they aspire to. What they are afraid of. What makes them sign.',
  },
  {
    title: 'Competitive White Space Mapping',
    desc: "We audit every competitor brand in your category and identify the specific positioning territory they have left unoccupied - then plant your flag in it.",
  },
  {
    title: 'Emotional Brand Territory',
    desc: 'Logic drives shortlisting. Emotion drives booking. We define the precise emotional feeling your brand must create and build every expression around it.',
  },
  {
    title: 'Brand Promise & Proof Architecture',
    desc: 'Your promise paired with credibility architecture - proof points, testimonials, and trust signals - that makes the promise believable.',
  },
  {
    title: 'Voice, Tone & Message Hierarchy',
    desc: 'We document exactly how your brand speaks so every communication reinforces the same positioning.',
  },
  {
    title: 'Portfolio Brand Architecture',
    desc: 'For multi-project developers, we create a hierarchy where each project has distinct identity while compounding master brand equity.',
  },
]

const differentiators = [
  {
    title: 'Strategy Before Aesthetics',
    desc: 'We write your brand strategy before we open a design tool, so every visual decision has a strategic reason behind it.',
  },
  {
    title: 'End-to-End Execution',
    desc: 'Strategy, design, copy, video, print, and digital under one roof with one positioning document and one execution rhythm.',
  },
  {
    title: 'Performance-Connected Branding',
    desc: 'Brand assets are built to perform in paid media from day one, not just look good in a presentation.',
  },
]

const portfolioTabs = ['All Work', 'Brand Identities', 'Ad Films', 'Mainline Ads', 'Social Creatives', 'OOH & Print']

const portfolioItems = [
  'Brand Identity Case 01',
  'Ad Film Campaign 01',
  'OOH Creative Series 01',
  'Brand Identity Case 02',
  'Social Creative Series 01',
  'Mainline Ad Campaign 01',
  'Brand Identity Case 03',
  'Ad Film Campaign 02',
]

const industries = [
  {
    title: 'Affordable Housing',
    desc: 'Rs25L to Rs60L. First-home buyers. Aspiration-led branding that makes the purchase feel like a life milestone.',
  },
  {
    title: 'Mid-Segment Residential',
    desc: 'Rs60L to Rs1.5Cr. Lifestyle upgraders. Branding that signals quality, community, and a step-up in living standards.',
  },
  {
    title: 'Premium & Luxury',
    desc: 'Rs1.5Cr to Rs5Cr. Discerning buyers. Positioning built on exclusivity, craft, and the emotional prestige of the address.',
  },
  {
    title: 'Ultra Luxury & HNI',
    desc: 'Rs5Cr+. Investment-grade buyers. Brand storytelling that justifies pricing through heritage, scarcity, and lifestyle elevation.',
  },
  {
    title: 'Commercial & Plots',
    desc: 'Office, retail, plotted development. ROI-led brand narratives that speak to investors and owner-occupiers differently.',
  },
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi NCR', 'Bengaluru', 'Hyderabad', 'Chennai', 'Ahmedabad', 'Jaipur', 'Kolkata', 'Coimbatore']

export default function BrandingPage() {
  return (
    <>
      <NextSeo
        title="Branding - Property Edge"
        description="Brand strategy and identity engineered for real estate trust, premium perception, and faster closure timelines."
        canonical="https://propertyedge.com/branding"
      />

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>Brand Strategy & Identity</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">A Brand Isn't What You Say.</span>{' '}
              <span className="pink_gradient">It's What They Remember.</span>
            </h1>
            <p className={styles.sectionSub} style={{ maxWidth: '760px', marginBottom: '32px' }}>
              In real estate, the brand you build today determines the price premium you command tomorrow. We position developers and builders as the only logical choice, not just another option.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Position My Brand to Lead the Market</Link>
              <Link href="/portfolio" className={styles.workTab}>See Our Branding Work</Link>
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
            <div className="title_top_wrap"><span className="top_title">Why Branding is Non-Negotiable</span></div>
            <h2 className={styles.sectionHeading}>Buyers do not buy property. They buy belief.</h2>
            <p className={styles.sectionSub}>Without deliberate brand positioning, you are leaving pricing power, buyer quality, and booking velocity to chance.</p>
            <div className={styles.servicesGrid}>
              {whyCards.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cardStat}>73% of home buyers shortlist on brand trust alone before visiting a site.</div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Our Branding Process</span></div>
            <h2 className={styles.sectionHeading}>Brand-building is not creative. It is strategic.</h2>
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
            <div className="title_top_wrap"><span className="top_title">Branding Solutions We Offer</span></div>
            <h2 className={styles.sectionHeading}>Six disciplines. One cohesive brand story.</h2>
            <div className={styles.servicesGrid}>
              {services.map((s) => (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.serviceIconBox}>{renderBrandingIcon(s.icon)}</div>
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
            <div className="title_top_wrap"><span className="top_title">Brand Positioning Framework</span></div>
            <h2 className={styles.sectionHeading}>We do not design brands. We engineer buyer perception.</h2>
            <div className={styles.servicesGrid}>
              {positioning.map((p, i) => (
                <div key={p.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>0{i + 1}</div>
                    <h3 className={styles.serviceCardTitle}>{p.title}</h3>
                    <p className={styles.serviceCardDesc}>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Why Property Edge for Branding</span></div>
            <h2 className={styles.sectionHeading}>Every agency says they are different. Here is proof.</h2>
            <div className={styles.ctaBanner}>
              <h3 className={styles.serviceCardTitle}>We only do real estate. Which means we only do what works in real estate.</h3>
              <p className={styles.serviceCardDesc}>Generic agencies bring FMCG logic into property and wonder why it fails. We build positioning for real estate psychology, sales cycles, and category dynamics.</p>
            </div>
            <div className={styles.servicesGrid}>
              {differentiators.map((d) => (
                <div key={d.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{d.title}</h3>
                    <p className={styles.serviceCardDesc}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Our Branding Work</span></div>
            <h2 className={styles.sectionHeading}>Logos, Ad Films & Mainline Creatives</h2>
            <p className={styles.sectionSub}>From new developer identities to complete project rebrands — across 300+ brands, 18+ cities, and every ticket size from affordable housing to ultra-luxury.</p>
            <div className={styles.workTabs}>
              {portfolioTabs.map((tab, i) => (
                <button key={tab} className={`${styles.workTab} ${i === 0 ? styles.activeTab : ''}`} type="button">
                  {tab}
                </button>
              ))}
            </div>
            <div className={styles.workGrid}>
              {portfolioItems.map((item) => (
                <div key={item} className={styles.workCard}>
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#555', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'center', padding: '12px', background: '#fff' }}>
                    {item}
                  </div>
                  <div className={styles.workOverlay}>
                    <span className={styles.workPlay}>View Project</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap"><span className="top_title">Segments We Brand</span></div>
            <h2 className={styles.sectionHeading}>Every segment. Every ticket size.</h2>
            <p className={styles.sectionSub}>Our brand thinking adapts to the psychological and aspirational context of each buyer segment — from first-home affordable to ultra-luxury.</p>
            <div className={styles.servicesGrid}>
              {industries.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
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
                <span className="black_gradient">Developers who turned their brand into</span>{' '}
                <span className="pink_gradient">their best sales asset.</span>
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
              <h2 className={styles.ctaBannerTitle}>Your next project deserves a brand that precedes it.</h2>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Link href="/contact" className={styles.heroCta}>Start My Brand Strategy Session</Link>
                <Link href="/about" className={styles.workTab}>See Our Process First</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
