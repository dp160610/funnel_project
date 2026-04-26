import Reveal from '../common/Reveal'
import Link from 'next/link'
import styles from '../../styles/components/BeforeAfterSection.module.css'

const beforeItems = [
  { label: 'Leads come in from multiple sources with no tracking' },
  { label: 'No attribution — no one knows what drove the booking' },
  { label: 'Sales team wastes time on unqualified window shoppers' },
  { label: '80–150× gap between CPL and actual cost-per-booking' },
  { label: 'Leads go cold during the 6–12 week decision cycle' },
  { label: 'Site visits happen by accident, not by design' },
  { label: 'CEO asks "what is marketing doing?" every quarter' },
]

const afterItems = [
  { label: 'Every lead traced to campaign, creative, and channel' },
  { label: 'Full closed-loop attribution from first click to booking' },
  { label: 'AI lead scoring: only >60% probability leads reach closers' },
  { label: 'CPB reduced 20–35% within first 90 days of engagement' },
  { label: 'Automated nurture sequences keep leads warm for 12 weeks' },
  { label: 'Engineered site visit campaigns: 3–5× industry average rate' },
  { label: 'CEO sees exactly which ad sold which flat — in real time' },
]

export default function BeforeAfterSection() {
  return (
    <section className={styles.section}>
      <div className={styles.aura} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal as="div" className={styles.kk}>The Real Difference</Reveal>
        <Reveal as="h2" className={styles.sh} delay={80}>
          Leaky Funnel <em>vs</em><br />
          Engineered Funnel
        </Reveal>
        <Reveal as="p" className={styles.ss} delay={160}>
          Most developers are unknowingly running stage one of a funnel and calling it a full campaign.
        </Reveal>

        <div className={styles.compareGrid}>
          {/* BEFORE */}
          <Reveal className={styles.beforeCol} delay={240}>
            <div className={styles.colHeader}>
              <div className={styles.colBadgeBefore}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Typical Leaky Funnel
              </div>
              <div className={styles.colSubhead}>What most agencies deliver</div>
            </div>
            <ul className={styles.itemList}>
              {beforeItems.map((item, i) => (
                <li key={i} className={styles.beforeItem}>
                  <span className={styles.beforeIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
            <div className={styles.colFooter}>
              <div className={styles.footerStat}>
                <span className={styles.footerStatNum}>80–150×</span>
                <span className={styles.footerStatLabel}>CPL to CPB Gap</span>
              </div>
              <div className={styles.footerNote}>
                The average developer has no idea what their true cost-per-booking is.
              </div>
            </div>
          </Reveal>

          {/* Divider */}
          <Reveal className={styles.vsDivider} delay={300} aria-hidden="true">
            <div className={styles.vsLine} />
            <div className={styles.vsCircle}>VS</div>
            <div className={styles.vsLine} />
          </Reveal>

          {/* AFTER */}
          <Reveal className={styles.afterCol} delay={360}>
            <div className={styles.colHeader}>
              <div className={styles.colBadgeAfter}>
                <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Property Edge Engineered Funnel
              </div>
              <div className={styles.colSubhead}>What we build for our clients</div>
            </div>
            <ul className={styles.itemList}>
              {afterItems.map((item, i) => (
                <li key={i} className={styles.afterItem}>
                  <span className={styles.afterIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
            <div className={styles.colFooter}>
              <div className={styles.footerStat}>
                <span className={styles.footerStatNumGreen}>20–35%</span>
                <span className={styles.footerStatLabel}>CPB Reduction</span>
              </div>
              <Link href="/contact" className={styles.auditBtn}>
                Find My Funnel Leaks — Free 72-Hr Audit →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
