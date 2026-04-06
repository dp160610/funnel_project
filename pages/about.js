import Link from 'next/link'
import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/pages/About.module.css'

const directors = [
  {
    name: 'Nirav Gosalia',
    role: 'Co-Founder & Co-CEO',
    img: 'https://realatte.com/images/about/team/Nirav%20Gosalia.jpg',
    linkedin: 'https://in.linkedin.com/in/nirav-gosalia-73a0984',
    desc: 'A computer engineer with a relentless drive to innovate, Nirav co-founded RealtyRedefined and played a key role in scaling it to 8 cities before its acquisition by Quikr. Now, with Property Edge, he channels his sharp technical mind into disrupting the real estate digital marketing space.'
  },
  {
    name: 'Rohan Shah',
    role: 'Co-Founder & Co-CEO',
    img: 'https://realatte.com/images/about/team/ROHAN.jpg',
    linkedin: 'https://in.linkedin.com/in/rohanashah',
    desc: 'Rohan is a master strategist who fuses creativity with performance metrics. With a sharp analytical mind and an intuitive grasp of market behavior, he shapes data-driven campaigns that consistently outperform expectations.'
  },
  {
    name: 'Mayank Vora',
    role: 'Co-Founder & Director',
    img: 'https://realatte.com/images/about/team/mayank.jpg',
    linkedin: 'https://in.linkedin.com/in/voramayank',
    desc: 'Mayank\'s expertise in engineering meets an unyielding ambition for growth. As a co-founder of RealtyRedefined, he scaled the company across India, and now brings a keen eye for strategy and growth to every project.'
  },
  {
    name: 'Harish Patel',
    role: 'Co-Founder & Director',
    img: 'https://realatte.com/images/about/team/harish.jpg',
    linkedin: 'https://uk.linkedin.com/in/harishrkpatel1983',
    desc: 'A computer engineer with an instinct for scalability, Harish co-founded RealtyRedefined and helped scale it to new heights. His passion for technology and digital solutions fuels our data-driven approach.'
  },
  {
    name: 'Rahul Goyal',
    role: 'Co-Founder & Director',
    img: 'https://realatte.com/images/about/team/rahu.jpg',
    linkedin: 'https://in.linkedin.com/in/rahulgoyal1824',
    desc: 'Rahul\'s expertise lies in transforming digital marketing into a high-precision science. His approach combines meticulous planning with a deep understanding of market dynamics, ensuring clients don\'t just meet their goals—they redefine them.'
  }
]

const drivesUs = [
  { icon: 'https://realatte.com/images/about/orm.svg', label: 'Online Reputation Management', desc: 'Build trust, amplify influence.' },
  { icon: 'https://realatte.com/images/about/cro.svg', label: 'Conversion Rate Optimization', desc: 'More leads, better quality, higher ROI.' },
  { icon: 'https://realatte.com/images/about/web.svg', label: 'Website Design & Development', desc: 'Seamless, scalable, and built to convert.' },
  { icon: 'https://realatte.com/images/about/bigdata.svg', label: 'Big Data Analytics', desc: 'Insights that drive intelligent decision-making.' },
  { icon: 'https://realatte.com/images/about/affiliate.svg', label: 'Affiliate Marketing', desc: 'Smart partnerships, bigger reach.' },
  { icon: 'https://realatte.com/images/about/social.svg', label: 'Social Media', desc: 'Engaging the right audience, the right way.' }
]

const workflow = [
  {
    icon: 'https://realatte.com/images/about/research.svg',
    title: 'Research',
    desc: 'We dive deep into market insights, audience behavior, and hyperlocal trends to uncover what moves your buyers. From decoding search intent to analyzing demand gaps, we lay the groundwork for campaigns that resonate and perform.'
  },
  {
    icon: 'https://realatte.com/images/about/plan.svg',
    title: 'Strategic Planning',
    desc: 'Armed with data and backed by experience, we blueprint a performance strategy tailored to your goals. Whether it\'s geo-targeted ads or influencer-led storytelling, we align every asset to a full-funnel vision that drives ROI—not just reach.'
  },
  {
    icon: 'https://realatte.com/images/about/optimise.svg',
    title: 'Optimization & Scale',
    desc: 'From first click to final booking, we fine-tune every touchpoint. Real-time analytics, AI-led automation, and performance reviews ensure we keep scaling what works and scrapping what doesn\'t—until you\'re in sellout mode.'
  }
]

const teamMembers = [
  { name: 'Mehul Bhanushali', role: 'Associate Director' },
  { name: 'Sumit Mudiraj', role: 'Sr. Vice President' },
  { name: 'Siddharth Bhagalia', role: 'Vice President Strategy' },
  { name: 'Updesh Dandriyal', role: 'Vice President Business' },
  { name: 'Prashant Shah', role: 'CFO' },
  { name: 'Jay Gala', role: 'VP. Sales & Marketing' },
  { name: 'Nisha Bari', role: 'Human Resources' },
  { name: 'Pradeep Kumar', role: 'Sr. Web Developer Manager' },
  { name: 'Rohit Sonavane', role: 'Sr. Digital Marketing Manager' },
  { name: 'Rahul Polkam', role: 'Design Head' }
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
            <span className={styles.heroTag}>ABOUT US</span>
            <h1 className={styles.heroTitle}>
              Bring the vision.{' '}
              <span className={styles.heroTitleLine}>We bring the</span>
              <br />strategy.{' '}
              <span className={styles.heroPink}>Together, we build Success.</span>
            </h1>
            <p className={styles.heroDesc}>
              From crafting a powerhouse brand identity to executing high-impact performance
              marketing, we handle every click, lead, and sale with precision, so you don&apos;t have to.
            </p>
            <Link href="/contact" className={styles.heroCta}>
              <span className={styles.heroCtaInner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://realatte.com/images/cta_icon.png" alt="" className={styles.heroCtaIcon} />
                <span className={styles.heroCtaTxt}>Let&apos;s Talk Real Estate</span>
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
                <span className={styles.topTitle}>OVERVIEW</span>
              </div>
              <h2 className={styles.overviewTitle}>
                Where Strategy Meets <span className={styles.pinkGrad}>Sold-Out</span>
                {' '}Success
              </h2>
            </div>

            <p className={styles.overviewTxt}>
              Headquartered in Mumbai and backed by over a decade of industry dominance, we&apos;ve
              partnered with 100+ builders to deliver one thing: Growth. Not just in leads, but in ROI,
              sales efficiency, and conversion optimisation—because results are the only metric that matters.
            </p>

            {/* Counters */}
            <div className={styles.counterRow}>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>550+</h3>
                <p className={styles.counterLbl}>Team Members</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>12+</h3>
                <p className={styles.counterLbl}>Years of Experience</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>1,200+</h3>
                <p className={styles.counterLbl}>Projects Launched</p>
              </div>
              <div className={styles.counterBox}>
                <h3 className={styles.counterNum}>900+ Cr</h3>
                <p className={styles.counterLbl}>Of Digital Spends</p>
              </div>
            </div>

            {/* What Drives Us */}
            <div className={styles.drivesWrap}>
              <h3 className={styles.drivesTitle}>What Drives Us</h3>
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
                <span className={styles.topTitle}>WORK FLOW</span>
              </div>
              <h2 className={styles.sectionHeading}>Our Working Process</h2>
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
                <span className={styles.topTitle}>LEADERSHIP</span>
              </div>
              <h2 className={styles.sectionHeading}>Meet The Directors</h2>
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
                      LinkedIn
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
                <span className={styles.topTitle}>MEET THE TEAM</span>
              </div>
              <h2 className={styles.sectionHeading}>The Property Edge Family.</h2>
              <p className={styles.teamSubtitle}>
                Experts in real estate marketing, passionate about your success. Our team combines
                data-driven strategy with collaborative expertise, delivering results-oriented growth.
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
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
