import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/ServicePage.module.css'

const hampers = [
  {
    name: 'SHRISHTI',
    price: '₹ 1,960',
    includes: 'Triple Urli Candles, Laddoos, and Golden Tea-Light for a refined Puja Table',
    img: 'https://realatte.com/images/hampers/img1.webp',
  },
  {
    name: 'PAVITRA',
    price: '₹ 2,950',
    includes: 'An abundant hamper overflowing with Nuts, Chocolates, and Festive Decor',
    img: 'https://realatte.com/images/hampers/img2.webp',
  },
  {
    name: 'TEJASVI',
    price: '₹ 1,534',
    includes: 'A rich fusion of premium Barks and indulgent Candles',
    img: 'https://realatte.com/images/hampers/img3.webp',
  },
  {
    name: 'MANGALMAY',
    price: '₹ 4,480',
    includes: 'The ultimate Puja Set — Diyas, Dhoop, and Ghee Melts in one exquisite package',
    img: 'https://realatte.com/images/hampers/img4.webp',
  },
  {
    name: 'SHUBH ARAMBH',
    price: '₹ 3,920',
    includes: 'A deluxe collection — Mats, Coasters, Runner, and Lotus Diya Holder',
    img: 'https://realatte.com/images/hampers/img5.webp',
  },
  {
    name: 'SAMRIDDHI',
    price: '₹ 1,829',
    includes: 'Traditional Namkeen Jars paired with a Votive Candle for serene ambience',
    img: 'https://realatte.com/images/hampers/img6.webp',
  },
]

const categories = ['ALL', 'CHANNEL PARTNER MEETS', 'FESTIVE GIVEAWAYS', 'MILESTONE EVENTS', 'NEW HOMEOWNER WELCOMES', 'PROJECT LAUNCH CELEBRATIONS', 'VIP CLIENT GIFTING']

export default function GiftingPage() {
  return (
    <>
      <NextSeo
        title="Gifting - Property Edge"
        description="Beyond just a gift, it's a statement of appreciation and excellence. Thoughtfully curated hampers that celebrate new beginnings and strengthen valuable partnerships."
        canonical="https://propertyedge.com/gifting"
      />

      <Header />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
          <div className={styles.heroBgOverlay} />
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              <span className="white_gradient">Beyond Being</span>{' '}
              <span className="pink_gradient">Just a Gift</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', lineHeight: '1.7' }}>
              Beyond just a gift, it&apos;s a statement of appreciation and excellence. Thoughtfully curated hampers that celebrate new beginnings and strengthen valuable partnerships.
            </p>
            <Link href="/contact" className={styles.heroCta}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.ctaIcon} />
              Let&apos;s Talk Real Estate
            </Link>
          </div>
        </section>

        {/* Overview */}
        <section className={`${styles.overviewSection} ${styles.lightSection}`}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">The Art of Gifting</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Real Estate Gifting </span>
              <span className="pink_gradient">Purposefully Curated</span>
            </h2>
            <div className={styles.overviewGrid}>
              <p className={styles.overviewDesc}>
                Every property transaction is a milestone worth celebrating. From channel partner meets to new homeowner welcomes, our curated hampers are designed to leave a lasting impression. Each item is handpicked for its exceptional quality and aesthetic appeal — because your relationships deserve nothing less than perfection.
              </p>
              <div className={styles.overviewImageGrid}>
                {['img1', 'img2', 'img3', 'img4'].map((img) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={img} src={`https://realatte.com/images/hampers/${img}.webp`} alt="" className={styles.overviewImg} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Curated Collections */}
        <section className={styles.servicesSection}>
          <div className={styles.sectionInner}>
            <div className="title_top_wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
              <span className="top_title">Curated Collections</span>
            </div>
            <h2 className={styles.sectionHeading}>
              <span className="white_gradient">Hampers for </span>
              <span className="pink_gradient">Every Occasion</span>
            </h2>

            {/* Category tabs */}
            <div className={styles.workTabs} style={{ marginTop: '32px' }}>
              {categories.map((cat, i) => (
                <button key={i} className={`${styles.workTab} ${i === 0 ? styles.activeTab : ''}`} type="button">
                  {cat}
                </button>
              ))}
            </div>

            <div className={styles.servicesGrid}>
              {hampers.map((h, i) => (
                <div key={i} className={styles.serviceCard}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.img} alt={h.name} className={styles.serviceImg} loading="lazy" />
                  <div className={styles.serviceCardBody}>
                    <h3 className={styles.serviceCardTitle}>{h.name} — {h.price}</h3>
                    <p className={styles.serviceCardDesc}>Includes: {h.includes}</p>
                    <Link href="/contact" style={{ display: 'inline-block', marginTop: '12px', padding: '8px 20px', background: '#C8102E', fontSize: '12px', fontWeight: 700, color: '#fff' }}>
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.pageFinalCta}>
          <div className={styles.pageFinalInner}>
            <div className={styles.pageFinalLeft}>
              <div className={styles.pageFinalKk}>#GiftsByPropertyEdge</div>
              <div className={styles.pageFinalBig}>Property Edge</div>
              <h2 className={styles.pageFinalH2}>Craft Your Signature Hamper.</h2>
              <p className={styles.pageFinalDesc}>From intimate site visits to landmark launches — every occasion deserves a gift that tells your story. Let us curate it for you.</p>
              <div className={styles.pageFinalBtns}>
                <Link href="/contact" className={styles.pageFinalBtnW}>Order a Custom Hamper →</Link>
                <Link href="/contact" className={styles.pageFinalBtnO}>Browse Collections</Link>
              </div>
              <p className={styles.pageFinalFine}>Bulk orders welcome. Delivered pan-India with bespoke packaging.</p>
            </div>
            <div className={styles.pageFinalBadge}>
              <span className={styles.pageFinalBadgeN}>500+</span>
              <div className={styles.pageFinalBadgeL}>Hampers<br />Delivered</div>
              <div className={styles.pageFinalBadgeD}>Across property events pan-India</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
