import Reveal from '../common/Reveal'
import styles from '../../styles/components/TestimonialsSection.module.css'

const testimonials = [
  {
    name: 'Deepak Mehta',
    role: 'VP Marketing',
    company: 'Lodha Palava',
    city: 'Mumbai',
    initials: 'DM',
    accentColor: '#1a4dc7',
    result: '−31% CPB',
    resultDetail: 'Cost-per-booking reduction in 90 days',
    quote: 'We had three agencies before Property Edge. The difference is attribution — they can tell you exactly which creative sold which flat. Our MD stopped asking "is marketing working?" within the first month.',
    metrics: [
      { value: '31%', label: 'CPB Reduction' },
      { value: '2.4×', label: 'Close Rate' },
      { value: '90 days', label: 'To Results' },
    ],
  },
  {
    name: 'Priya Nair',
    role: 'Head of Sales',
    company: 'Prestige Estates',
    city: 'Bengaluru',
    initials: 'PN',
    accentColor: '#9B0015',
    result: '2× Close Rate',
    resultDetail: 'After AI lead scoring implementation',
    quote: 'Lead scoring changed everything for my team. We stopped wasting site visits on window shoppers. Every lead that comes to us now has already been ranked, profiled, and pre-qualified. Our closers only talk to buyers.',
    metrics: [
      { value: '2×', label: 'Close Rate' },
      { value: '68%', label: 'Less Waste' },
      { value: '₹12 Cr', label: 'Extra Revenue' },
    ],
  },
  {
    name: 'Rahul Agarwal',
    role: 'Director, Sales & Marketing',
    company: 'Godrej Properties',
    city: 'Pune',
    initials: 'RA',
    accentColor: '#1e7e34',
    result: '3.8× Site Visits',
    resultDetail: 'From engineered site visit campaigns',
    quote: 'The 72-hour audit they gave us was more insightful than six months of internal review. Within a week we had a full funnel plan. Three months later, our site visit volume was almost four times what it was — with better quality buyers.',
    metrics: [
      { value: '3.8×', label: 'Site Visit Rate' },
      { value: '28%', label: 'Lower CPL' },
      { value: '6 wks', label: 'To Full Funnel' },
    ],
  },
]

export default function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.aura} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal as="div" className={styles.kk}>Client Results</Reveal>
        <Reveal as="h2" className={styles.sh} delay={80}>
          What Changes When the Funnel<br />
          <em>Is Actually Engineered</em>
        </Reveal>
        <Reveal as="p" className={styles.ss} delay={160}>
          Three developers. Three cities. Three measurable outcomes — all within 90 days of engagement.
        </Reveal>

        <div className={styles.cardsGrid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} className={styles.card} delay={260 + i * 100}>
              {/* Result badge */}
              <div className={styles.resultBadge}>
                <span className={styles.resultValue}>{t.result}</span>
                <span className={styles.resultDetail}>{t.resultDetail}</span>
              </div>

              {/* Quote */}
              <blockquote className={styles.quote}>
                <span className={styles.qMark} aria-hidden="true">&ldquo;</span>
                {t.quote}
              </blockquote>

              {/* Metrics strip */}
              <div className={styles.metricsRow}>
                {t.metrics.map((m) => (
                  <div key={m.label} className={styles.metric}>
                    <span className={styles.metricVal}>{m.value}</span>
                    <span className={styles.metricLabel}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className={styles.author}>
                <div
                  className={styles.avatar}
                  style={{ '--avatar-color': t.accentColor }}
                  aria-label={t.name}
                >
                  {t.initials}
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{t.name}</div>
                  <div className={styles.authorRole}>{t.role}, {t.company}</div>
                  <div className={styles.authorCity}>{t.city}</div>
                </div>
                <div className={styles.verifiedBadge} title="Verified client">
                  <svg viewBox="0 0 24 24" fill="none" width="14" height="14">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Verified
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Social proof strip */}
        <Reveal className={styles.proofStrip} delay={560}>
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>50+</span>
            <span className={styles.proofLabel}>Projects Delivered</span>
          </div>
          <div className={styles.proofDivider} aria-hidden="true" />
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>₹4,200 Cr+</span>
            <span className={styles.proofLabel}>Revenue Attributed</span>
          </div>
          <div className={styles.proofDivider} aria-hidden="true" />
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>12</span>
            <span className={styles.proofLabel}>Cities Across India</span>
          </div>
          <div className={styles.proofDivider} aria-hidden="true" />
          <div className={styles.proofItem}>
            <span className={styles.proofNum}>4.9 / 5</span>
            <span className={styles.proofLabel}>Average NPS Score</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
