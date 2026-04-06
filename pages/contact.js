import { NextSeo } from 'next-seo'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Button } from '../components/common'
import styles from '../styles/pages/Contact.module.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  })
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', company: '', projectType: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact us directly.')
      console.error('Contact form error:', error)
    }
  }

  return (
    <>
      <NextSeo
        title="Contact Us - Property Edge"
        description="Get in touch with our real estate marketing experts. Let's discuss your project and create a winning strategy."
      />
      
      <Header />
      
      <main>
        <section className={styles.hero}>
          <Container>
            <h1 className={styles.title}>Let's Talk</h1>
            <p className={styles.subtitle}>Discuss your project and let's create a winning strategy together</p>
          </Container>
        </section>

        <section className={styles.contactSection}>
          <Container>
            <div className={styles.content}>
              <div className={styles.form}>
                <h2>Send us a Message</h2>
                
                {status === 'success' && (
                  <div className={styles.successMessage}>
                    ✓ Thank you! We'll get back to you shortly.
                  </div>
                )}

                {status === 'error' && (
                  <div className={styles.errorMessage}>
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your company"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="projectType">Project Type</label>
                      <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange}>
                        <option value="">Select type...</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="luxury">Luxury</option>
                        <option value="mixed">Mixed Use</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your project and goals..."
                      rows="5"
                    />
                  </div>

                  <Button type="submit" variant="primary" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>

              <div className={styles.info}>
                <h2>Other Ways to Reach Us</h2>
                
                <div className={styles.infoItem}>
                  <h4>Email</h4>
                  <a href="mailto:hello@propertyedge.com">hello@propertyedge.com</a>
                </div>

                <div className={styles.infoItem}>
                  <h4>Phone</h4>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>

                <div className={styles.infoItem}>
                  <h4>Office</h4>
                  <p>Mumbai, India</p>
                  <p>Available internationally</p>
                </div>

                <div className={styles.infoItem}>
                  <h4>Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                  <p>Saturday: By appointment</p>
                </div>

                <div className={styles.social}>
                  <h4>Connect With Us</h4>
                  <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
