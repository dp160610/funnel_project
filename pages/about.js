import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/About.module.css'

const directors = [
  {
    name: 'Aditya Kumar',
    role: 'Founder & CEO',
    img: 'https://realatte.com/images/about/team/Nirav%20Gosalia.jpg',
    linkedin: '#',
    desc: '12 years in real estate marketing. Built campaigns for 40+ developer launches across Mumbai, Pune, and Bengaluru.'
  },
  {
    name: 'Priya Shah',
    role: 'Head of Funnel Engineering',
    img: 'https://realatte.com/images/about/team/ROHAN.jpg',
    linkedin: '#',
    desc: 'Former performance lead at a top-5 real estate portal. Manages ₹200Cr+ in annual ad spend across client accounts.'
  },
  {
    name: 'Rahul Mehta',
    role: 'Head of Branding',
    img: 'https://realatte.com/images/about/team/mayank.jpg',
    linkedin: '#',
    desc: 'Led brand identity for 150+ real estate projects. Specialises in luxury positioning and new market entry strategy.'
  },
  {
    name: 'Neha Patel',
    role: 'Head of Influence & Content',
    img: 'https://realatte.com/images/about/team/harish.jpg',
    linkedin: '#',
    desc: 'Manages Property Edge\'s 2,000+ creator network with creator-led campaigns driving 10M+ views per launch.'
  }
]

const drivesUs = [
  { icon: 'https://realatte.com/images/about/orm.svg', label: 'Transparency Before Comfort', desc: 'We show what did not work and why. Opacity is how agencies protect bad performance.' },
  { icon: 'https://realatte.com/images/about/cro.svg', label: 'Outcomes Before Activity', desc: 'Every metric we report is traceable to enquiry, visit, or booking. Activity alone is noise.' },
  { icon: 'https://realatte.com/images/about/web.svg', label: 'Real Estate, Only', desc: 'Our edge is built entirely on real estate depth. We do not dilute that focus.' }
]

const workflow = [
  {
    icon: 'https://realatte.com/images/about/research.svg',
    title: '₹760Cr+',
    desc: 'in ad spend managed with full attribution.'
  },
  {
    icon: 'https://realatte.com/images/about/plan.svg',
    title: '86L+',
    desc: 'qualified leads generated across all markets.'
  },
  {
    icon: 'https://realatte.com/images/about/optimise.svg',
    title: '500+',
    desc: 'brand projects and campaigns delivered.'
  }
]

const teamMembers = [
  { name: 'Aditya Kumar', role: 'Founder & CEO' },
  { name: 'Priya Shah', role: 'Head of Funnel Engineering' },
  { name: 'Rahul Mehta', role: 'Head of Branding' },
  { name: 'Neha Patel', role: 'Head of Influence & Content' }
]

export default function About() {
  return (
    <>
      <NextSeo
        title="About Property Edge | Real Estate Digital Marketing Agency"
        description="Learn about Property Edge — India's leading real estate digital marketing agency. Meet our founders, see our process, and discover how we help developers succeed."
      />

      <Header />

      <main>

        {/* ── Hero ─────────────────────────────────────────── */}
        <section className={styles.heroBanner}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>About Us</span>
            <h1 className={styles.heroTitle}>
              We Were Built for{' '}
              <span className={styles.heroTitleLine}>One Industry.</span>
              <br />
              <span className={styles.heroPink}>This One.</span>
            </h1>
            <p className={styles.heroDesc}>
              No generalist agency playbook. No borrowed frameworks. Every insight earned in real estate, over a decade of closures.
            </p>
            <Link href="/contact" className={styles.heroCta}>
              <span className={styles.heroCtaInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.heroCtaIcon} />
                <span className={styles.heroCtaTxt}>Work With Us</span>
              </span>
            </Link>
          </div>
        </section>

        {/* ── Overview ─────────────────────────────────────── */}
        <section className={styles.overviewSec}>
          <div className={styles.container}>
            <div className={styles.secTitleWrap}>
              <div className={styles.titleTopWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} />
                <span className={styles.topTitle}>Our Story</span>
              </div>
              <h2 className={styles.overviewTitle}>
                Built Out of Frustration <span className={styles.pinkGrad}>With Generic Agencies.</span>
              </h2>
            </div>

            <p className={styles.overviewTxt}>
              Property Edge was founded because real estate developers kept getting sold generic digital marketing, campaigns built on consumer frameworks and reported on metrics with no relationship to bookings.
            </p>
            <p className={styles.overviewTxt}>
              We built an agency around one specific problem: the gap between a developer&apos;s ad budget and booking rate. Every service, tool, and hire exists to close that gap.
            </p>
            <p className={styles.overviewTxt}>
              Today we work with 120+ developers across 18 cities. The only thing we do not do is work outside real estate.
            </p>

            {/* Counters */}
            <div className={styles.counterRow}>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>550+</h3>
                <p className={styles.counterLbl}>Team Members</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>120+</h3>
                <p className={styles.counterLbl}>Developer Partners</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>18+</h3>
                <p className={styles.counterLbl}>Cities</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>100%</h3>
                <p className={styles.counterLbl}>Real Estate Focus</p>
              </div>
            </div>

            {/* What Drives Us */}
            <div className={styles.drivesWrap}>
              <h3 className={styles.drivesTitle}>Three Things We Never Compromise On</h3>
              <div className={styles.drivesGrid}>
                {drivesUs.map((item, i) => (
                  <div key={i} className={styles.driveCard}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.icon} alt={item.label} className={styles.driveIcon} onError={e => { e.currentTarget.style.display = 'none' }} />
                    <div>
                      <strong className={styles.driveLabel}>{item.label}</strong>
                      <p className={styles.driveDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Workflow ──────────────────────────────────────── */}
        <section className={styles.workflowSec}>
          <div className={styles.container}>
            <div className={styles.secTitleWrap}>
              <div className={styles.titleTopWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} />
                <span className={styles.topTitle}>Benchmark Snapshot</span>
              </div>
              <h2 className={styles.sectionHeading}>Built for Real Estate. Backed by Outcomes.</h2>
            </div>

            <div className={styles.processRow}>
              {workflow.map((step, i) => (
                <div key={i} className={styles.processCard}>
                  <div className={styles.processIconWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.icon} alt={step.title} className={styles.processIcon} onError={e => { e.currentTarget.style.display = 'none' }} />
                  </div>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet The Directors ───────────────────────────── */}
        <section className={styles.directorsSec}>
          <div className={styles.container}>
            <div className={styles.secTitleWrap}>
              <div className={styles.titleTopWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} />
                <span className={styles.topTitle}>The Team</span>
              </div>
              <h2 className={styles.sectionHeading}>People Who&apos;ve Spent Careers in This One Industry.</h2>
            </div>

            <div className={styles.directorsGrid}>
              {directors.map((d, i) => (
                <div key={i} className={styles.directorCard}>
                  <div className={styles.directorImgWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.img} alt={d.name} className={styles.directorImg} />
                  </div>
                  <div className={styles.directorInfo}>
                    <h3 className={styles.directorName}>{d.name}</h3>
                    <p className={styles.directorRole}>{d.role}</p>
                    <p className={styles.directorDesc}>{d.desc}</p>
                    <a href={d.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Meet The Team ────────────────────────────────── */}
        <section className={styles.teamSec}>
          <div className={styles.container}>
            <div className={styles.secTitleWrap}>
              <div className={styles.titleTopWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} />
                <span className={styles.topTitle}>One Industry. One Obsession.</span>
              </div>
              <h2 className={styles.sectionHeading}>Tell Us Your Biggest Acquisition Challenge.</h2>
              <p className={styles.teamSubtitle}>
                We work exclusively in real estate. We answer exclusively to your cost per booking. Everything else is noise.
              </p>
            </div>

            <div className={styles.teamGrid}>
              {teamMembers.map((m, i) => (
                <div key={i} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>
                    <span>{m.name.charAt(0)}</span>
                  </div>
                  <h4 className={styles.teamName}>{m.name}</h4>
                  <p className={styles.teamRole}>{m.role}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link href="/contact" className={styles.heroCta}>Start the Conversation</Link>
              <Link href="/branding" className={styles.heroCta}>See Our Work First</Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
