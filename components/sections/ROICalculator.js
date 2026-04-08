import styles from '../../styles/components/ROICalculator.module.css'
import { useState, useEffect, useRef, useCallback } from 'react'

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

  const canvasRef = useRef(null)

  const drawChart = useCallback((canvas, data) => {
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const W = canvas.parentElement.getBoundingClientRect().width || canvas.parentElement.offsetWidth || 480
    const H = 220
    canvas.width = W * dpr
    canvas.height = H * dpr
    canvas.style.width = W + 'px'
    canvas.style.height = H + 'px'
    ctx.scale(dpr, dpr)
    ctx.clearRect(0, 0, W, H)

    // Cross-browser rounded rectangle (no ctx.roundRect dependency)
    const rr = (x, y, w, h, r) => {
      if (r > w / 2) r = w / 2
      if (r > h / 2) r = h / 2
      ctx.beginPath()
      ctx.moveTo(x + r, y)
      ctx.lineTo(x + w - r, y)
      ctx.quadraticCurveTo(x + w, y, x + w, y + r)
      ctx.lineTo(x + w, y + h - r)
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
      ctx.lineTo(x + r, y + h)
      ctx.quadraticCurveTo(x, y + h, x, y + h - r)
      ctx.lineTo(x, y + r)
      ctx.quadraticCurveTo(x, y, x + r, y)
      ctx.closePath()
    }

    const left = 72
    const right = W - 90
    const trackW = right - left
    const barH = 30
    const gap = 22
    const rows = data.length
    const totalH = rows * barH + (rows - 1) * gap
    const startY = (H - totalH) / 2

    data.forEach(({ label, val, pct }, i) => {
      const y = startY + i * (barH + gap)
      const fillW = Math.max(0, trackW * pct)

      // Track background
      ctx.fillStyle = 'rgba(121, 80, 255, 0.10)'
      rr(left, y, trackW, barH, 8)
      ctx.fill()

      // Gradient fill
      if (fillW > 4) {
        const grad = ctx.createLinearGradient(left, 0, left + fillW, 0)
        grad.addColorStop(0, '#7950ff')
        grad.addColorStop(1, '#da0c89')
        ctx.fillStyle = grad
        rr(left, y, fillW, barH, 8)
        ctx.fill()
      }

      // Label (left)
      ctx.fillStyle = '#7047f6'
      ctx.font = `600 12px Sora, system-ui, sans-serif`
      ctx.textAlign = 'right'
      ctx.textBaseline = 'middle'
      ctx.fillText(label, left - 10, y + barH / 2)

      // Value (right)
      ctx.textAlign = 'left'
      ctx.fillText(val, right + 10, y + barH / 2)
    })
  }, [])

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

  useEffect(() => {
    if (!mounted || !canvasRef.current) return
    const data = [
      { label: 'Leads',    val: fmt(r.leads),    pct: Math.min(1, r.leads / BASE.leads) },
      { label: 'QL',       val: fmt(r.ql),        pct: Math.min(1, r.ql / BASE.ql) },
      { label: 'SV',       val: fmt(r.sv),        pct: Math.min(1, r.sv / BASE.sv) },
      { label: 'Bookings', val: fmt(r.bookings),  pct: Math.min(1, r.bookings / BASE.bookings) },
    ]
    // rAF ensures the container has a layout width before we read it
    const raf = requestAnimationFrame(() => {
      if (canvasRef.current) drawChart(canvasRef.current, data)
    })
    return () => cancelAnimationFrame(raf)
  }, [mounted, r, drawChart])

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
            <span className="black_gradient">See the Numbers Before You Sign</span>
            <span className="pink_gradient"> a Single Brief</span>
          </h3>
        </div>
        <p className={styles.subheading}>Tell us about your project and we&apos;ll model exactly what your marketing investment can return — leads, site visits, bookings, and cost per outcome, no guesswork.</p>

        <div className={styles.calculator}>
          <div className={styles.formCard}>
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

              <p className={styles.disclaimer}>Disclaimer: The data presented is based on past experience and is provided for informational purposes only.</p>
            </div>
          </div>

          <div className={styles.resultsPanel}>
            <div className={styles.resultBox}>
              <div className={styles.resultItem}>
                <p className={styles.resultTitle}>{fmt(r.leads)}</p>
                <p className={styles.resultTxt}>Leads</p>
                <br />
                <p className={styles.resultTitle}>₹{fmt(r.cpl)}</p>
                <p className={styles.resultTxt}>CPL</p>
              </div>
              <div className={styles.resultItem}>
                <p className={styles.resultTitle}>{fmt(r.ql)}</p>
                <p className={styles.resultTxt}>QL</p>
                <br />
                <p className={styles.resultTitle}>₹{fmt(r.cpql)}</p>
                <p className={styles.resultTxt}>CPQL</p>
              </div>
              <div className={styles.resultItem}>
                <p className={styles.resultTitle}>{fmt(r.sv)}</p>
                <p className={styles.resultTxt}>SV</p>
                <br />
                <p className={styles.resultTitle}>₹{fmt(r.cpsv)}</p>
                <p className={styles.resultTxt}>CPSV</p>
              </div>
              <div className={styles.resultItem}>
                <p className={styles.resultTitle}>{fmt(r.bookings)}</p>
                <p className={styles.resultTxt}>Bookings</p>
                <br />
                <p className={styles.resultTitle}>₹{fmt(r.cpb)}</p>
                <p className={styles.resultTxt}>CPB</p>
              </div>
            </div>
            <div className={styles.chartWrap}>
              <p className={styles.totalBudget}>Total Budget: ₹{fmt(r.budget)}</p>
              <div className={styles.canvasContainer}>
                <canvas ref={canvasRef} role="img" aria-label="ROI metrics chart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
