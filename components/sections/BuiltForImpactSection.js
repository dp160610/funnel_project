import Link from 'next/link'
import Reveal from '../common/Reveal'
import styles from '../../styles/components/BuiltForImpactSection.module.css'

const disciplines = [
  {
    num: '01',
    title: 'Funnel Engineering',
    img: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'The only agency in India that architects your entire buyer journey - from first impression to signed booking - as a single connected, measured, optimised system.',
    link: 'Because a sold-out project isn\'t luck. It\'s what a properly engineered funnel produces ->',
    href: '/funnelengineering',
  },
  {
    num: '02',
    title: 'Branding',
    img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'The brand you build before your campaign goes live determines the CPL you\'ll pay after it does. Identity, story, and creative - starting from a position of trust, not obscurity.',
    link: 'Strong brands don\'t just look better. They convert cheaper ->',
    href: '/branding',
  },
  {
    num: '03',
    title: 'Influence',
    img: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'Reels, creators, social optimisation, SEO. The layer of organic credibility that paid campaigns will never manufacture alone - and once built, keeps working after the budget runs out.',
    link: 'Make your project the one people talk about before you ask them to ->',
    href: '/influence',
  },
  {
    num: '04',
    title: 'RealTech',
    img: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600',
    desc: 'CRM, lead scoring, WhatsApp automation, attribution dashboards. The infrastructure that turns campaign data into commercial intelligence you can act on in real time.',
    link: 'The system that makes your funnel visible from end to end ->',
    href: '/tech',
  },
  {
    num: '05',
    title: 'Sales Team & Pitching',
    img: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        <h2 className={styles.sh}>
          One Vision. Five Levers.<br /><em>Every Launch Sold Out.</em>
        </h2>
        <Reveal as="p" className={styles.ss} delay={170}>
          Every service at Property Edge is a spoke in the same wheel. Branding builds the trust that lowers your CPL. Influence builds the credibility that raises your site visit rate. Performance builds the machine that converts both into bookings.
        </Reveal>
        <div className={styles.cardsGrid}>
          {disciplines.map((d, i) => (
            <Reveal key={d.num} className={styles.card} delay={i * 80}>
              <Link href={d.href} className={styles.cardInner}>
                <div className={styles.cardImgWrap}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.img} alt={d.title} className={styles.cardImg} />
                  <div className={styles.cardImgOverlay} aria-hidden="true" />
                  <span className={styles.cardNum}>{d.num}</span>
                </div>
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{d.title}</h3>
                  <div className={styles.cardDivider} />
                  <p className={styles.cardDesc}>{d.desc}</p>
                  <span className={styles.cardCta}>
                    Explore
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
