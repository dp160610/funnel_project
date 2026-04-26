import styles from '../../styles/components/ServicesSection.module.css'

const stages = [
  {
    id: 'tofu',
    step: '01',
    label: 'Stage 01 — ToFu',
    name: 'Demand Generation',
    desc: 'Building brand salience with in-market buyers before they enter active search. Video, display, and social reach campaigns engineered for maximum relevant impressions.',
    tags: ['Meta Reach', 'YouTube Pre-Roll', 'Programmatic Display', 'OOH'],
    metric: '₹18–35',
    metricLabel: 'Cost Per Click',
  },
  {
    id: 'mofu',
    step: '02',
    label: 'Stage 02 — MoFu',
    name: 'Lead Acquisition',
    desc: 'Converting warm awareness into captured intent. High-intent lead gen forms, conversion-optimised landing pages, and search campaigns targeting buyers actively comparing options.',
    tags: ['Google Search', 'Meta Lead Gen', 'Dynamic Landing Pages', 'A/B Testing'],
    metric: '₹190–800',
    metricLabel: 'Cost Per Lead',
  },
  {
    id: 'qualify',
    step: '03',
    label: 'Stage 03 — Qualification',
    name: 'Intent Scoring & Filtering',
    desc: "Not every lead is a buyer. We deploy behavioural scoring models, CRM integrations, and intelligent drip sequences to surface only sales-ready prospects to your team.",
    tags: ['Lead Scoring', 'CRM Integration', 'Drip Sequences', 'Suppression Logic'],
    metric: '₹500–1,400',
    metricLabel: 'Qualified Lead',
  },
  {
    id: 'bofu',
    step: '04',
    label: 'Stage 04 — BoFu',
    name: 'Site Visit Conversion',
    desc: 'Getting a qualified prospect from their screen to your sales floor. Retargeting, WhatsApp automation, personalised offer overlays, and geo-fencing around your site office.',
    tags: ['Dynamic Retargeting', 'WhatsApp Automation', 'Geo-Fencing', 'Offer Engineering'],
    metric: '₹1,300–3,500',
    metricLabel: 'Cost Per Visit',
  },
  {
    id: 'closure',
    step: '05',
    label: 'Stage 05 — Closure',
    name: 'Booking & Revenue',
    desc: 'The only metric that pays salaries. We track every booking back to its originating ad, audience, creative, and platform — then reinvest only into what actually closes deals.',
    tags: ['Booking Attribution', 'Closing Loop Tracking', 'Post-Visit Nurture', 'Revenue Analytics'],
    metric: '₹25K–80K',
    metricLabel: 'Cost Per Booking',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kk}>The Full Funnel Architecture</div>
        <h2 className={styles.sh}>
          Five Stages. Every One<br /><em>Engineered &amp; Accountable.</em>
        </h2>
        <p className={styles.ss}>
          Most budgets die between awareness and closure because no one owns the middle. We map every stage, instrument every handoff, and have a specific strategy — and a specific cost benchmark — for each one.
        </p>

        <div className={styles.pipeline}>
          {stages.map((stage, i) => (
            <div key={stage.id} className={styles.stage}>
              <div className={styles.stageNumWrap}>
                <span className={styles.stageGhostNum} aria-hidden="true">{stage.step}</span>
                <span className={styles.stageNum}>{stage.step}</span>
              </div>
              <div className={styles.stageContent}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

