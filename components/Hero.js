import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="hero-eyebrow">Sit Back, Sell Out, And Let Us Own Your Digital Game</span>
        <h1>#1 Digital Marketing Agency For Real Estate</h1>
        <p>
          From crafting a powerhouse brand identity to executing high-impact performance marketing, we handle every click, lead, and sale with precision, so you don't have to.
        </p>
        <div className="hero-actions">
          <Link href="/#services" className="button button-primary">
            Let's Talk Real Estate
          </Link>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-card">
          <div className="hero-card-head">
            <span>Built for impact</span>
            <strong>Branding, Performance, Strategy - every click, every lead, every sale, mastered</strong>
          </div>
          <div className="hero-metrics">
            <div className="metric">
              <strong>1,200+</strong>
              <span>Projects Launched</span>
            </div>
            <div className="metric">
              <strong>550+</strong>
              <span>Team Members</span>
            </div>
            <div className="metric">
              <strong>900+ Cr</strong>
              <span>Of Digital Spends</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}