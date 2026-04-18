import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/HeroSection.module.css'

const funnelStages = [
  { stage: '01', label: 'Awareness', metric: '2,40,000', unit: 'Impressions', pct: 100 },
  { stage: '02', label: 'Leads Captured', metric: '1,840', unit: 'Leads', pct: 76 },
  { stage: '03', label: 'Qualified', metric: '412', unit: 'Scored', pct: 54 },
  { stage: '04', label: 'Site Visits', metric: '98', unit: 'Visits', pct: 34 },
  { stage: '05', label: 'Bookings', metric: '11', unit: 'Units Closed', pct: 16 },
]

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroGrid} aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
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
              that matters - <strong>which campaign closed which flat?</strong> We built Property Edge to end that conversation permanently.
            </Reveal>

            <Reveal className={styles.hbtns} delay={330}>
              <Link href="/contact" className={styles.btnR}>Tear My Funnel Apart. I Want to See Where It Bleeds. -&gt;</Link>
              <Link href="/funnelengineering" className={styles.btnG}>Show Me What Funnel Engineering Looks Like</Link>
            </Reveal>
          </div>

          <Reveal className={styles.heroVisualWrap} delay={260}>
            <div className={styles.heroVisual}>
              <div className={styles.visualOrbA} aria-hidden="true" />
              <div className={styles.visualOrbB} aria-hidden="true" />
              <div className={styles.funnelDash}>
                <div className={styles.funnelDashHead}>
                  <span className={styles.funnelDashTitle}>Campaign Attribution Report</span>
                  <span className={styles.funnelDashLive}><span className={styles.funnelLiveDot} />Live</span>
                </div>
                <div className={styles.funnelStages}>
                  {funnelStages.map((s, i) => (
                    <div key={s.stage} className={styles.funnelStageRow} style={{ '--fi': i }}>
                      <span className={styles.funnelStageNum}>{s.stage}</span>
                      <div className={styles.funnelStageInfo}>
                        <div className={styles.funnelStageName}>{s.label}</div>
                        <div className={styles.funnelBarWrap}>
                          <div className={styles.funnelBarFill} style={{ '--w': `${s.pct}%` }} />
                        </div>
                      </div>
                      <div className={styles.funnelStageMetric}>
                        <span className={styles.funnelMetricNum}>{s.metric}</span>
                        <span className={styles.funnelMetricUnit}>{s.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.funnelKpiRow}>
                  <div className={styles.funnelKpiChip}>
                    <span className={styles.funnelKpiLabel}>Cost Per Booking</span>
                    <span className={styles.funnelKpiVal}>&#8377;45,000</span>
                  </div>
                  <div className={styles.funnelKpiChip}>
                    <span className={styles.funnelKpiLabel}>Attribution</span>
                    <span className={styles.funnelKpiVal}>100% tracked</span>
                  </div>
                  <div className={styles.funnelKpiChip}>
                    <span className={styles.funnelKpiLabel}>Ad Spend</span>
                    <span className={styles.funnelKpiVal}>&#8377;4.95L</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
