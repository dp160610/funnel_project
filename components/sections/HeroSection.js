import Link from 'next/link'
import styles from '../../styles/components/HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContentWrap}>
        <div className={styles.container}>
          <div className={styles.heroRow}>
            {/* LEFT COLUMN — text content */}
            <div className={styles.heroLeft}>
              <div className={styles.homeBannerWrap}>
                <h2 className={styles.homeBannerTitle}>
                  <span className="white_gradient">Sit Back, Sell Out, And Let Us Own Your</span>{' '}
                  <span className="pink_gradient">Digital Game</span>
                </h2>
                <div className={styles.subTitleWrap}>
                  <h3 className={styles.homeSubTitle}>#1 Digital Marketing Agency For Real Estate</h3>
                </div>
                <p className={styles.bannerTxt}>
                  From crafting a powerhouse brand identity to executing high-impact performance
                  marketing, we handle every click, lead, and sale with precision, so you don&apos;t have to.
                </p>
                <Link href="/contact" className={styles.primaryCta}>
                  <span className={styles.ctaColorWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://realatte.com/images/cta_icon.png" alt="" width={24} height={10} className={styles.ctaIcon} />
                    <span className={styles.ctaTxtColor}>Let&apos;s Talk Real Estate</span>
                  </span>
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN — autoplay video */}
            <div className={styles.heroRight}>
              <video
                className={styles.bannerVideo}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                src="https://backend.realatte.com/uploads/videobanner2_603c643007.mp4"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.glowBox} />
    </section>
  )
}
