import { NextSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Button, Card } from '../components/common'
import styles from '../styles/pages/Portfolio.module.css'

// Sample case studies data
const caseStudies = [
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
    strategy: ['Geo-Targeted Ads', 'Social Media Campaigns', 'Performance Marketing', 'Influencer Partnerships']
  },
  {
    id: 2,
    title: 'Runwal Gardens Dombivli',
    category: 'Residential',
    location: 'Dombivli, Mumbai',
    metrics: { bookings: 250, leads: 18500, roi: '2.8x' },
    description: 'Strategic performance marketing that drove qualified leads and exceeded sales targets.',
    fullDescription: 'For Runwal Gardens Dombivli, we focused on high-intent lead generation through search marketing and dynamic retargeting.',
    highlights: ['250+ Unit Bookings', '18,500 Qualified Leads', '₹2.8x ROI', 'Completed in 5 months'],
    strategy: ['Search Marketing', 'Dynamic Retargeting', 'Landing Pages', 'Email Campaigns']
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
    strategy: ['Premium Targeting', 'LinkedIn Campaigns', 'Luxury Content', 'WhatsApp Lead Nurturing']
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
    strategy: ['SEO & SEM', 'Local Marketing', 'Community Building', 'Geo-fence Targeting']
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
    strategy: ['Brand Storytelling', 'Premium Events', 'Influencer Partnerships', 'Performance Marketing']
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
    strategy: ['Affordability Messaging', 'DTC Campaigns', 'Affiliate Marketing', 'Community Engagement']
  }
]

export default function PortfolioPage() {
  return (
    <>
      <NextSeo
        title="Our Work - Property Edge"
        description="Explore our successful real estate marketing campaigns and case studies. See how we've driven results for premium residential and commercial projects."
      />
      
      <Header />
      
      <main>
        <section className={styles.hero}>
          <Container>
            <h1 className={styles.title}>Our Work</h1>
            <p className={styles.subtitle}>Industry-leading results across residential, commercial, and luxury projects</p>
          </Container>
        </section>

        <section className={styles.casesGrid}>
          <Container>
            <div className={styles.grid}>
              {caseStudies.map((caseStudy) => (
                <Card key={caseStudy.id} className={styles.caseCard}>
                  <span className={styles.badge}>{caseStudy.category}</span>
                  <h3 className={styles.caseTitle}>{caseStudy.title}</h3>
                  <p className={styles.location}>{caseStudy.location}</p>
                  <p className={styles.description}>{caseStudy.description}</p>
                  
                  <div className={styles.metrics}>
                    {Object.entries(caseStudy.metrics).map(([key, value]) => (
                      <div key={key} className={styles.metric}>
                        <strong>{value}</strong>
                        <span>{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    ))}
                  </div>

                  <Button href={`/portfolio/${caseStudy.id}`} variant="secondary">
                    View Case Study →
                  </Button>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
