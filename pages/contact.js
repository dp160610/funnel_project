import { NextSeo } from 'next-seo'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Reveal from '../components/common/Reveal'
import MediaShowcase from '../components/common/MediaShowcase'
import styles from '../styles/pages/ServicePage.module.css'

const contactSignals = [
  'Project Launches',
  'Brand Positioning',
  'Lead Generation',
  'Influence Campaigns',
  'CRM & Automation',
  'Funnel Audits',
  'Performance Media',
  'Real Estate Only',
]
const contactMedia = [
  {
    type: 'image',
    src: 'https://backend.realatte.com/uploads/Dosti_Sales_Video_1_1_ce02681275.png',
    label: 'Project Launch',
    title: 'Bring us your project brief and we will map the highest-impact growth path',
  },
  {
    type: 'video',
    src: 'https://backend.realatte.com/uploads/bhuj_0a5743369b.mp4',
    poster: 'https://backend.realatte.com/uploads/bhuj_39c0ed50e3.png',
    label: 'Campaign Energy',
    title: 'A contact page that feels like the start of a launch, not a dead end form',
  },
  {
    type: 'image',
    src: 'https://backend.realatte.com/uploads/i_stay_thum_b9eadfd2a4.png',
    label: 'Strategy Call',
    title: 'Context-rich visuals that make the enquiry experience feel more premium',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '72-Hour Free Funnel Audit',
    projectName: '',
    monthlyAdSpend: '',
    currentCpl: '',
    message: ''
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const SHEET_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    if (!SHEET_URL) {
      setStatus('error')
      setErrorMessage('Form endpoint not configured. Please contact us directly.')
      return
    }

    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ ...formData, timestamp: new Date().toISOString() })
      })

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', inquiryType: '72-Hour Free Funnel Audit', projectName: '', monthlyAdSpend: '', currentCpl: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send. Please try again or reach us directly.')
      console.error('Contact form error:', error)
    }
  }

  return (
    <>
      <NextSeo
        title="Contact — Get Your Free 72hr Funnel Audit | Property Edge"
        description="Share your project brief. We'll show you exactly where your funnel is leaking budget — within 72 hours. No obligation, no lock-in."
      />

      <Header />

      <main>
        {/* Signal Strip */}
        <section className={styles.signalStrip}>
          <div className={styles.signalTrack}>
            {[...contactSignals, ...contactSignals].map((item, index) => (
              <span key={`${item}-${index}`} className={styles.signalItem}>
                <span className={styles.signalDot} />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Dark Split Contact Form */}
        <section className={styles.contactDark}>
          <div className={styles.sectionInner}>
            <div className={styles.contactSplit}>
              {/* LEFT: Form */}
              <Reveal className={styles.contactFormWrap}>
                <div className={styles.contactFormHead}>
                  <div className={styles.contactFormTitle}>Ready to Stop Leaking Budget?</div>
                  <div className={styles.contactFormSub}>Share your project — we&apos;ll show you exactly where the funnel is breaking in 72 hours. No agency jargon. Just the math.</div>
                </div>

                {status === 'success' && (
                  <div className={styles.darkSuccessMsg}>
                    ✓ We&apos;ve received your brief. Expect a response within 2 business hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className={styles.darkErrorMsg}>{errorMessage}</div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className={styles.darkFormRow}>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                    </div>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="phone">Phone *</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>

                  <div className={styles.darkFormRow}>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="email">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                    </div>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="company">Developer / Company *</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required placeholder="Company name" />
                    </div>
                  </div>

                  <div className={styles.darkFormGroup}>
                    <label htmlFor="inquiryType">What are you looking for?</label>
                    <select id="inquiryType" name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
                      <option value="72-Hour Free Funnel Audit">72-Hour Free Funnel Audit</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="Influence & Content">Influence & Content</option>
                      <option value="Branding & Identity">Branding & Identity</option>
                      <option value="CRM & Tech Stack">CRM & Tech Stack</option>
                      <option value="Full-Service Partnership">Full-Service Partnership</option>
                    </select>
                  </div>

                  <div className={styles.darkFormGroup}>
                    <label htmlFor="projectName">Project Name</label>
                    <input type="text" id="projectName" name="projectName" value={formData.projectName} onChange={handleChange} placeholder="Project or development name" />
                  </div>

                  <div className={styles.darkFormRow}>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="monthlyAdSpend">Monthly Ad Spend (₹)</label>
                      <input type="text" id="monthlyAdSpend" name="monthlyAdSpend" value={formData.monthlyAdSpend} onChange={handleChange} placeholder="e.g. ₹5L/month" />
                    </div>
                    <div className={styles.darkFormGroup}>
                      <label htmlFor="currentCpl">Current CPL / CPB</label>
                      <input type="text" id="currentCpl" name="currentCpl" value={formData.currentCpl} onChange={handleChange} placeholder="e.g. ₹450 CPL" />
                    </div>
                  </div>

                  <div className={styles.darkFormGroup}>
                    <label htmlFor="message">Tell us about your challenge</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Brief us on your project, target buyer, current results, and what's not working..." rows="4" />
                  </div>

                  <button type="submit" className={styles.darkFormSubmit} disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending Brief...' : 'Get My Free 72hr Funnel Audit →'}
                  </button>
                </form>
              </Reveal>

              {/* RIGHT: Info panel */}
              <div className={styles.contactInfoWrap}>
                <Reveal className={styles.contactInfoBlock} delay={120}>
                  <div className={styles.contactInfoTitle}>We respond within 2 business hours.</div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                      <div className={styles.contactInfoLabel}>Email</div>
                      <a href="mailto:hello@propertyedge.com" className={styles.contactInfoValue}>hello@propertyedge.com</a>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    </div>
                    <div>
                      <div className={styles.contactInfoLabel}>WhatsApp / Phone</div>
                      <a href="https://wa.me/919876543210" className={styles.contactInfoValue}>+91 98765 43210</a>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <div>
                      <div className={styles.contactInfoLabel}>Office</div>
                      <span className={styles.contactInfoValue}>Mumbai, India — available globally</span>
                    </div>
                  </div>
                  <div className={styles.contactInfoItem}>
                    <div className={styles.contactInfoIcon}>
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    </div>
                    <div>
                      <div className={styles.contactInfoLabel}>Response Guarantee</div>
                      <span className={styles.contactInfoValue}>Mon–Fri 9am–7pm IST · Sat by appointment</span>
                    </div>
                  </div>
                </Reveal>

                <Reveal className={styles.contactGuarantee} delay={200}>
                  <div className={styles.contactGuaranteeTitle}>No obligation. No lock-in. No agency fluff.</div>
                  <div className={styles.contactGuaranteeText}>
                    We review every enquiry personally and respond within 2 business hours with a specific, actionable observation about your funnel — not a generic proposal deck. If we can&apos;t help you, we&apos;ll tell you exactly who can.
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <div className={styles.contactSocialRow}>
                    <a href="https://linkedin.com/company/propertyedge" target="_blank" rel="noopener noreferrer" className={styles.contactSocialBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      LinkedIn
                    </a>
                    <a href="https://instagram.com/propertyedge" target="_blank" rel="noopener noreferrer" className={styles.contactSocialBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                      Instagram
                    </a>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className={styles.contactSocialBtn}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                      WhatsApp
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <MediaShowcase
          title="What We Build Together"
          subtitle="From launch strategies to live pipelines — every brief starts with a 72-hour funnel audit."
          items={contactMedia}
        />
      </main>

      <Footer />
    </>
  )
}
