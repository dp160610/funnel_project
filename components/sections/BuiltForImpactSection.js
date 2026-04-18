import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/BuiltForImpactSection.module.css'

const disciplines = [
  {
    num: '01',
    title: 'Funnel Engineering',
    desc: 'The only agency in India that architects your entire buyer journey - from first impression to signed booking - as a single connected, measured, optimised system.',
    link: 'Because a sold-out project isn\'t luck. It\'s what a properly engineered funnel produces ->',
    href: '/funnelengineering',
  },
  {
    num: '02',
    title: 'Branding',
    desc: 'The brand you build before your campaign goes live determines the CPL you\'ll pay after it does. Identity, story, and creative - starting from a position of trust, not obscurity.',
    link: 'Strong brands don\'t just look better. They convert cheaper ->',
    href: '/branding',
  },
  {
    num: '03',
    title: 'Influence',
    desc: 'Reels, creators, social optimisation, SEO. The layer of organic credibility that paid campaigns will never manufacture alone - and once built, keeps working after the budget runs out.',
    link: 'Make your project the one people talk about before you ask them to ->',
    href: '/influence',
  },
  {
    num: '04',
    title: 'RealTech',
    desc: 'CRM, lead scoring, WhatsApp automation, attribution dashboards. The infrastructure that turns campaign data into commercial intelligence you can act on in real time.',
    link: 'The system that makes your funnel visible from end to end ->',
    href: '/tech',
  },
  {
    num: '05',
    title: 'Sales Team & Pitching',
    desc: 'A field-ready sales team trained to pitch, persuade, and close. From site visit scripting to objection handling - we put the right people in the room with the right narrative, so your project sells itself.',
    link: 'The closing layer that turns visits into bookings ->',
    href: '/contact',
  },
]

export default function BuiltForImpactSection() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionAura} aria-hidden="true" />
      <div className={styles.inner}>
        <Reveal as="div" className={styles.kk}>Five Disciplines</Reveal>
        <Reveal as="h2" className={styles.sh} delay={90}>
          One Vision. Four Levers.<br /><em>Every Launch Sold Out.</em>
        </Reveal>
        <Reveal as="p" className={styles.ss} delay={170}>
          Every service at Property Edge is a spoke in the same wheel. Branding builds the trust that lowers your CPL. Influence builds the credibility that raises your site visit rate. Performance builds the machine that converts both into bookings.
        </Reveal>
        <div className={styles.carouselShell}>
          <div className={styles.carousel}>
            <div className={styles.track}>
              <div className={styles.group}>
                {disciplines.map((d) => (
                  <div key={d.num} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.cardBar} />
                      <div className={styles.cardN}>{d.num}</div>
                      <h3 className={styles.cardH}>{d.title}</h3>
                      <p className={styles.cardP}>{d.desc}</p>
                      <Link href={d.href} className={styles.cardL}>{d.link}</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.group} aria-hidden="true">
                {disciplines.map((d) => (
                  <div key={`${d.num}-clone`} className={styles.slide}>
                    <div className={styles.card}>
                      <div className={styles.cardBar} />
                      <div className={styles.cardN}>{d.num}</div>
                      <h3 className={styles.cardH}>{d.title}</h3>
                      <p className={styles.cardP}>{d.desc}</p>
                      <Link href={d.href} className={styles.cardL}>{d.link}</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
