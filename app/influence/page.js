'use client';
import Link from 'next/link';
import Marquee from '../../components/Marquee';
import { Reveal, Stagger, itemVariant } from '../../components/Reveal';
import { motion } from 'framer-motion';

const tags = ['Creator Partnerships','Launch Buzz','Hyperlocal Reels','Social Proof','NRI Discovery','Lifestyle Content','Digital PR','Search Visibility'];

const reasons = [
  ['01','Buyers Research Before They Respond','Before a buyer calls your number, they have already watched 5-8 videos about your project, location, or builder reputation. If none of that content is yours - or endorsed by voices they trust - you have already lost ground before the conversation starts.','11+ content pieces consumed pre-visit'],
  ['02','Ad Fatigue Has Reached a Ceiling','Indian real estate buyers see 400+ digital ads per day. CTR on display ads in real estate has dropped below 0.4% industrywide. Influence content commands 6-8x higher engagement because it does not feel like an ad.','6-8x higher engagement vs. display ads'],
  ['03','NRI & HNI Buyers Rely on Curated Discovery','Affluent and non-resident buyers rarely engage with generic paid ads. They discover investments through trusted financial creators, NRI community leaders, and lifestyle voices. If you are not present in those conversations, a competitor is.','73% of NRI buyers via peer/content influence'],
  ['04','Organic Reach Compounds Over Time','Unlike paid ads that stop the moment you stop spending, influence content continues to rank, circulate, and convert for months. A well-placed influencer video is a perpetual trust asset, not a one-time expense.','Content longevity: 6-18 months per piece'],
  ['05','Project Launch Windows Are Non-Negotiable','The first 60-90 days after a project launch set the entire sales velocity for the project lifetime. Influence campaigns create concentrated buzz during this window with organic amplification and pre-launch wait-lists.','Launch window: first 60 days set the tone'],
  ['06','Your Reputation Is Built in Comments, Not Ads','When a buyer is on the fence, they search your builder name, project name, and location. What they find decides whether they call or move on. Influence marketing populates that layer with credibility signals.','Search perception shapes 60%+ of final decisions'],
];

const compRows = [
  ['Buyer Trust Score','Low - ads feel promotional','High - peer-validated credibility'],
  ['Content Shelf Life','Ends when budget stops','6-18 months of organic reach'],
  ['NRI / HNI Reach','Limited, expensive targeting','Natural via niche creator audiences'],
  ['Search Presence','Paid only - no indexing','Reels and videos rank organically'],
  ['Cost per Engaged View','Rs 3-8 per view','Rs 0.4-1.2 per view'],
  ['Emotional Conviction','Difficult - format mismatch','High - story-led walkthroughs'],
  ['Site Visit Conversion Rate','1-3% of leads','4-9% of leads (influence-warmed)'],
];

const services = [
  ['01 - Service','Influencer Marketing & Creator Partnerships','We build and manage end-to-end influencer campaigns from creator identification and briefing to production oversight and reporting. We work across macro, micro, and hyperlocal creator tiers and map each creator\'s audience profile to your project\'s buyer persona.','https://images.pexels.com/photos/3760778/pexels-photo-3760778.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['02 - Service','Film Production, AVs & Cinematic Photography','From full-length project films and cinematic aerial walkthroughs to high-conversion property photography, we produce content that creates emotional resonance and intent, not just information.','https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['03 - Service','Model-Based Reels & Lifestyle Content','Aspirational short-form narratives featuring professional models that bring your project to life as lived experience. Scripted and produced for Instagram and YouTube Shorts with conversion hooks built in.','https://images.pexels.com/photos/1426851/pexels-photo-1426851.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['04 - Service','Real Estate SEO & Content Visibility','Hyperlocal and category SEO that helps your project dominate search when buyers look for location, builder, or project terms. Includes landing pages, blog content, YouTube SEO, and GBP optimisation.','https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['05 - Service','Social Media Management & Community Building','Full-service management of builder and project social channels: content calendars, community engagement, DM response protocols, and brand voice consistency.','https://images.pexels.com/photos/4549415/pexels-photo-4549415.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['06 - Service','Digital PR & Thought Leadership','Media placements, builder profile stories, project launch coverage, and thought leadership that establish authority and create a credibility halo that paid media cannot replicate.','https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=900'],
];

const tiers = [
  ['Nano','5K-50K followers','Neighbourhood community leaders and local trusted voices with high engagement and authenticity.','Best for: Affordable and mid-segment','https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=800'],
  ['Micro','50K-500K followers','Niche authority creators with strong category relevance and engaged purchase-intent audiences.','Best for: Most residential projects','https://images.pexels.com/photos/5721979/pexels-photo-5721979.jpeg?auto=compress&cs=tinysrgb&w=800'],
  ['Macro','500K-5M followers','Mass reach creators for launch windows and broad salience when visibility must scale quickly.','Best for: Premium and launch campaigns','https://images.pexels.com/photos/3832684/pexels-photo-3832684.jpeg?auto=compress&cs=tinysrgb&w=800'],
  ['Celebrity','5M+ followers','National personalities delivering maximum credibility and awareness for premium inventory.','Best for: Luxury and township launches','https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800'],
];

const stages = [
  ['Stage 01','Buyer Persona & Creator Mapping','Define exact buyer profile and map creator audiences that mirror this profile with precision.','Output: Creator shortlist + audience match report'],
  ['Stage 02','Content Strategy & Brief Development','Build campaign narrative, key messages, and creator briefs that preserve authenticity without losing positioning accuracy.','Output: Campaign narrative + creator briefs'],
  ['Stage 03','Production Oversight & QC','Manage execution, review rounds, and brand compliance checks to ensure quality and conversion readiness.','Output: Approved content ready to publish'],
  ['Stage 04','Amplification & Paid Boost','Scale top-performing organic content with paid overlays on Meta and YouTube to precise location and demographic cohorts.','Output: Boosted content with paid reach overlay'],
  ['Stage 05','Performance Tracking & Attribution','Track views, saves, profile visits, clicks, and lead quality attribution against pipeline movement and CPL.','Output: Influence attribution report'],
];

const formats = [
  ['Project Walkthrough Reels','90-second to 3-minute immersive project tours with voiceover, lifestyle context, and location cues.','Awareness → Intent','https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['Talking-Head Expert Reviews','Creator-led analysis on location investment potential, amenity breakdowns, and value benchmarks.','Trust Building → Conviction','https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['Model & Lifestyle Reels','Aspirational moments that sell the lived experience, not just inventory and specifications.','Emotional Connect → Desire','https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['Cinematic Project Films','Flagship 3-5 minute narratives with premium production quality to establish authority quickly.','Brand Authority → Premium Perception','https://images.pexels.com/photos/7578529/pexels-photo-7578529.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['Resident Testimonial Content','Authentic resident perspectives covering trust, build quality, and daily living confidence.','Objection Resolution → Close','https://images.pexels.com/photos/3831796/pexels-photo-3831796.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['Site Visit Vlogs & Location Reviews','First-person realism that helps remote and NRI buyers evaluate with confidence before visiting.','Consideration → Site Visit Decision','https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=900'],
];

export default function Page() {
  return (
    <div data-testid="influence-page">
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal delay={0.1}><h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tightest max-w-[15ch]">Real Estate Doesn't Get Sold. <em className="text-accent not-italic">It Gets Believed.</em></h1></Reveal>
          <Reveal delay={0.25}><p className="mt-8 max-w-2xl text-lg text-bone/85">Buyers do not trust ads anymore. They trust people. We build influence ecosystems that put your project in front of the right audiences through the voices they already follow, the content they already consume, and the stories that make them act.</p></Reveal>
          <Reveal delay={0.35}><div className="mt-10 flex flex-col sm:flex-row gap-4"><Link href="/contact" className="btn-primary">Build my influence strategy</Link><a href="#why" className="btn-ghost">See why it works</a></div></Reveal>
        </div>
      </section>

      <section className="border-y border-line py-3"><Marquee items={tags} outline speed="slow" /></section>

      <section className="py-12 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line border-l border-r border-line">
          {[['1,200+','Reels Produced'],['180+','Influencer Collaborations'],['80 Cr+','Organic Impressions'],['6-8x','Avg Trust Lift vs Paid Ads']].map(([v,l],i)=>(<div key={i} className="py-6 px-5"><p className="font-tech font-bold text-2xl md:text-3xl">{v}</p><p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p></div>))}
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Problem With Ads Alone</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-5xl">Buyers Have Learned to Ignore Your Ads. <em className="text-accent not-italic">They Have Not Learned to Ignore People They Trust.</em></h2>
            <p className="mt-6 text-muted max-w-3xl">Real estate is a high-stakes, high-emotion category. The higher the ticket size, the more social proof and emotional conviction a buyer needs before even making a call. Paid ads can reach them. Influence convinces them.</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-ink p-8">
              <h3 className="font-display text-2xl">The Trust Deficit in Real Estate Marketing</h3>
              <p className="mt-3 text-bone/80">Average banner blindness in digital advertising is now above 86%. Buyers in the Rs 50L-5Cr bracket consume 11+ pieces of third-party content before visiting a site. Ad spend gets them to scroll, but not to believe.</p>
              <blockquote className="mt-6 font-display italic text-xl border-l-2 border-accent pl-4">"I saw the ad. But I only booked after three people I follow talked about the project."<span className="block mt-2 text-xs not-italic font-tech text-muted uppercase tracking-wider2">Actual buyer feedback, Hyderabad, 2024</span></blockquote>
            </div>
            <div className="bg-ink p-8">
              <h3 className="font-display text-2xl">What Influence Marketing Actually Solves</h3>
              <p className="mt-3 text-bone/80">Influence marketing closes the credibility gap. When a respected voice endorses your project, it feels less like an ad and more like a recommendation.</p>
              <ul className="mt-4 space-y-2 text-bone/85">{['Converts passive awareness into active conviction','Generates organic content that outperforms paid media in engagement','Builds a searchable, indexable trust trail around your project','Compresses time-to-decision for high-intent buyers'].map((l,i)=>(<li key={i} className="flex gap-3"><span className="text-accent">→</span>{l}</li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Why Builders Need Influence</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Six Reasons Every Developer Needs an <em className="text-accent not-italic">Influence-First Strategy</em></h2>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {reasons.map(([n,t,d,s],i) => (<motion.div variants={itemVariant} key={i} className="bg-ink p-7 h-full">
              <p className="font-tech text-xs uppercase tracking-wider2 text-accent">Reason {n}</p>
              <h3 className="font-display text-2xl mt-3 leading-[1.1]">{t}</h3>
              <p className="mt-3 text-sm text-bone/75">{d}</p>
              <p className="mt-5 pt-5 border-t border-line font-tech text-sm text-accent">{s}</p>
            </motion.div>))}
          </Stagger>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Comparison</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Influence Marketing <em className="text-accent not-italic">vs.</em> Traditional Paid Ads</h2>
            <p className="mt-6 text-muted max-w-2xl">Understanding where influence fits and why smart builders run both in combination.</p>
          </Reveal>
          <div className="mt-12 border-y border-line">
            <div className="grid grid-cols-3 gap-6 py-5 border-b border-line font-tech text-xs uppercase tracking-wider2 text-muted">
              <span>What You're Measuring</span><span>Paid Ads Only</span><span className="text-accent">Influence + Paid</span>
            </div>
            {compRows.map(([m,p,i],idx) => (<Reveal key={idx} delay={idx*0.04}><div className="grid grid-cols-3 gap-6 py-5 border-b border-line items-baseline">
              <span className="font-display text-lg">{m}</span><span className="text-bone/70">{p}</span><span className="text-bone">{i}</span>
            </div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Influence Services</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">The Complete Influence Stack <em className="text-accent not-italic">for Real Estate</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map(([n,t,d,img],i) => (<Reveal key={i} delay={i*0.04}><div className="bg-ink p-7 h-full card-hover">
              <div className="img-zoom h-44 mb-5 overflow-hidden"><img src={img} alt={t} className="w-full h-full object-cover grayscale" /></div>
              <p className="font-tech text-xs uppercase tracking-wider2 text-accent">{n}</p>
              <h3 className="font-display text-2xl mt-2 leading-[1.1]">{t}</h3>
              <p className="mt-3 text-sm text-bone/75">{d}</p>
            </div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Creator Selection Framework</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Not Every Creator is Right for Every Project. <em className="text-accent not-italic">We Know the Difference.</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
            {tiers.map(([t,r,d,b,img],i) => (<Reveal key={i} delay={i*0.05}><div className="bg-ink h-full">
              <div className="img-zoom h-44 overflow-hidden"><img src={img} alt={t} className="w-full h-full object-cover grayscale" /></div>
              <div className="p-6"><p className="font-display text-3xl text-accent">{t}</p><p className="font-tech text-xs uppercase tracking-wider2 text-muted mt-1">{r}</p><p className="mt-3 text-sm text-bone/80">{d}</p><p className="mt-4 text-xs text-bone/60">{b}</p></div>
            </div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Our Process</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">How We Build an Influence Campaign <em className="text-accent not-italic">That Actually Converts</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-line border border-line">
            {stages.map(([s,t,d,o],i) => (<Reveal key={i} delay={i*0.05}><div className="bg-ink p-6 h-full">
              <p className="font-tech text-5xl text-line">{String(i+1).padStart(2,'0')}</p>
              <p className="mt-3 font-tech text-xs uppercase tracking-wider2 text-accent">{s}</p>
              <h3 className="font-display text-xl mt-2 leading-[1.1]">{t}</h3>
              <p className="mt-3 text-sm text-bone/75">{d}</p>
              <p className="mt-4 pt-4 border-t border-line text-xs text-muted font-tech">{o}</p>
            </div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Content Formats</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Every Format Has a Job in the Funnel. <em className="text-accent not-italic">We Know Which Does What.</em></h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {formats.map(([t,d,r,img],i) => (<Reveal key={i} delay={i*0.04}><div className="bg-ink h-full card-hover">
              <div className="img-zoom h-52 overflow-hidden"><img src={img} alt={t} className="w-full h-full object-cover grayscale" /></div>
              <div className="p-6"><p className="font-tech text-xs uppercase tracking-wider2 text-accent">Reel</p><h3 className="font-display text-2xl mt-2">{t}</h3><p className="mt-3 text-sm text-bone/75">{d}</p><p className="mt-4 pt-4 border-t border-line font-tech text-xs uppercase tracking-wider2"><span className="text-muted">Funnel role:</span> {r}</p></div>
            </div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 border-t border-line">
        <Marquee items={['#CredibilityAtScale']} outline speed="slow" className="absolute inset-x-0 top-6 opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-5xl">Make Your Project the One <em className="text-accent not-italic">Everyone Is Talking About.</em></h2>
            <p className="mt-6 text-bone/80 max-w-2xl">We connect your project with the right voices — creators, critics, and community leaders who move audiences from scroll to site visit.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Start my influence campaign →</Link>
              <Link href="/contact" className="btn-ghost">See how we work</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
