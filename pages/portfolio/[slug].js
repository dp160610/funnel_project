import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container, Button, Card } from '../../components/common'
import styles from '../../styles/pages/CaseStudyDetail.module.css'

// Sample case studies data
const allCaseStudies = [
  {
    id: 1,
    title: 'Dosti Greater Thane',
    category: 'Residential',
    location: 'Greater Thane, Mumbai',
    metrics: { bookings: 500, leads: 35999, roi: '3.2x' },
    description: 'Complete digital marketing overhaul for premium residential project using multi-channel strategy.',
    fullDescription: 'Dosti Greater Thane is a premium residential project in the heart of Thane. We executed a comprehensive digital marketing campaign spanning awareness, consideration, and conversion stages. Our integrated approach combined geo-targeted ads, influencer partnerships, and retargeting campaigns.',
    highlights: [
      '500+ Unit Bookings',
      '35,999 Total Leads',
      '₹3.2x ROI',
      'Done in 6 months'
    ],
    strategy: ['Geo-Targeted Ads', 'Social Media Campaigns', 'Performance Marketing', 'Influencer Partnerships'],
    detailedContent: 'The Greater Thane residential market was competitive. We positioned Dosti Greater Thane as a premium offering with lifestyle benefits. Our campaign focused on three stages: top-funnel awareness through video ads and influencer content, mid-funnel engagement through retargeting with property benefits, and low-funnel conversion through direct booking incentives.'
  },
  // Add other case studies with id 2-6...
  {
    id: 2,
    title: 'Runwal Gardens Dombivli',
    category: 'Residential',
    location: 'Dombivli, Mumbai',
    metrics: { bookings: 250, leads: 18500, roi: '2.8x' },
    description: 'Strategic performance marketing that drove qualified leads and exceeded sales targets.',
    fullDescription: 'For Runwal Gardens Dombivli, we focused on high-intent lead generation through search marketing and dynamic retargeting.',
    highlights: ['250+ Unit Bookings', '18,500 Qualified Leads', '₹2.8x ROI', 'Completed in 5 months'],
    strategy: ['Search Marketing', 'Dynamic Retargeting', 'Landing Pages', 'Email Campaigns'],
    detailedContent: 'High-intent audience targeting through Google Search and Programmatic Display advertising.'
  },
  {
    id: 3,
    title: 'Hiranandani Empress Hill',
    category: 'Premium Residential',
    location: 'Chennai',
    metrics: { bookings: 180, leads: 12400, roi: '2.5x' },
    description: 'Premium positioning strategy for luxury residential project targeting NRI and HNI audience.',
    fullDescription: 'Positioned as a luxury offering, we crafted premium-focused campaigns targeting high-net-worth individuals and NRI buyers.',
    highlights: ['180+ Unit Bookings', '12,400 Premium Leads', '₹2.5x ROI', 'Premium positioning achieved'],
    strategy: ['Premium Targeting', 'LinkedIn Campaigns', 'Luxury Content', 'WhatsApp Lead Nurturing'],
    detailedContent: 'Luxury market positioning requires sophisticated targeting. We leveraged LinkedIn, premium lifestyle publications, and curated content.'
  },
  {
    id: 4,
    title: 'Alcove New Kolkata',
    category: 'Residential',
    location: 'Kolkata',
    metrics: { bookings: 320, leads: 22100, roi: '3.1x' },
    description: 'Multi-channel campaign leveraging SEO, SEM, and social media to dominate local market.',
    fullDescription: 'Alcove New Kolkata campaign combined hyperlocal SEO with integrated online and offline strategies to capture market share.',
    highlights: ['320+ Unit Bookings', '22,100 Total Leads', '₹3.1x ROI', 'Market leader position'],
    strategy: ['SEO & SEM', 'Local Marketing', 'Community Building', 'Geo-fence Targeting'],
    detailedContent: 'Hyperlocal strategy combined with geo-fence targeting to dominate the Kolkata market.'
  },
  {
    id: 5,
    title: 'Piramal Mahalaxmi',
    category: 'Luxury Commercial',
    location: 'South Mumbai',
    metrics: { bookings: 450, leads: 31200, roi: '3.5x' },
    description: 'Premium luxury project marketing with integrated brand building and performance campaigns.',
    fullDescription: 'For this iconic luxury project, we combined brand storytelling with performance-driven lead generation.',
    highlights: ['450+ Unit Bookings', '31,200 Leads', '₹3.5x ROI Achieved', 'Icon status established'],
    strategy: ['Brand Storytelling', 'Premium Events', 'Influencer Partnerships', 'Performance Marketing'],
    detailedContent: 'Iconic luxury positioning required brand storytelling combined with performance metrics.'
  },
  {
    id: 6,
    title: 'AR Homes Rise',
    category: 'Mid-Range Residential',
    location: 'Bengaluru',
    metrics: { bookings: 290, leads: 19800, roi: '2.9x' },
    description: 'Volume-focused campaign targeting middle-class homebuyers with scalable marketing approach.',
    fullDescription: 'Mid-range project requiring volume and speed. We deployed scalable digital tactics focused on affordability messaging.',
    highlights: ['290+ Unit Bookings', '19,800 Qualified Leads', '₹2.9x ROI', 'Rapid sales achieved'],
    strategy: ['Affordability Messaging', 'DTC Campaigns', 'Affiliate Marketing', 'Community Engagement'],
    detailedContent: 'Volume and speed required scalable, performance-focused tactics.'
  }
]

function getCaseStudyById(id) {
  return allCaseStudies.find(cs => cs.id === parseInt(id))
}

export default function CaseStudyDetail() {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return null
  }

  const caseStudy = getCaseStudyById(slug)

  if (!caseStudy) {
    return (
      <>
        <Header />
        <main>
          <Container>
            <p>Case study not found</p>
          </Container>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NextSeo
        title={`${caseStudy.title} - Property Edge`}
        description={caseStudy.description}
      />
      
      <Header />
      
      <main>
        <section className={styles.hero}>
          <Container>
            <span className={styles.badge}>{caseStudy.category}</span>
            <h1 className={styles.title}>{caseStudy.title}</h1>
            <p className={styles.location}>{caseStudy.location}</p>
            <p className={styles.description}>{caseStudy.fullDescription}</p>
          </Container>
        </section>

        <section className={styles.metrics}>
          <Container>
            <h2>Results Achieved</h2>
            <div className={styles.metricsGrid}>
              {Object.entries(caseStudy.metrics).map(([key, value]) => (
                <Card key={key} className={styles.metricCard}>
                  <div className={styles.metricValue}>{value}</div>
                  <div className={styles.metricLabel}>{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.highlights}>
          <Container>
            <h2>Campaign Highlights</h2>
            <ul className={styles.highlightsList}>
              {caseStudy.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </Container>
        </section>

        <section className={styles.strategy}>
          <Container>
            <h2>Strategy & Approach</h2>
            <p>{caseStudy.detailedContent}</p>
            <div className={styles.strategyGrid}>
              {caseStudy.strategy.map((item, idx) => (
                <Card key={idx} className={styles.strategyCard}>
                  {item}
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className={styles.cta}>
          <Container>
            <h2>Want Similar Results for Your Project?</h2>
            <Button href="/contact" variant="primary">Schedule a Consultation →</Button>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
