import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/HowItWorksSection.module.css'

const steps = [
  {
    num: '01',
    phase: 'Awareness',
    title: 'Build the Brand Before the Campaign',
    desc: 'We establish category presence — branding, OOH, creator seeding, organic SEO — so your project is the one buyers already know when paid ads find them.',
    metric: 'CPL drops 25–40% when brand is established first.',
    img: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: '02',
    phase: 'Performance',
    title: 'Run Campaigns Wired to Booking Data',
    desc: 'Meta, Google, and programmatic campaigns with closed-loop attribution from day one. Every rupee tracked to a campaign, a creative, and ultimately a booking.',
    metric: 'Full attribution reduces wasted spend by 20–35%.',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
  },
  {
    num: '03',
    phase: 'Lead Scoring',
    title: 'Filter Intent Before It Reaches Your Team',
    desc: 'Proprietary lead scoring ranks every inquiry by budget signal, project match, and engagement depth. Your closers only see leads with a >60% booking probability.',
    metric: 'Lead scoring consistently doubles close rates.',
    img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: '04',
    phase: 'Nurture',
    title: 'Stay Warm for the Full 6–12 Week Cycle',
    desc: 'Automated WhatsApp sequences, retargeting, and CRM-driven touchpoints keep qualified leads engaged through the real estate decision cycle — so silence never kills a deal.',
    metric: 'Structured nurture recovers 35% of leads marked cold.',
    img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '05',
    phase: 'Site Visit',
    title: 'Convert Conversations Into Footfall',
    desc: 'Dedicated site visit campaigns — incentivised offers, bespoke messaging per buyer profile, event-based triggers — turn WhatsApp conversations into physical site visits.',
    metric: 'Engineered site visit rate: 3–5× industry average.',
    img: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    num: '06',
    phase: 'Booking',
    title: 'Answer the Only Question That Matters',
    desc: 'Every booking is sourced back to its originating campaign, creative, and channel. Your MD can see exactly which ad sold which flat — in real time, on a single dashboard.',
    metric: 'Closed-loop attribution = complete CPB visibility.',
    img: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
]

export default function HowItWorksSection() {
  return (
    <section className={styles.section}>
      <div className={styles.aura} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal as="div" className={styles.kk}>How It Works</Reveal>
        <Reveal as="h2" className={styles.sh} delay={80}>
          The Funnel From First Impression<br />
          <em>to Signed Booking</em>
        </Reveal>
        <Reveal as="p" className={styles.ss} delay={160}>
          Six stages. Every one connected. Every one measured. No stage runs in isolation — that&apos;s what makes it a funnel, not just a campaign.
        </Reveal>

        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <Reveal key={step.num} className={styles.stepCard} delay={200 + i * 60}>
              {/* Step image */}
              <div className={styles.stepImgWrap} aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={step.img} alt="" className={styles.stepImg} />
                <div className={styles.stepImgOverlay} />
              </div>
              <div className={styles.stepTop}>
                <div className={styles.stepIconWrap} aria-hidden="true">
                  {step.icon}
                </div>
                <div className={styles.stepPhase}>{step.phase}</div>
                <div className={styles.stepNum}>{step.num}</div>
              </div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
              <div className={styles.stepMetric}>
                <span className={styles.metricDot} aria-hidden="true" />
                {step.metric}
              </div>
              {/* Connector line — hidden on last card */}
              {i < steps.length - 1 && <div className={styles.stepConnector} aria-hidden="true" />}
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.bottomCta} delay={600}>
          <div className={styles.ctaBlock}>
            <div className={styles.ctaLeft}>
              <div className={styles.ctaTag}>#TheAgencyThatStopsAtBookings</div>
              <p className={styles.ctaText}>Ready to see exactly where your funnel is leaking?</p>
            </div>
            <Link href="/contact" className={styles.ctaBtn}>
              Get My 72-Hour Free Audit →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
