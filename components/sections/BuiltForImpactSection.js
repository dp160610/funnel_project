import Link from 'next/link'
import styles from '../../styles/components/BuiltForImpactSection.module.css'

export default function BuiltForImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        {/* Section title */}
        <div className={`${styles.secTitleWrap} ${styles.center} ${styles.forWhiteBg}`}>
          <div className={styles.titleTopWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://realatte.com/images/headericon.svg"
              alt=""
              className={styles.logoGap}
              width={28}
              height={12}
            />
            <h2 className={styles.topTitle}>Built For Closings</h2>
          </div>
          <h1 className={styles.title}>
            <span className="black_gradient">Strategy, Storytelling, Scale — every</span>{' '}
            <span className="pink_gradient">developer</span>
            <span className="black_gradient">, every </span>
            <span className="pink_gradient">launch</span>
            <span className="black_gradient">, every </span>
            <span className="pink_gradient">unit, sold</span>
          </h1>
        </div>

        {/* Description */}
        <p className={styles.expertTxt}>
          Real estate is not just property — it&apos;s people&apos;s biggest life decision. We treat every campaign with that weight. From brand identity that commands trust to data-led performance marketing that fills booking pipelines, Property Edge is the growth partner serious developers choose when they need results — not reports.
        </p>

        {/* Counter stats */}
        <div className={styles.counterWrap}>
          <div className={styles.counterRow}>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>800+</h2>
              <p className={styles.counterTxt}>Projects Delivered</p>
            </div>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>320+</h2>
              <p className={styles.counterTxt}>Growth Experts</p>
            </div>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>600+ Cr</h2>
              <p className={styles.counterTxt}>Ad Spend Managed</p>
            </div>
          </div>
        </div>

        {/* Know More CTA */}
        <div className={styles.ctaWrap}>
          <Link href="/about" className={styles.primaryCta}>
            <span className={styles.colorWrap}>
              <span className={styles.txtColor}>Discover Our Approach →</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}