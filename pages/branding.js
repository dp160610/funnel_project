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

const reasons = [
  {
    title: 'Your brand is your first price negotiation',
    desc: 'A strong brand can command price premiums over comparable unbranded inventory in the same micro-market. Branding is a pricing strategy, not a decorative exercise.',
  },
  {
    title: 'Brand equity shortens your sales cycle',
    desc: 'Buyers who already trust your brand arrive at the site office warmer, less defensive, and faster to close than cold prospects.',
  },
  {
    title: 'A remembered brand costs less to market',
    desc: 'Every rupee invested in brand equity today lowers future acquisition cost. Recognition reduces the effort required from paid media tomorrow.',
  },
  {
    title: 'Your next project should inherit trust',
    desc: 'Developers with strong brand systems do not start from zero on every launch. Each project compounds the value of the previous one.',
  },
  {
    title: 'Without brand, you compete on price',
    desc: 'Price-led competition is a race to the bottom. Strategic positioning is the only sustainable way to escape it.',
  },
]

const services = [
  {
    title: 'Brand Launch & Strategic Repositioning',
    desc: 'For new developers entering the market and established ones outgrowing their current identity. We define category, differentiator, and voice before taking it to market.',
    img: 'https://realatte.com/images/branding/logos/1.jpg',
  },
  {
    title: 'Social Media Brand Management',
    desc: 'Your social presence becomes a trust-building instrument with consistent visual identity, content cadence, and community handling that supports conversion.',
    img: 'https://realatte.com/images/branding/logos/3.jpg',
  },
  {
    title: 'Strategic Copywriting & Brand Voice',
    desc: 'Taglines, narratives, brochure copy, landing page messaging, and ad scripts designed to make the right buyer feel the project was built for them.',
    img: 'https://realatte.com/images/branding/logos/5.jpg',
  },
  {
    title: 'Visual Identity & Graphic Design System',
    desc: 'Logo, typography, colour system, imagery rules, and collateral built as one coherent identity across digital, print, and on-ground touchpoints.',
    img: 'https://realatte.com/images/branding/logos/7.jpg',
  },
  {
    title: 'Ad Films, Reels & Motion Brand Content',
    desc: 'Brand films, walkthroughs, testimonials, Instagram reels, and motion assets that build desire before a buyer ever visits the site.',
    img: 'https://realatte.com/images/branding/logos/9.jpg',
  },
  {
    title: 'Print, OOH & Mainline Advertising',
    desc: 'Site hoardings, brochures, jackets, and direct mailers designed to dominate the physical market where your buyers actually live and commute.',
    img: 'https://realatte.com/images/branding/mainline/1.jpg',
  },
]

const process = [
  {
    title: 'Brand Discovery & Market Audit',
    desc: 'We map your competitive set, identify white space in the buyer mind, and audit what your current brand communicates versus what it should.',
  },
  {
    title: 'Positioning & Identity Architecture',
    desc: 'We define your positioning statement, buyer archetype, emotional territory, and the one feeling your brand must create.',
  },
  {
    title: 'Visual Identity & Brand System',
    desc: 'Logo, typography, colour palette, imagery style, and collateral rules built as a system instead of a pile of disconnected assets.',
  },
  {
    title: 'Brand Rollout & Market Activation',
    desc: 'We launch the brand across digital, OOH, collateral, and sales touchpoints in one coordinated go-to-market rollout.',
  },
]

const positioning = [
  'Buyer Archetype Definition',
  'Competitive White Space Mapping',
  'Emotional Brand Territory',
  'Brand Promise & Proof Architecture',
  'Voice, Tone & Message Hierarchy',
  'Portfolio Brand Architecture',
]

const differentiators = [
  {
    title: 'Real estate only',
    desc: 'We build brands around the psychology, decision cycle, and category realities of property buyers, not generic FMCG logic.',
  },
  {
    title: 'Strategy before aesthetics',
    desc: 'We write the positioning logic before opening a design tool, so every visual choice has a strategic reason behind it.',
  },
  {
    title: 'End-to-end execution',
    desc: 'Strategy, copy, design, film, print, and digital activation stay under one roof and one positioning document.',
  },
  {
    title: 'Performance-connected branding',
    desc: 'Brand assets are created to perform inside paid media, not just to look good in a presentation.',
  },
]

const workImages = [
  'https://realatte.com/images/branding/logos/1.jpg',
  'https://realatte.com/images/branding/logos/2.jpg',
  'https://realatte.com/images/branding/logos/3.jpg',
  'https://realatte.com/images/branding/logos/4.jpg',
  'https://realatte.com/images/branding/logos/5.jpg',
  'https://realatte.com/images/branding/logos/6.jpg',
  'https://realatte.com/images/branding/mainline/1.jpg',
  'https://realatte.com/images/branding/mainline/2.jpg',
  'https://realatte.com/images/branding/mainline/3.jpg',
]

const brandLogoNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 18, 20, 21, 22, 26, 31, 34, 41, 43, 50, 58, 65]
const cities = ['Mumbai', 'Pune', 'Delhi', 'Jaipur', 'Kolkata', 'Bengaluru', 'Chennai', 'Hyderabad', 'Coimbatore', 'Ahmedabad']

export default function BrandingPage() {
  return (
    <>
      <NextSeo
        title="Branding - Property Edge"
        description="A brand is not what you say. It is what buyers remember. Strategic real estate branding built to command premium, trust, and faster sales velocity."
        canonical="https://propertyedge.com/branding"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroTag}>#BrandStrategyAndIdentity</span>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">A Brand Isn&apos;t What You Say.</span>{' '}
              <span className="pink_gradient">It&apos;s What They Remember.</span>
            </h1>
            <p className={styles.sectionSub} style={{ maxWidth: '760px', marginBottom: '32px' }}>
              In real estate, the brand you build today determines the price premium you command tomorrow. We position developers and builders as the only logical choice in the minds of their buyers.
            </p>
            <Link href="/contact" className={styles.heroCta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.ctaIcon} />
              Position My Brand to Lead the Market
            </Link>
          </div>
        </section>

        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.statsRow}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Why Branding Is Non-Negotiable</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Buyers don&apos;t buy property. </span>
              <span className="pink_gradient">They buy belief.</span>
            </h2>
            <p className={styles.sectionSub}>
              In a market where two projects can be 500 metres apart at the same price point, the stronger brand wins. Without deliberate positioning, you leave pricing power, buyer quality, and booking velocity entirely to chance.
            </p>
            <div className={styles.servicesGrid} style={{ marginTop: '40px' }}>
              {reasons.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Brand Advantage</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.cardStat}>73% of home buyers shortlist on brand trust alone before a site visit</div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Our Branding Process</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Brand-building isn&apos;t creative. </span>
              <span className="pink_gradient">It&apos;s strategic.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {process.map((item, index) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Stage {String(index + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Branding Solutions We Offer</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Six disciplines. </span>
              <span className="pink_gradient">One cohesive brand story.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {services.map((s, i) => (
                <div key={i} className={styles.serviceCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
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
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Brand Positioning Framework</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">We don&apos;t design brands. </span>
              <span className="pink_gradient">We engineer buyer perception.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {positioning.map((item, index) => (
                <div key={item} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Layer {String(index + 1).padStart(2, '0')}</div>
                    <h3 className={styles.serviceCardTitle}>{item}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.caseSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Why Property Edge For Branding</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Every agency says they&apos;re different. </span>
              <span className="pink_gradient">Here&apos;s our proof.</span>
            </h2>
            <div className={styles.servicesGrid}>
              {differentiators.map((item) => (
                <div key={item.title} className={styles.serviceCard}>
                  <div className={styles.serviceCardBody}>
                    <div className={styles.cardKicker}>Differentiator</div>
                    <h3 className={styles.serviceCardTitle}>{item.title}</h3>
                    <p className={styles.serviceCardDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Work */}
        <section className={styles.workSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Our Branding Work</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Logos, Ad Films </span>
              <span className="pink_gradient">& Mainline Creatives</span>
            </h2>
            <div className={styles.workGrid}>
              {workImages.map((src, i) => (
                <div key={i} className={styles.workCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className={styles.workImg} loading="lazy" />
                  <div className={styles.workOverlay}>
                    <span className={styles.workPlay}>&#9654; View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className={styles.brandsSection}>
          <div className={styles.sectionInner}>
            <div className="sec_title_wrap for_white_bg">
              <div className="title_top_wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
                <span className="top_title">Our Clients</span>
              </div>
              <h2 className={`${styles.sectionHeading} title black`}>
                <span className="black_gradient">Hear from Those </span>
                <span className="pink_gradient">Who Know Us Best</span>
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
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://realatte.com/images/clientslogo/Mumbai/${n}.png`} alt="" className={styles.brandLogo} width={110} height={40} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
