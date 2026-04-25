import Link from 'next/link'
import styles from '../../styles/components/CaseStudiesSection.module.css'

const cases = [
  {
    id: 1,
    title: 'How Performance Max Tripled Qualified Leads for a Mumbai Launch',
    brand: 'SKYLINE REALTY',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/09_c56a134e80.jpg',
    slug: 'skyline-realty-performance-max',
  },
  {
    id: 2,
    title: 'From Zero Organic to 14,000 Monthly Visitors in 8 Months',
    brand: 'GREENVIEW HOMES',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/06_7a9a2b03d4.jpg',
    slug: 'greenview-homes-seo',
  },
  {
    id: 3,
    title: 'NRI Buyer Acquisition: 40% Lower CPL with Programmatic Display',
    brand: 'PRESTIGE TOWERS',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/07_1ae822ac56.jpg',
    slug: 'prestige-towers-nri-campaign',
  },
  {
    id: 4,
    title: 'Creator-Led Reel Strategy That Drove 2.1M Views — and 300 Site Visits',
    brand: 'URBANRISE GROUP',
    tag: 'Influence Marketing',
    img: 'https://backend.realatte.com/uploads/11_219942570a.jpg',
    slug: 'urbanrise-group-reel-influence',
  },
  {
    id: 5,
    title: 'Hyper-Local SEO Strategy Captures Ready-to-Buy Suburban Audience',
    brand: 'MEADOW ESTATES',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/02_b879a9b6b0.jpg',
    slug: 'meadow-estates-local-seo',
  },
  {
    id: 6,
    title: 'Senior Living Project Sells Out in 90 Days with Precision Targeting',
    brand: 'SERENE LIVING',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/02_356fe2f9f1.jpg',
    slug: 'serene-living-90-day-sellout',
  },
  {
    id: 7,
    title: 'Motion Ads on Taboola Lift High-Intent Leads by 35% for Luxury Project',
    brand: 'CROWN HEIGHTS',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/08_521a67d699.jpg',
    slug: 'crown-heights-taboola-motion',
  },
  {
    id: 8,
    title: 'YouTube for Action Campaign Generates 800 Bookings in One Quarter',
    brand: 'PINNACLE HOMES',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/03_20948a00b7.jpg',
    slug: 'pinnacle-homes-youtube-action',
  },
  {
    id: 9,
    title: 'Full-Funnel Search Strategy Cuts Cost Per Booking by 28%',
    brand: 'VERTEX REALTY',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/04_80c3881f40.jpg',
    slug: 'vertex-realty-search-funnel',
  },
  {
    id: 10,
    title: 'Meta CAPI Integration Slashes Wasted Spend by 22% in 60 Days',
    brand: 'HORIZON DEVELOPERS',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/06_f7ee2161c2.jpg',
    slug: 'horizon-developers-meta-capi',
  },
  {
    id: 11,
    title: 'Conversion Event Optimisation Drives 32% Booking Uplift',
    brand: 'NOVA LIVING',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/05_34dce22160.jpg',
    slug: 'nova-living-conversion-events',
  },
  {
    id: 12,
    title: 'Technical SEO Overhaul Results in 290% Impression Growth in 6 Months',
    brand: 'APEX REAL ESTATE',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/01_eb5798aee5.jpg',
    slug: 'apex-real-estate-seo',
  },
]

export default function CaseStudiesSection() {
  const featured = cases[0]
  const stackPair = cases.slice(1, 3)
  const tileRow = cases.slice(3, 7)
  const filmReel = cases.slice(7)

  return (
    <section id="cases" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="sec_title_wrap for_white_bg">
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Results We&apos;ve Delivered</span>
            </div>
          </div>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>
              <span className="black_gradient">Our </span>
              <span className="pink_gradient">Case Studies</span>
            </h2>
            <Link href="/portfolio" className={styles.viewAll}>View All &rarr;</Link>
          </div>
          <p className={styles.subheading}>Real campaigns. Real numbers. Real developers who trusted us and sold out.</p>
        </div>

        {/* Editorial Top: Featured (large) + 2 stacked */}
        <div className={styles.editorialTop}>
          <Link href={`/portfolio/${featured.slug}`} className={styles.featureHero}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={featured.img} alt={featured.title} className={styles.heroImg} />
            <div className={styles.heroOverlay}>
              <span className={styles.heroCaseTag}>{featured.tag}</span>
              <h3 className={styles.heroCaseTitle}>{featured.title}</h3>
              <span className={styles.heroCaseBrand}>{featured.brand}</span>
            </div>
          </Link>
          <div className={styles.stackCol}>
            {stackPair.map((c) => (
              <Link key={c.id} href={`/portfolio/${c.slug}`} className={styles.stackCase}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} className={styles.stackImg} />
                <div className={styles.stackOverlay}>
                  <span className={styles.stackTag}>{c.tag}</span>
                  <h4 className={styles.stackTitle}>{c.title}</h4>
                  <span className={styles.stackBrand}>{c.brand}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tile row: 4 equal tiles */}
        <div className={styles.tileRow}>
          {tileRow.map((c) => (
            <Link key={c.id} href={`/portfolio/${c.slug}`} className={styles.tile}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.title} className={styles.tileImg} />
              <div className={styles.tileOverlay}>
                <span className={styles.tileTag}>{c.tag}</span>
                <h4 className={styles.tileTitle}>{c.title}</h4>
                <span className={styles.tileBrand}>{c.brand}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Film reel: horizontal scroll for remaining */}
        <div className={styles.reelWrap}>
          <div className={styles.reelTrack}>
            {filmReel.map((c) => (
              <Link key={c.id} href={`/portfolio/${c.slug}`} className={styles.reelCase}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} className={styles.reelImg} />
                <div className={styles.reelOverlay}>
                  <span className={styles.reelTag}>{c.tag}</span>
                  <h4 className={styles.reelTitle}>{c.title}</h4>
                  <span className={styles.reelBrand}>{c.brand}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


