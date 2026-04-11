import Link from 'next/link'
import styles from '../../styles/components/HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          Real Estate Marketing That Answers To One Number. Your Bookings.
        </div>
        <h1 className={styles.h1}>
          Sold Units Don&apos;t Come<br />From Better Ads.<br />They Come From a<br /><em>Better Engineered Funnel.</em>
        </h1>
        <p className={styles.sub}>
          Most developers are sitting on ₹30–50L in monthly ad spend with no clear answer to the one question
          that matters — <strong>which campaign closed which flat?</strong> We built Property Edge to end that conversation permanently.
        </p>
        <div className={styles.hbtns}>
          <Link href="/contact" className={styles.btnR}>Tear My Funnel Apart. I Want to See Where It Bleeds. →</Link>
          <Link href="/funnelengineering" className={styles.btnG}>Show Me What Funnel Engineering Looks Like</Link>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.stat}>
            <span className={styles.sn}>₹760Cr+</span>
            <span className={styles.sl}>Ad Spend. Every Rupee Tracked.</span>
            <div className={styles.sbar} style={{ width: '92%' }} />
          </div>
          <div className={styles.stat}>
            <span className={styles.sn}>86L+</span>
            <span className={styles.sl}>Conversions. Not Just Clicks.</span>
            <div className={styles.sbar} style={{ width: '78%' }} />
          </div>
          <div className={styles.stat}>
            <span className={styles.sn}>500+</span>
            <span className={styles.sl}>Projects Launched and Sold.</span>
            <div className={styles.sbar} style={{ width: '65%' }} />
          </div>
          <div className={styles.stat}>
            <span className={styles.sn}>25%</span>
            <span className={styles.sl}>CPL Reduction. Delivered.</span>
            <div className={styles.sbar} style={{ width: '55%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}

