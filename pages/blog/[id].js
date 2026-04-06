import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Container } from '../../components/common'
import styles from '../../styles/pages/BlogDetail.module.css'

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Real Estate Marketing Funnel Guide',
    excerpt: 'Learn how to structure your real estate marketing across awareness, consideration, and conversion stages.',
    author: 'Sarah Kumar',
    date: 'April 1, 2026',
    category: 'Strategy',
    readTime: '8 min read',
    content: `<h2>Understanding the Three Stages</h2>
<p>Real estate marketing success depends on understanding and optimizing three distinct funnel stages: awareness, consideration, and conversion.</p>

<h3>Top Funnel: Awareness</h3>
<p>The awareness stage focuses on introducing your project to potential buyers in your target market. This is where visibility and reach matter most.</p>
<ul>
  <li>Geo-targeted advertising campaigns</li>
  <li>Influencer partnerships to build credibility</li>
  <li>Video content showcasing project highlights</li>
  <li>Social media campaigns for brand awareness</li>
</ul>

<h3>Mid Funnel: Consideration</h3>
<p>Once you have their attention, nurture these leads toward making a site visit or inquiry.</p>
<ul>
  <li>Dynamic retargeting with property benefits</li>
  <li>Email sequences highlighting unique features</li>
  <li>WhatsApp engagement and quick responses</li>
  <li>Webinars and virtual tours</li>
</ul>

<h3>Low Funnel: Conversion</h3>
<p>Close the deal by converting high-intent leads into actual bookings.</p>
<ul>
  <li>Direct sales follow-up</li>
  <li>Booking incentives and limited offers</li>
  <li>Payment plan education</li>
  <li>Testimonials from existing buyers</li>
</ul>`
  },
  {
    id: 2,
    title: '2026 Real Estate Digital Marketing Trends to Watch',
    excerpt: 'AI-powered personalization, video marketing, and hyperlocal targeting are reshaping how we market properties.',
    author: 'Amit Sharma',
    date: 'March 28, 2026',
    category: 'Trends',
    readTime: '6 min read',
    content: `<h2>Key Trends Reshaping Real Estate Marketing</h2>
<p>As we move deeper into 2026, several powerful trends are transforming how real estate properties are marketed and sold.</p>

<h3>1. AI-Powered Personalization</h3>
<p>AI is now enabling marketers to deliver highly personalized experiences at scale. From dynamic ad creative to personalized landing pages, AI ensures each prospect sees content tailored to their preferences.</p>

<h3>2. Video Takes the Lead</h3>
<p>Video content continues to dominate. Virtual tours, property walkthroughs, and developer interviews are becoming standard expectations.</p>

<h3>3. Hyperlocal Marketing</h3>
<p>Geofencing, hyperlocal SEO, and location-based ads enable precise targeting of nearby prospects, driving higher conversion rates.</p>`
  },
  {
    id: 3,
    title: 'Converting Leads into Bookings: A Data-Driven Approach',
    excerpt: 'Discover the strategies and tactics that consistently convert real estate leads into actual bookings.',
    author: 'Priya Desai',
    date: 'March 20, 2026',
    category: 'Conversion',
    readTime: '10 min read',
    content: '<p>Data-driven approach content here...</p>'
  },
  {
    id: 4,
    title: 'Social Media Strategy for Real Estate Developers',
    excerpt: 'How to build engaged communities and generate quality leads through Instagram, Facebook, and LinkedIn.',
    author: 'Rajesh Patel',
    date: 'March 15, 2026',
    category: 'Social Media',
    readTime: '7 min read',
    content: '<p>Social media strategy content here...</p>'
  }
]

function getBlogById(id) {
  return blogPosts.find(p => p.id === parseInt(id))
}

export default function BlogDetail() {
  const router = useRouter()
  const { slug } = router.query

  if (!slug) {
    return null
  }

  const post = getBlogById(slug)

  if (!post) {
    return (
      <>
        <Header />
        <main>
          <Container>
            <p>Post not found</p>
          </Container>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <NextSeo
        title={`${post.title} - Property Edge Blog`}
        description={post.excerpt}
      />
      
      <Header />
      
      <main>
        <article className={styles.article}>
          <Container>
            <header className={styles.header}>
              <span className={styles.category}>{post.category}</span>
              <h1 className={styles.title}>{post.title}</h1>
              <div className={styles.meta}>
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />

            <footer className={styles.footer}>
              <div className={styles.author}>
                <h4>About the Author</h4>
                <p>{post.author} is a real estate marketing expert with years of experience driving campaigns for leading developers.</p>
              </div>

              <div className={styles.relatedLinks}>
                <h4>More From Our Blog</h4>
                <ul>
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(p => (
                    <li key={p.id}>
                      <Link href={`/blog/${p.id}`}>{p.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </footer>
          </Container>
        </article>
      </main>
      
      <Footer />
    </>
  )
}
