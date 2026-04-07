import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container } from '../components/common'
import styles from '../styles/pages/Portfolio.module.css'

const caseStudies = [
  {
    id: 1,
    title: 'Rustomjee Taps Into Performance Max To Drive Qualified Leads',
    brand: 'RUSTOMJEE',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/09_c56a134e80.jpg',
    slug: 'rustomjee-taps-into-performance-max-to-drive-qualified-leads',
  },
  {
    id: 2,
    title: 'AWFIS — From Lost Leads to High-Intent Clicks',
    brand: 'AWFIS',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/06_7a9a2b03d4.jpg',
    slug: 'awfis',
  },
  {
    id: 3,
    title: 'Brigade Group Engages Global NRI Audience with Taboola',
    brand: 'BRIGADE HOME',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/07_1ae822ac56.jpg',
    slug: 'brigade-group-engages-global-nri-audience-with-taboola',
  },
  {
    id: 4,
    title: 'Brigade Group Taps Influencers to Boost REELs Engagement',
    brand: 'BRIGADE GROUP',
    tag: 'Influence Marketing',
    img: 'https://backend.realatte.com/uploads/11_219942570a.jpg',
    slug: 'brigade-group-taps-influencers-to-boost-ree-ls-engagement',
  },
  {
    id: 5,
    title: 'Atharv Lifestyle Optimizes for the Right Buyer, Right Time',
    brand: 'ATHARV LIFESTYLE',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/02_b879a9b6b0.jpg',
    slug: 'atharv-lifestyle',
  },
  {
    id: 6,
    title: 'Primus Senior Living Finds Its Perfect Audience — 50% Less Cost',
    brand: 'THE WADHWA GROUP',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/02_356fe2f9f1.jpg',
    slug: 'primus-senior-living-finds-its-perfect-audience-50-less-cost-100-more-impact',
  },
  {
    id: 7,
    title: 'Piramal Realty Boosts High-Quality Leads by 30% Using Taboola Motion Ads',
    brand: 'PIRAMAL REALTY',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/08_521a67d699.jpg',
    slug: 'piramal-realty-boosts-high-quality-leads-by-30-using-taboola-motion-ads',
  },
  {
    id: 8,
    title: 'Puraniks Drives Awareness & Conversions with YouTube for Action',
    brand: 'PURANICS',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/03_20948a00b7.jpg',
    slug: 'puraniks-drives-awareness-and-conversions-with-you-tube-for-action',
  },
  {
    id: 9,
    title: 'M3M Scales Search Visibility Using YouTube Masthead + Discovery & Display',
    brand: 'M3M',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/04_80c3881f40.jpg',
    slug: 'm3-m-scales-search-visibility-using-you-tube-masthead-discovery-and-display',
  },
  {
    id: 10,
    title: 'Hiranandani Communities Cuts CPL by 25% with Meta CAPI',
    brand: 'HIRANANDANI',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/06_f7ee2161c2.jpg',
    slug: 'hiranandani-communities-cuts-cpl-by-25-with-meta-capi',
  },
  {
    id: 11,
    title: 'Smartworld Boosts Conversions by 30% with CAPI Configured Events',
    brand: 'SMART WORLD',
    tag: 'Performance Marketing',
    img: 'https://backend.realatte.com/uploads/05_34dce22160.jpg',
    slug: 'smartworld-boosts-conversions-by-30-with-capi-configured-events',
  },
  {
    id: 12,
    title: 'Abil Group — 325% More Impressions, 238% More Clicks',
    brand: 'ABIL GROUP',
    tag: 'SEO',
    img: 'https://backend.realatte.com/uploads/01_eb5798aee5.jpg',
    slug: 'abil-group',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <NextSeo
        title="Our Work - Property Edge"
        description="Explore our successful real estate marketing campaigns and case studies. See how we've driven results for premium residential and commercial projects."
      />
      
      <Header />
      
      <main>
        <section className={styles.hero}>
          <Container>
            <h1 className={styles.title}>Our Work</h1>
            <p className={styles.subtitle}>Industry-leading results across residential, commercial, and luxury projects</p>
          </Container>
        </section>

        <section className={styles.casesGrid}>
          <Container>
            <div className={styles.grid}>
              {caseStudies.map((c) => (
                <Link
                  key={c.id}
                  href={`https://realatte.com/case-studies/${c.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.caseCard}
                >
                  <div className={styles.imgWrap}>
                    <img src={c.img} alt={c.title} className={styles.cardImg} />
                  </div>
                  <div className={styles.cardBody}>
                    <span className={styles.badge}>{c.tag}</span>
                    <h3 className={styles.caseTitle}>{c.title}</h3>
                    <p className={styles.cardBrand}>{c.brand}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
