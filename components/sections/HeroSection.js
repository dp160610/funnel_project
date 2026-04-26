import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/HeroSection.module.css'

const visualRows = [
  ['01', 'Demand', '100%', 'Awareness'],
  ['02', 'Leads', '64%', 'Acquisition'],
  ['03', 'Qualified', '38%', 'Scoring'],
  ['04', 'Site Visits', '19%', 'Conversion'],
  ['05', 'Bookings', '8%', 'Revenue'],
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className={styles.heroBgImg} />
      <div className={styles.heroBgOverlay} />
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.heroLayout}>
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
              that matters &mdash; <strong>which campaign closed which flat?</strong> We built Property Edge to end that conversation permanently.
            </Reveal>

            <Reveal className={styles.hbtns} delay={330}>
              <Link href="/contact" className={styles.btnR}>
                Tear My Funnel Apart. I Want to See Where It Bleeds. &rarr;
              </Link>
              <Link href="/funnelengineering" className={styles.btnG}>
                Show Me What Funnel Engineering Looks Like
              </Link>
            </Reveal>

            <Reveal className={styles.statsRow} delay={480}>
              <div className={styles.stat}>
                <div className={styles.statGlow} aria-hidden="true" />
                <span className={styles.sn}>72hr</span>
                <span className={styles.sl}>Funnel audit<br />turnaround</span>
                <span className={styles.sbar} style={{ width: '100%' }} />
              </div>
              <div className={styles.stat}>
                <div className={styles.statGlow} aria-hidden="true" />
                <span className={styles.sn}>80&ndash;150&times;</span>
                <span className={styles.sl}>Industry avg<br />CPB vs CPL</span>
                <span className={styles.sbar} style={{ width: '78%' }} />
              </div>
              <div className={styles.stat}>
                <div className={styles.statGlow} aria-hidden="true" />
                <span className={styles.sn}>20&ndash;35%</span>
                <span className={styles.sl}>CPB reduction<br />with attribution</span>
                <span className={styles.sbar} style={{ width: '62%' }} />
              </div>
              <div className={styles.stat}>
                <div className={styles.statGlow} aria-hidden="true" />
                <span className={styles.sn}>2&times;</span>
                <span className={styles.sl}>Close rate with<br />lead scoring</span>
                <span className={styles.sbar} style={{ width: '50%' }} />
              </div>
            </Reveal>
          </div>

          <Reveal className={styles.heroVisualWrap} delay={260}>
            <div className={styles.heroVisual} aria-label="Funnel engineering performance dashboard">
              <div className={styles.visualFrame}>
                <div className={styles.visualTopline}>
                  <span>Live Funnel Map</span>
                  <strong>Booking Attribution</strong>
                </div>
                <div className={styles.visualBoard}>
                  {visualRows.map(([num, name, width, label]) => (
                    <div key={num} className={styles.visualRow} style={{ '--w': width }}>
                      <span className={styles.visualNum}>{num}</span>
                      <span className={styles.visualName}>{name}</span>
                      <span className={styles.visualTrack}><span /></span>
                      <span className={styles.visualLabel}>{label}</span>
                    </div>
                  ))}
                </div>
                <div className={styles.visualFooter}>
                  <div>
                    <span>Cost Per Booking</span>
                    <strong>Tracked</strong>
                  </div>
                  <div>
                    <span>Lead Scoring</span>
                    <strong>Active</strong>
                  </div>
                </div>
              </div>
              <div className={styles.orbitCardA}>
                <span>72hr</span>
                <strong>Funnel audit turnaround</strong>
              </div>
              <div className={styles.orbitCardB}>
                <span>20&ndash;35%</span>
                <strong>CPB reduction with attribution</strong>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
