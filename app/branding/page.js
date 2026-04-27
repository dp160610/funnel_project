'use client';
import Link from 'next/link';
import Marquee from '../../components/Marquee';
import { Reveal, Stagger, itemVariant } from '../../components/Reveal';
import { motion } from 'framer-motion';

const tags = ['Positioning Strategy','Identity Systems','Brand Films','OOH & Mainline','Luxury Narratives','Sales Kit Design','Launch Campaigns','Portfolio Architecture'];

const reasons = [
  { t: 'Your brand is your first price negotiation', d: 'A strong brand commands price premiums of 8-22% over comparable unbranded inventory in the same micro-market. Branding is not a cost - it is your highest-leverage pricing strategy.', img: 'https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: 'Brand equity shortens your sales cycle', d: 'Buyers who already trust your brand arrive at the site office pre-sold. They ask fewer objections, spend less time in due diligence, and close 40% faster than cold prospects.', img: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: "A brand that's remembered costs less to market", d: 'Every rupee you invest in brand equity today lowers your future cost of acquisition. Recognised brands require 30-50% less paid media spend to generate the same volume of qualified leads.', img: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: "Your second project sells itself on your first one's reputation", d: 'Developers who build brand equity do not start from zero on every launch. Each project compounds the value of the last. We build brands that scale across your entire portfolio — not just the current project.', img: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: "Without brand, you're competing on price. Always.", d: 'Price competition is a race to the bottom. The only sustainable escape from it is a brand so well-positioned that the comparison becomes irrelevant. We build that escape route.', img: 'https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const process = [
  ['Stage 01','Brand Discovery & Market Audit','We map your competitive set, identify the white space in your buyer mind, and audit what your current brand communicates vs. what it should. This is where the strategy is born — not in a mood board, but in a market analysis.'],
  ['Stage 02','Positioning & Identity Architecture','We define your brand positioning statement, buyer archetype, emotional territory, and the single most important thing your brand must make people feel. Every creative decision that follows is anchored to this document.'],
  ['Stage 03','Visual Identity & Brand System','Logo, typography, colour palette, imagery style, iconography — built as a cohesive system, not a collection of assets. Every element is designed to communicate your positioning without saying a word.'],
  ['Stage 04','Brand Rollout & Market Activation','We take the brand live across digital touchpoints, OOH, sales centres, collateral, and performance campaigns in one coordinated market launch.'],
];

const services = [
  { n: '01', t: 'Brand Launch & Strategic Repositioning', d: 'For new developers entering the market and established ones who have outgrown their current identity. We define your category, your differentiator, and your brand voice — then bring it to life with an identity system built to own mindshare in your specific micro-market.', img: 'https://images.pexels.com/photos/3184286/pexels-photo-3184286.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '02', t: 'Social Media Brand Management', d: 'Your social presence is your trust storefront. We manage it as a brand system with strategic cadence, visual consistency, and community handling that supports conversion.', img: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '03', t: 'Strategic Copywriting & Brand Voice', d: 'Taglines, narratives, project messaging, and ad scripts that make the right buyer feel the project was built for them.', img: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '04', t: 'Visual Identity & Graphic Design System', d: 'Logo, brand guidelines, typography, color architecture, collateral, site hoardings, and sales kit design as one coherent visual system.', img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '05', t: 'Ad Films, Reels & Motion Brand Content', d: 'Brand films, walkthroughs, testimonials, and short-form content that create desire before the site visit.', img: 'https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '06', t: 'Print, OOH & Mainline Advertising', d: 'Site hoardings, brochures, jackets, and direct mailers that dominate the physical market where your buyer lives and commutes.', img: 'https://images.pexels.com/photos/1435975/pexels-photo-1435975.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const framework = [
  ['01','Buyer Archetype Definition','We build a precise profile of your ideal buyer - not demographics, but psychographics. What they aspire to. What they are afraid of. What makes them sign.'],
  ['02','Competitive White Space Mapping','We audit every competitor brand in your category and identify the specific positioning territory they have left unoccupied - then plant your flag in it.'],
  ['03','Emotional Brand Territory','Logic drives shortlisting. Emotion drives booking. We define the precise emotional feeling your brand must create and build every expression around it.'],
  ['04','Brand Promise & Proof Architecture','Your promise paired with credibility architecture - proof points, testimonials, and trust signals - that makes the promise believable.'],
  ['05','Voice, Tone & Message Hierarchy','We document exactly how your brand speaks so every communication reinforces the same positioning.'],
  ['06','Portfolio Brand Architecture','For multi-project developers, we create a hierarchy where each project has distinct identity while compounding master brand equity.'],
];

const segments = [
  { t: 'Affordable Housing', d: 'Rs25L to Rs60L. First-home buyers. Aspiration-led branding that makes the purchase feel like a life milestone.', img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { t: 'Mid-Segment Residential', d: 'Rs60L to Rs1.5Cr. Lifestyle upgraders. Branding that signals quality, community, and a step-up in living standards.', img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { t: 'Premium & Luxury', d: 'Rs1.5Cr to Rs5Cr. Discerning buyers. Positioning built on exclusivity, craft, and the emotional prestige of the address.', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { t: 'Ultra Luxury & HNI', d: 'Rs5Cr+. Investment-grade buyers. Brand storytelling that justifies pricing through heritage, scarcity, and lifestyle elevation.', img: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { t: 'Commercial & Plots', d: 'Office, retail, plotted development. ROI-led brand narratives that speak to investors and owner-occupiers differently.', img: 'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Page() {
  return (
    <div data-testid="branding-page">
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal><p className="eyebrow mb-8">Brand Strategy & Identity</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tightest max-w-[16ch]">A Brand Isn't What You Say. <em className="text-accent not-italic">It's What They Remember.</em></h1>
          </Reveal>
          <Reveal delay={0.25}><p className="mt-8 max-w-2xl text-lg text-bone/85">In real estate, the brand you build today determines the price premium you command tomorrow. We position developers and builders as the only logical choice, not just another option.</p></Reveal>
          <Reveal delay={0.35}><Link href="/contact" className="btn-primary mt-10">Position my brand to lead the market</Link></Reveal>
        </div>
      </section>

      <section className="border-y border-line py-3"><Marquee items={tags} outline speed="slow" /></section>

      <section className="py-12 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line border-l border-r border-line">
          {[['300+','Brands Built'],['12+','Cities Across India'],['₹4,500Cr+','Developer Inventory Branded'],['12x','Avg Brand Recall Lift']].map(([v,l],i)=>(
            <div key={i} className="py-6 px-5"><p className="font-tech font-bold text-2xl md:text-3xl">{v}</p><p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p></div>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Why Branding is Non-Negotiable</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Buyers do not buy property. <em className="text-accent not-italic">They buy belief.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">Without deliberate brand positioning, you are leaving pricing power, buyer quality, and booking velocity to chance.</p>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {reasons.map((r,i) => (
              <motion.div variants={itemVariant} key={i} className={`bg-ink p-7 card-hover ${i===4 ? 'lg:col-span-3 lg:flex lg:gap-8' : ''}`}>
                <div className={`img-zoom overflow-hidden ${i===4?'h-56 lg:w-1/2 mb-0':'h-44 mb-5'}`}><img src={r.img} alt={r.t} className="w-full h-full object-cover grayscale" /></div>
                <div className={i===4 ? 'lg:flex-1 lg:pt-4' : ''}>
                  <h3 className="font-display text-2xl leading-[1.1]">{r.t}</h3>
                  <p className="mt-3 text-sm text-bone/75">{r.d}</p>
                </div>
              </motion.div>
            ))}
          </Stagger>
          <p className="mt-10 font-display text-2xl md:text-3xl text-accent">73% of home buyers shortlist on brand trust alone before visiting a site.</p>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Our Branding Process</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Brand-building is not creative. <em className="text-accent not-italic">It is strategic.</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
            {process.map(([s,t,d],i) => (
              <Reveal key={i} delay={i*0.05}><div className="bg-ink p-7 h-full">
                <p className="font-tech text-6xl text-line">{String(i+1).padStart(2,'0')}</p>
                <p className="mt-3 font-tech text-xs uppercase tracking-wider2 text-accent">{s}</p>
                <h3 className="font-display text-2xl mt-2 leading-[1.1]">{t}</h3>
                <p className="mt-3 text-sm text-bone/75">{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Branding Solutions We Offer</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Six disciplines. <em className="text-accent not-italic">One cohesive brand story.</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map((s,i) => (
              <Reveal key={s.n} delay={i*0.04}><div className="bg-ink p-7 card-hover h-full">
                <div className="img-zoom h-44 mb-5 overflow-hidden"><img src={s.img} alt={s.t} className="w-full h-full object-cover grayscale" /></div>
                <p className="font-tech text-xs uppercase tracking-wider2 text-accent">{s.n}</p>
                <h3 className="font-display text-2xl mt-2 leading-[1.1]">{s.t}</h3>
                <p className="mt-3 text-sm text-bone/75">{s.d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Brand Positioning Framework</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">We do not design brands. <em className="text-accent not-italic">We engineer buyer perception.</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {framework.map(([n,t,d],i) => (
              <Reveal key={i} delay={i*0.04}><div className="bg-ink p-7 h-full">
                <p className="font-tech text-5xl text-line">{n}</p>
                <h3 className="font-display text-xl mt-3">{t}</h3>
                <p className="mt-3 text-sm text-bone/75">{d}</p>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Segments We Brand</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Every segment. <em className="text-accent not-italic">Every ticket size.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">Our brand thinking adapts to the psychological and aspirational context of each buyer segment — from first-home affordable to ultra-luxury.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {segments.map((s,i) => (
              <Reveal key={i} delay={i*0.04}><div className="bg-ink h-full card-hover">
                <div className="img-zoom h-52 overflow-hidden"><img src={s.img} alt={s.t} className="w-full h-full object-cover grayscale" /></div>
                <div className="p-6"><h3 className="font-display text-2xl">{s.t}</h3><p className="mt-3 text-sm text-bone/75">{s.d}</p></div>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 border-t border-line">
        <Marquee items={['#YourBrandIsYourPricePremium']} outline speed="slow" className="absolute inset-x-0 top-6 opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-4xl">Your next project deserves <em className="text-accent not-italic">a brand that precedes it.</em></h2>
            <p className="mt-6 text-bone/80 max-w-2xl">Every project launch is a chance to own a category, command a premium, and close faster. Let's build the brand identity that makes that happen.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Start my brand strategy session →</Link>
              <Link href="/contact" className="btn-ghost">See our process first</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
