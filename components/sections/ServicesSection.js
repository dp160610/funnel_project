import styles from '../../styles/components/ServicesSection.module.css'

const stages = [
  {
    id: 'tofu',
    step: '01',
    label: 'ToFu — Awareness',
    name: 'Brand Visibility at Scale',
    desc: 'Build awareness before buyers even start searching. Through hyper-targeted placements and compelling creative, we make your project the obvious first choice.',
    tags: ['Meta Ads', 'YouTube Pre-Roll', 'Programmatic', 'OOH', 'Influencer'],
    metric: '₹8–15',
    metricLabel: 'Avg CPM',
  },
  {
    id: 'mofu',
    step: '02',
    label: 'MoFu — Nurture',
    name: 'Intent Qualification & Engagement',
    desc: 'Interested buyers need the right nudge at the right moment. We keep your project top of mind and guide warm leads toward the all-important site visit.',
    tags: ['Retargeting', 'WhatsApp Sequences', 'Landing Pages', 'Google Maps'],
    metric: '₹120–280',
    metricLabel: 'Avg CPL',
  },
  {
    id: 'bofu',
    step: '03',
    label: 'BoFu — Conversion',
    name: 'Lead to Site Visit Conversion',
    desc: 'This is where strategy meets revenue. We identify the highest-intent prospects and engineer every touchpoint to push them across the finish line.',
    tags: ['Lead Scoring', 'Priority Calling', 'SMS Nudges', 'Sales Blitz'],
    metric: '32–48%',
    metricLabel: 'SV Rate',
  },
  {
    id: 'sv',
    step: '04',
    label: 'SV → Closure',
    name: 'Site Visit to Booking',
    desc: 'The visit happened. Now we close it. CRM automation, follow-up sequences, and re-targeting keep your project top-of-mind until the booking is signed.',
    tags: ['CRM Automation', 'WhatsApp Drips', 'Sales Enablement', 'Attribution'],
    metric: '18–28%',
    metricLabel: 'Close Rate',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kk}>Funnel Engineering</div>
        <h2 className={styles.sh}>
          Every Stage Engineered.<br /><em>Every Rupee Accounted For.</em>
        </h2>
        <p className={styles.ss}>
          We don&apos;t run campaigns. We build buyer journeys — from anonymous impression to signed booking — as a single connected system where every stage feeds the next.
        </p>
        <div className={styles.pipeline}>
          {stages.map((stage, i) => (
            <div key={stage.id} className={styles.stage}>
              <div className={styles.stageLeft}>
                <div className={styles.stageLabel}>{stage.label}</div>
                <div className={styles.stageName}>{stage.name}</div>
                <div className={styles.stageDesc}>{stage.desc}</div>
                <div className={styles.tags}>
                  {stage.tags.map((t) => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
              <div className={styles.stageMetric}>
                <div className={styles.mVal}>{stage.metric}</div>
                <div className={styles.mLabel}>{stage.metricLabel}</div>
              </div>
              {i < stages.length - 1 && <div className={styles.arrow}>↓</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

