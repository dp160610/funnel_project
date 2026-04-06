import styles from '../../styles/components/ROICalculator.module.css'
import { useState, useEffect } from 'react'

// Base values matching Realatte defaults:
// Residential / Launch / South Mumbai / 2 BHK / TextAds+StaticBanners+Reels / 50+ Units / 6 Months
// Total Budget: 1,79,99,280 → Leads: 8333, CPL: 2160, QL: 1833, CPQL: 9819, SV: 500, CPSV: 35999, Bookings: 50, CPB: 359986
const BASE = {
  budget: 17999280,
  leads: 8333,
  cpl: 2160,
  ql: 1833,
  cpql: 9819,
  sv: 500,
  cpsv: 35999,
  bookings: 50,
  cpb: 359986,
}

const PROPERTY_TYPE_MULT = { Residential: 1.0, Commercial: 0.75 }
const CAMPAIGN_MULT = { Launch: 1.0, Sustenance: 0.65 }
const MARKET_MULT = {
  'South Mumbai': 1.0,
  'North Mumbai': 0.9,
  'Western Suburbs': 0.85,
  'Eastern Suburbs': 0.8,
  'Pune': 0.75,
  'Bengaluru': 0.8,
  'Hyderabad': 0.7,
  'Chennai': 0.7,
  'Delhi NCR': 0.85,
  'Kolkata': 0.65,
}
const UNIT_MULT = { '1 BHK': 0.6, '2 BHK': 1.0, '3 BHK': 1.3, '4 BHK+': 1.6 }
const AD_MULT = {
  'TextAds + StaticBanners + Reels': 1.0,
  'TextAds + StaticBanners': 0.82,
  'TextAds + Reels': 0.87,
  'StaticBanners + Reels': 0.9,
}
const GOAL_MULT = { 'Sell Units 50+': 1.0, 'Sell Units 25–50': 0.55, 'Sell Units 10–25': 0.28 }
const DURATION_MULT = { '3 Months': 0.58, '6 Months': 1.0, '12 Months': 1.82 }

function fmt(n) {
  return Math.round(n).toLocaleString('en-IN')
}

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    propertyType: 'Residential',
    campaign: 'Launch',
    market: 'South Mumbai',
    unitType: '2 BHK',
    adType: 'TextAds + StaticBanners + Reels',
    goal: 'Sell Units 50+',
    duration: '6 Months',
  })

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const calc = () => {
    const m =
      PROPERTY_TYPE_MULT[inputs.propertyType] *
      CAMPAIGN_MULT[inputs.campaign] *
      MARKET_MULT[inputs.market] *
      UNIT_MULT[inputs.unitType] *
      AD_MULT[inputs.adType] *
      GOAL_MULT[inputs.goal] *
      DURATION_MULT[inputs.duration]

    const budget = Math.round(BASE.budget * m)
    const leads = Math.round(BASE.leads * m)
    const ql = Math.round(leads * 0.22)
    const sv = Math.round(ql * 0.273)
    const bookings = Math.round(sv * 0.1)
    return {
      budget,
      leads,
      cpl: leads > 0 ? Math.round(budget / leads) : 0,
      ql,
      cpql: ql > 0 ? Math.round(budget / ql) : 0,
      sv,
      cpsv: sv > 0 ? Math.round(budget / sv) : 0,
      bookings,
      cpb: bookings > 0 ? Math.round(budget / bookings) : 0,
    }
  }

  const r = mounted ? calc() : { budget: 0, leads: 0, cpl: 0, ql: 0, cpql: 0, sv: 0, cpsv: 0, bookings: 0, cpb: 0 }

  const set = (key, val) => setInputs((prev) => ({ ...prev, [key]: val }))

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className="sec_title_wrap for_white_bg">
          <div className="title_top_wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://realatte.com/images/headericon.svg" alt="" width={28} height={12} className="logo_gap" />
            <span className="top_title">ROI Calculator</span>
          </div>
          <h3 className={`${styles.heading} title black`}>
            <span className="black_gradient">Let&apos;s Show You Just </span>
            <span className="pink_gradient">How Far Your Growth Can Go</span>
          </h3>
        </div>
        <p className={styles.subheading}>Input your data, and let our ROI-driven strategies show you the scalable growth we can deliver. Precise, data-backed insights to fuel your next big move.</p>

        <div className={styles.calculator}>
          <div className={styles.inputs}>
            <p className={styles.inputsLabel}>Your Plan</p>

            <div className={styles.formGroup}>
              <label>Property Type</label>
              <select value={inputs.propertyType} onChange={(e) => set('propertyType', e.target.value)}>
                {Object.keys(PROPERTY_TYPE_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Unit Launch / Sustenance</label>
              <select value={inputs.campaign} onChange={(e) => set('campaign', e.target.value)}>
                {Object.keys(CAMPAIGN_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Micro Market</label>
              <select value={inputs.market} onChange={(e) => set('market', e.target.value)}>
                {Object.keys(MARKET_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Unit Type</label>
              <select value={inputs.unitType} onChange={(e) => set('unitType', e.target.value)}>
                {Object.keys(UNIT_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Ad Type</label>
              <select value={inputs.adType} onChange={(e) => set('adType', e.target.value)}>
                {Object.keys(AD_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Goal</label>
              <select value={inputs.goal} onChange={(e) => set('goal', e.target.value)}>
                {Object.keys(GOAL_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>

            <div className={styles.formGroup}>
              <label>Campaign Duration</label>
              <select value={inputs.duration} onChange={(e) => set('duration', e.target.value)}>
                {Object.keys(DURATION_MULT).map((v) => <option key={v}>{v}</option>)}
              </select>
            </div>
          </div>

          <div className={styles.results}>
            <div className={styles.budgetRow}>
              <span className={styles.budgetLabel}>Total Budget</span>
              <span className={styles.budgetValue}>₹{fmt(r.budget)}</span>
            </div>

            <div className={styles.resultsGrid}>
              <div className={styles.resultItem}>
                <div className={styles.value}>{fmt(r.leads)}</div>
                <div className={styles.label}>Leads</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>₹{fmt(r.cpl)}</div>
                <div className={styles.label}>CPL</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>{fmt(r.ql)}</div>
                <div className={styles.label}>QL</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>₹{fmt(r.cpql)}</div>
                <div className={styles.label}>CPQL</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>{fmt(r.sv)}</div>
                <div className={styles.label}>Site Visits</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>₹{fmt(r.cpsv)}</div>
                <div className={styles.label}>CPSV</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>{fmt(r.bookings)}</div>
                <div className={styles.label}>Bookings</div>
              </div>
              <div className={styles.resultItem}>
                <div className={styles.value}>₹{fmt(r.cpb)}</div>
                <div className={styles.label}>CPB</div>
              </div>
            </div>

            <p className={styles.disclaimer}>Disclaimer: The data presented is based on past experience and is provided for informational purposes only.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
