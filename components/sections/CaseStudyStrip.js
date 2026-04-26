import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/CaseStudyStrip.module.css'

const cases = [
  {
    project: 'Prestige Waterford',
    city: 'Bengaluru',
    tag: 'Luxury High-rise',
    result: '₹240 Cr',
    metric: 'Revenue in 4 months',
    change: '−28% CPB',
    changeLabel: 'vs previous campaign',
  },
  {
    project: 'Lodha Palava City',
    city: 'Mumbai',
    tag: 'Township',
    result: '2.4×',
    metric: 'Close rate improvement',
    change: '+3.1× Site Visits',
    changeLabel: 'via engineered campaigns',
  },
  {
    project: 'Godrej Horizon',
    city: 'Pune',
    tag: 'Integrated Township',
    result: '₹0 wasted',
    metric: 'On unqualified leads',
    change: '100% Attribution',
    changeLabel: 'closed-loop tracking',
  },
  {
    project: 'Sobha Dream Acres',
    city: 'Bengaluru',
    tag: 'Affordable Luxury',
    result: '6 weeks',
    metric: 'To full funnel deployment',
    change: '−35% CPB',
    changeLabel: 'within first quarter',
  },
]

export default function CaseStudyStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.topRow}>
          <Reveal as="div" className={styles.kk}>
            <span>Proof of Work</span>
          </Reveal>
          <Reveal delay={100}>
            <Link href="/portfolio" className={styles.viewAll}>
              View All Case Studies →
            </Link>
          </Reveal>
        </div>
        <div className={styles.strip}>
          {cases.map((c, i) => (
            <Reveal key={c.project} className={styles.caseCard} delay={180 + i * 70}>
              <div className={styles.caseTop}>
                <div className={styles.caseTag}>{c.tag}</div>
                <div className={styles.caseCity}>{c.city}</div>
              </div>
              <div className={styles.caseProject}>{c.project}</div>
              <div className={styles.caseResult}>{c.result}</div>
              <div className={styles.caseMetric}>{c.metric}</div>
              <div className={styles.caseDivider} />
              <div className={styles.caseChange}>{c.change}</div>
              <div className={styles.caseChangeLabel}>{c.changeLabel}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
