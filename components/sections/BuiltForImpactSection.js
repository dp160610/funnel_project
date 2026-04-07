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
            <h2 className={styles.topTitle}>Built For Impact</h2>
          </div>
          <h1 className={styles.title}>
            <span className="black_gradient">Branding, Performance, Strategy - every</span>{' '}
            <span className="pink_gradient">click</span>
            <span className="black_gradient">, every </span>
            <span className="pink_gradient">lead</span>
            <span className="black_gradient">, every </span>
            <span className="pink_gradient">sale, mastered</span>
          </h1>
        </div>

        {/* Description */}
        <p className={styles.expertTxt}>
         When it comes to real estate, we don’t just market, we dominate. From razor-sharp branding to high-converting performance campaigns, we turn clicks into leads and leads into sold-out projects. SEO, SEM, Social, Creatives, Strategy, we do it all, and we do it best.
        </p>

        {/* Counter stats */}
        <div className={styles.counterWrap}>
          <div className={styles.counterRow}>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>1,200+</h2>
              <p className={styles.counterTxt}>Projects Launched</p>
            </div>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>550+</h2>
              <p className={styles.counterTxt}>Team Members</p>
            </div>
            <div className={styles.counterBox}>
              <h2 className={styles.counterTitle}>900+ Cr</h2>
              <p className={styles.counterTxt}>Of Digital Spends</p>
            </div>
          </div>
        </div>

        {/* Know More CTA */}
        <div className={styles.ctaWrap}>
          <Link href="/about" className={styles.primaryCta}>
            <span className={styles.colorWrap}>
              <span className={styles.txtColor}>Know More →</span>
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}
