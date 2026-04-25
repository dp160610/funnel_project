import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
      <div className={styles.heroBgOverlay} />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroLayout}>

          {/* ── Left copy ─── */}
          <div className={styles.heroCopy}>
            <Reveal className={styles.badgeWrap}>
              <div className={styles.badge}>
                <span className={styles.badgeDot} />
                Real Estate Marketing That Earns One Thing First. Your Trust.
              </div>
            </Reveal>

            <Reveal as="h1" className={styles.h1} delay={70}>
              Sold Units Don&apos;t Come<br />From Better Ads.<br />They Come From a<br /><em>Better Funnel Engineering.</em>
            </Reveal>

            <Reveal as="p" className={styles.sub} delay={190}>
              Most developers are sitting on &#8377;30-50L in monthly ad spend with no clear answer to the one question
              that matters — <strong>which campaign closed which flat?</strong> We built Property Edge to end that conversation permanently.
            </Reveal>

            <Reveal className={styles.hbtns} delay={330}>
              <Link href="/contact" className={styles.btnR}>
                Tear My Funnel Apart. I Want to See Where It Bleeds. →
              </Link>
              <Link href="/funnelengineering" className={styles.btnG}>
                Show Me What Funnel Engineering Looks Like
              </Link>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  )
}
