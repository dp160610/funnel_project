import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Container, Card } from '../components/common'
import styles from '../styles/pages/Blog.module.css'

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Real Estate Marketing Funnel Guide',
    excerpt: 'Learn how to structure your real estate marketing across awareness, consideration, and conversion stages.',
    author: 'Sarah Kumar',
    date: 'April 1, 2026',
    category: 'Strategy',
    readTime: '8 min read'
  },
  {
    id: 2,
    title: '2026 Real Estate Digital Marketing Trends to Watch',
    excerpt: 'AI-powered personalization, video marketing, and hyperlocal targeting are reshaping how we market properties.',
    author: 'Amit Sharma',
    date: 'March 28, 2026',
    category: 'Trends',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Converting Leads into Bookings: A Data-Driven Approach',
    excerpt: 'Discover the strategies and tactics that consistently convert real estate leads into actual bookings.',
    author: 'Priya Desai',
    date: 'March 20, 2026',
    category: 'Conversion',
    readTime: '10 min read'
  },
  {
    id: 4,
    title: 'Social Media Strategy for Real Estate Developers',
    excerpt: 'How to build engaged communities and generate quality leads through Instagram, Facebook, and LinkedIn.',
    author: 'Rajesh Patel',
    date: 'March 15, 2026',
    category: 'Social Media',
    readTime: '7 min read'
  }
]

export default function BlogPage() {
  return (
    <>
      <NextSeo
        title="Blog - Property Edge"
        description="Insights, strategies, and tips on real estate digital marketing. Learn best practices from industry experts."
      />
      
      <Header />
      
      <main>
        <section className={styles.hero}>
          <Container>
            <h1 className={styles.title}>Insights & Strategies</h1>
            <p className={styles.subtitle}>Expert insights on real estate marketing, strategy, and growth</p>
          </Container>
        </section>

        <section className={styles.postsSection}>
          <Container>
            <div className={styles.grid}>
              {blogPosts.map((post) => (
                <Card key={post.id} className={styles.postCard}>
                  <span className={styles.category}>{post.category}</span>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  
                  <div className={styles.meta}>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className={styles.readTime}>{post.readTime}</div>

                  <Link href={`/blog/${post.id}`} className={styles.readMore}>
                    Read More →
                  </Link>
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
