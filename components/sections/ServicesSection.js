import { useState } from 'react'
import styles from '../../styles/components/ServicesSection.module.css'

const stages = [
  {
    id: 'top',
    label: 'TOP FUNNEL — DISCOVER',
    subtitle: 'Put Your Project on Every Serious Buyer\'s Radar',
    description: "We build awareness before buyers even start searching. Through hyper-targeted placements and compelling creative, we make your project the obvious choice from day one.",
    items: [
      'City & Micro-Market Targeting Campaigns',
      'Luxury vs. Affordable Audience Segmentation',
      'Programmatic Display & Video Reach',
      'Influencer-Driven Project Showcases',
      'Location-Based SEO & Content Strategy',
    ],
    media: [
      { video: 'https://backend.realatte.com/uploads/ASG_Diwali_Ad_Film_1_3ad1f56599.mp4', label: 'Sheth Realty Diwali Wish' },
      { video: 'https://backend.realatte.com/uploads/Ashvin_Sheth_7b005daabc.mp4', label: 'Ashvin Sheth Campaign' },
      { video: 'https://backend.realatte.com/uploads/Atul_Projects_NAREDCO_AV_Video_1_186ba6d305.mp4', label: 'Atul Projects NAREDCO' },
      { video: 'https://backend.realatte.com/uploads/Bhavisha_Ad_Film_with_Logo_1_83287c87e9.mp4', label: 'Bhavisha Ad Film' },
      { video: 'https://backend.realatte.com/uploads/bhuj_0a5743369b.mp4', label: 'Bhuj Campaign' },
      { video: 'https://backend.realatte.com/uploads/reel5_b8d40ef4dd.mp4', label: 'Property Edge Reel' },
    ],
  },
  {
    id: 'mid',
    label: 'MID FUNNEL — ENGAGE',
    subtitle: 'Turn Curiosity Into Committed Site Visitors',
    description: "Interested buyers need the right nudge at the right moment. We keep your project top of mind and guide warm leads toward the all-important site visit.",
    items: [
      'Smart Retargeting Across Meta, Google & YouTube',
      'Dedicated Project Microsites & Landing Pages',
      'WhatsApp Drip Sequences & AI Chat Assistants',
      'Pre-Launch Webinars & Exclusive Previews',
      'Google Maps & Local Search Optimization',
    ],
    media: [
      { video: 'https://backend.realatte.com/uploads/reel3_f6e0b54c15.mp4', label: 'Dosti Realty' },
      { video: 'https://backend.realatte.com/uploads/7_ddca22818c.mp4', label: 'Ashwin Sheth Group' },
      { video: 'https://backend.realatte.com/uploads/71_722845dbde.mp4', label: 'Property Edge Reel' },
      { video: 'https://backend.realatte.com/uploads/78_a0010e35eb.mp4', label: 'Realty Campaign' },
      { video: 'https://backend.realatte.com/uploads/72_2bd2c36cbc.mp4', label: 'Brand Reel' },
      { video: 'https://backend.realatte.com/uploads/70_dcfe2bd074.mp4', label: 'Portfolio Reel' },
    ],
  },
  {
    id: 'low',
    label: 'LOW FUNNEL — CONVERT',
    subtitle: 'From Shortlist to Signed Agreement',
    description: "This is where strategy meets revenue. We identify the hottest prospects and engineer every touchpoint to push them across the finish line — from shortlist to booking.",
    items: [
      'High-Intent Buyer Identification & Scoring',
      'Personalised SMS & WhatsApp Booking Nudges',
      'Priority Call Connect for Premium Leads',
      'Sales-Blitz Campaigns for Quarter-End Pushes',
      'Conversion-Tuned Retargeting Creatives',
    ],
    media: [
      { img: 'https://backend.realatte.com/uploads/17_b2d92605af.jpg', label: 'Gera Island of Joy' },
      { img: 'https://backend.realatte.com/uploads/21_c8f5a55095.jpg', label: 'NSL Luxoria' },
      { img: 'https://backend.realatte.com/uploads/11_19134fc928.jpg', label: 'Mantri Webcity' },
      { img: 'https://backend.realatte.com/uploads/14_68a37f5ecf.jpg', label: 'Nambiar Millenia' },
      { img: 'https://backend.realatte.com/uploads/12_199f99a691.jpg', label: 'Mantri Serenity' },
      { img: 'https://backend.realatte.com/uploads/10_03151240e6.jpg', label: 'Purva Parkhill' },
    ],
  },
]

export default function ServicesSection() {
  const [active, setActive] = useState('top')
  const current = stages.find((s) => s.id === active)

  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={`sec_title_wrap ${styles.header}`}>
          <div className="title_top_wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
            <span className="top_title">Our Growth System</span>
          </div>
          <h3 className={`${styles.sectionTitle} title`}>
            <span className="white_gradient">Discover, Engage, Convert — </span>
            <span className="pink_gradient">the complete buyer journey, owned by us</span>
          </h3>
          <p className={styles.subheading}>
            A proven three-stage growth engine built exclusively for real estate developers.
          </p>
        </div>

        {/* Tab Bar */}
        <div className={styles.tabs}>
          {stages.map((stage) => (
            <button
              key={stage.id}
              type="button"
              className={`${styles.tab} ${active === stage.id ? styles.activeTab : ''}`}
              onClick={() => setActive(stage.id)}
            >
              {stage.label}
            </button>
          ))}
        </div>

        {/* Content + Media */}
        <div className={styles.content}>
          <div className={styles.textPanel}>
            <p className={styles.stageLabel}>{current.label}</p>
            <h3 className={styles.stageTitle}>{current.subtitle}</h3>
            <p className={styles.stageDesc}>{current.description}</p>
            <ul className={styles.list}>
              {current.items.map((item, i) => (
                <li key={i} className={styles.listItem}>
                  <span className={styles.arrow}>&rarr;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.mediaPanel}>
            <div className={styles.mediaGrid}>
              {current.media.map((item, i) => (
                <div key={i} className={styles.mediaItem}>
                  <div
                    className={styles.mediaCard}
                    onMouseEnter={(e) => {
                      const v = e.currentTarget.querySelector('video')
                      if (v) v.play()
                    }}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget.querySelector('video')
                      if (v) { v.pause(); v.currentTime = 0 }
                    }}
                  >
                    {item.video ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={item.video}
                        className={styles.mediaImg}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={item.img} alt={item.label} className={styles.mediaImg} />
                    )}
                    <div className={styles.mediaOverlay}>
                      <button className={styles.mediaPlay} aria-label="View">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        View
                      </button>
                    </div>
                  </div>
                  <div className={styles.mediaMeta}>
                    <p className={styles.mediaTitle}>{item.label}</p>
                    <p className={styles.mediaAgency}>Property Edge Ventures Ltd</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.mediaFooter}>
              <a href="/performance" className={styles.viewAllLink}>View All →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

