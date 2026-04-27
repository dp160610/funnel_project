'use client';
import Link from 'next/link';
import Marquee from '../../components/Marquee';
import { Reveal, Stagger, itemVariant } from '../../components/Reveal';
import { motion } from 'framer-motion';

const tags = ['Demand Generation','Lead Capture','Scoring Logic','CRM Sync','Visit Conversion','Booking Attribution','Cost Ladder','Revenue Analytics'];

const stages = [
  { n: '01', stage: 'Stage 01 - TOFU', t: 'Demand Generation', d: 'Building brand salience with in-market buyers before they have entered active search. Video, display, and social reach campaigns engineered for maximum relevant reach.', tags: ['Meta Reach','YouTube Pre-Roll','Programmatic Display','Keyword Conquesting'], cost: 'Rs 18-35', costlbl: 'Cost Per Click' },
  { n: '02', stage: 'Stage 02 - MOFU', t: 'Lead Acquisition', d: 'Converting warm awareness into captured intent. High-intent lead gen forms, conversion-optimised landing pages, and search campaigns targeting buyers actively comparing options.', tags: ['Google Search','Meta Lead Gen','Dynamic Landing Pages','A/B Testing'], cost: 'Rs 190-800', costlbl: 'Cost Per Lead' },
  { n: '03', stage: 'Stage 03 - Lead Qualification', t: 'Intent Scoring & Filtering', d: 'Not every lead is a buyer. We deploy behavioural scoring models, CRM integrations, and intelligent drip sequences to surface only sales-ready prospects to your team.', tags: ['Lead Scoring','CRM Integration','Drip Sequences','Suppression Logic'], cost: 'Rs 500-2,500', costlbl: 'Qualified Lead' },
  { n: '04', stage: 'Stage 04 - BOFU', t: 'Site Visit Conversion', d: 'Getting a qualified prospect from screen to sales floor. Retargeting, WhatsApp automation, personalised offer overlays, and geo-fencing around your site office.', tags: ['Dynamic Retargeting','WhatsApp Automation','Geo-Fencing','Offer Engineering'], cost: 'Rs 6,000', costlbl: 'Cost Per Visit' },
  { n: '05', stage: 'Stage 05 - Closure', t: 'Booking & Revenue', d: 'The only metric that pays salaries. We track every booking back to originating ad, audience, creative, and platform, then reinvest into what actually closes deals.', tags: ['Booking Attribution','Closing Loop Tracking','Post-Visit Nurture','Revenue Analytics'], cost: 'Rs 25K-80K', costlbl: 'Cost Per Booking' },
];

const services = [
  { t: 'Performance Media Planning', d: 'Before a single rupee is placed, we build a full channel mix model — what percentage of your budget goes to awareness, acquisition, retargeting, and defence of existing leads. No guessing. Every allocation is backed by category benchmarks and project-specific data.', img: 'https://realatte.com/images/performance/offers/Media-Planning.jpg' },
  { t: 'Strategic Media Buying: Google, Meta & Beyond', d: 'Hyper-local targeting on Meta for geography-first buyers. High-intent search on Google for active researchers. Cross-platform synergy across YouTube, Display, and programmatic networks. Your brand, present at every stage of the consideration window.', img: 'https://realatte.com/images/performance/offers/Performance-Marketing.jpg' },
  { t: 'Conversion-Engineered Landing Pages', d: 'A landing page is not a brochure. It is a conversion instrument. We build pages with single-purpose intent — to capture a decision, not inform one. Persuasive architecture, social proof layering, micro-commitment flows, and heat-map-informed CTA placement.', img: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg' },
  { t: 'Performance-First Creative Production', d: 'Creative is the last unfair advantage. We produce ad creatives that are engineered for performance — not just aesthetics. Every static, video, carousel, and reel is built with a specific funnel stage and audience intent in mind. We A/B test relentlessly until we find the variant that wins.', img: 'https://realatte.com/images/performance/overview/1.jpg' },
  { t: 'Programmatic Advertising & DSP Buying', d: 'Reach in-market real estate buyers across thousands of premium publishers — the news sites, property portals, and financial platforms they read every day — with precision targeting and real-time bidding that keeps your CPM competitive and your impressions purposeful.', img: 'https://realatte.com/images/performance/overview/2.jpg' },
  { t: 'Lead Nurture & CRM Automation', d: '80% of bookings happen after the 5th touchpoint. We build automated nurture sequences — WhatsApp, email, retargeting — timed to buying behaviour signals. Your sales team only picks up the phone when the buyer is already warm. We fill the gap in between.', img: 'https://realatte.com/images/performance/overview/3.jpg' },
];

const platforms = [
  { t: 'Meta — Facebook & Instagram', sub: 'Where Real Estate Buyers Dream Before They Search', d: 'Meta is where purchase intent is formed, not declared. We reach buyers 30–90 days before they enter active search mode — with hyper-local targeting, lookalike audiences modelled on your past buyers, and creative sequencing that builds purchase desire over time.', list: ['Micro-geography targeting down to 1km radius','Custom audiences from site visitors, CRM data & portal traffic','Sequential creative journeys across awareness & conversion','Instant Form lead gen with CRM sync in real-time','Dynamic product ads for project catalogues','Retargeting across Instagram Reels, Stories & Feed'], img: 'https://images.pexels.com/photos/3178818/pexels-photo-3178818.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: 'Google — Search, Display & YouTube', sub: 'Capture Buyers Who Are Already Looking', d: 'Google is where declared intent lives. We dominate your category keywords, conquest competitor searches, and re-engage site visitors with display retargeting that keeps your project top-of-mind throughout a 90-day decision window.', list: ['High-intent keyword campaigns with negative list management','Competitor conquest campaigns for category capture','YouTube TrueView for project walkthroughs','RLSA campaigns for past site visitors'], img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { t: 'Programmatic, OTT & More', sub: 'Surround Your Buyer. Everywhere They Go.', d: 'Premium publishers. Financial news sites. Property portals. OTT platforms. We buy cross-platform inventory that puts your brand in front of the right affluence segment — wherever they consume content. One unified strategy, one cohesive buyer experience.', list: ['DSP-powered cross-publisher programmatic buying','OTT & connected TV for premium segment reach','LinkedIn for commercial & HNI buyer targeting','Real-time bidding with frequency control'], img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const ladder = [
  ['₹190–800 / Per Lead','Raw Lead (Cost Per Lead)','Any person who submits a form or calls. Unfiltered, unscored, unverified. This is what most agencies report as their headline metric.'],
  ['₹500–2,500 / Qualified Lead','Qualified Lead (Scored & Verified)','A buyer within budget range, relevant geography, and an active purchase timeline. Phone-verified and intent-scored. This is where your sales team\'s time should start.'],
  ['₹6,000 / Per Site Visit','Cost Per Site Visit','The moment a qualified prospect physically arrives at your site office or model flat. The most expensive and most valuable conversion event before the booking.'],
  ['₹20K–80K / Per Month','Media Planning Retainer','Strategic media allocation, channel-mix modelling, pacing reports, and continuous optimisation across all active platforms. The intelligence layer above execution.'],
  ['₹25K–80K / Per Booking','Cost Per Booking (Full Funnel)','The true north. Total marketing spend divided by total bookings in the period — accounting for every touchpoint, channel, creative, and nurture sequence that contributed.'],
];

const reporting = [
  { tag: 'Daily', t: 'Spend, leads & CPL - every morning', d: "A concise morning briefing that tells you exactly what was spent yesterday, how many leads came in, and whether your CPL is trending in the right direction - before you've had your coffee.", img: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { tag: 'Weekly', t: 'Full funnel - lead to qualified to visited', d: 'Every Monday, you receive a stage-by-stage view of your pipeline. How many leads moved from raw to qualified. How many qualified leads converted to site visits. Where the dropout is happening and why.', img: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { tag: 'Monthly', t: 'Bookings traced back to the originating ad', d: "Every booking from the month, attributed to its originating campaign, platform, creative, and audience. With recommendations for next month's budget allocation based on what actually drove closures - not impressions.", img: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Page() {
  return (
    <div data-testid="funnel-engineering-page">
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal><p className="eyebrow mb-8">#FunnelEngineering</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tightest max-w-[16ch]">
              Every Rupee. Every Lead. <em className="text-accent not-italic">Every Step — Engineered.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg text-bone/85">
              We don't run campaigns. We architect conversion pipelines — from the first impression a stranger sees to the moment they sign a booking cheque. No guesswork. No vanity metrics. No opaque reporting.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Show Me Where My Budget Leaks</Link>
              <a href="#funnel" className="btn-ghost">See Full Pipeline</a>
            </div>
          </Reveal>
        </div>
        <div className="relative z-10 border-t border-line/70">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line/70 border-l border-r border-line/70">
            {[['₹760Cr+','Managed Ad Spend'],['400+','Campaigns Tracked'],['20–35%','Avg CPB Reduction'],['72hr','Free Funnel Audit']].map(([v,l],i) => (
              <div key={i} className="py-6 px-5"><p className="font-tech font-bold text-2xl md:text-3xl">{v}</p><p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface/40 py-3"><Marquee items={tags} outline speed="slow" /></section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-6">What We Actually Do</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1]">Other agencies sell campaigns. <em className="text-accent not-italic">We sell outcomes.</em></h2>
          </Reveal>
          <div className="md:col-span-7 space-y-6">
            <Reveal><p className="text-bone/80 text-lg">Most agencies hand you a leads report and call it a day. We hand you a full-funnel audit - where the money entered, where it got stuck, and what it cost you at every stage of the buyer journey.</p></Reveal>
            <Reveal delay={0.1}><p className="text-bone/80 text-lg">Real estate is not an impulse buy. A buyer journey spans 30-180 days. We engineer every touchpoint of that journey with data, not instinct, so your sales team speaks to people who are already convinced.</p></Reveal>
            <Stagger className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                ['Signal-first targeting, not spray-and-pray','We map buyer intent signals — search behaviour, micro-location data, property portal activity — before we spend a single rupee on acquisition.'],
                ['Attribution that actually makes sense','Know exactly which platform, creative, audience segment, and ad copy generated your booking — not just your lead. We track through to CRM closure.'],
                ['Every leak in your pipeline, found and fixed','CPL looks great but bookings are thin? We diagnose the exact dropout point — whether it\'s a nurturing gap, a sales script failure, or a targeting mismatch.'],
                ['One team, end-to-end. Zero hand-off loss.','Media planning, creative, audience strategy, landing page, and CRM integration — all under one roof. No agency silos, no data lost in translation.'],
              ].map(([t,d],i) => (
                <motion.div variants={itemVariant} key={i} className="border border-line p-6 card-hover">
                  <h4 className="font-display text-xl">{t}</h4>
                  <p className="mt-3 text-sm text-bone/75">{d}</p>
                </motion.div>
              ))}
            </Stagger>
            <Link href="/contact" className="btn-primary mt-4">Audit my current campaigns</Link>
          </div>
        </div>
      </section>

      <section id="funnel" className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Full Funnel Architecture</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Five Stages. <em className="text-accent not-italic">One Accountable System.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">Most budgets die between awareness and closure because no one owns the middle. We map every stage, instrument every handoff, and assign a specific strategy with a specific benchmark to each one.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-px bg-line border border-line">
            {stages.map((s,i) => (
              <Reveal key={s.n} delay={i*0.05}>
                <div className="bg-ink p-7 h-full flex flex-col">
                  <p className="font-tech text-5xl text-line">{s.n}</p>
                  <p className="mt-3 font-tech text-[10px] uppercase tracking-wider2 text-accent">{s.stage}</p>
                  <h3 className="font-display text-2xl mt-2 leading-[1.1]">{s.t}</h3>
                  <p className="mt-3 text-sm text-bone/75 flex-1">{s.d}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">{s.tags.map((tg,j)=>(<li key={j} className="text-[10px] font-tech uppercase tracking-wider2 border border-line px-2 py-1 text-bone/70">{tg}</li>))}</ul>
                  <div className="mt-5 pt-5 border-t border-line">
                    <p className="font-tech font-bold text-lg">{s.cost}</p>
                    <p className="text-[10px] uppercase tracking-wider2 text-muted mt-1">{s.costlbl}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-line p-8 bg-ink">
            <p className="font-display text-2xl md:text-3xl max-w-2xl"><strong>Want to know your exact cost-per-booking potential?</strong> Share your current CPL and we will reverse-engineer the full funnel benchmark for your project size and ticket value within 72 hours.</p>
            <Link href="/contact" className="btn-primary">Calculate my funnel benchmarks</Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">What We Deploy</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Built to move one thing: <em className="text-accent not-italic">your cost-per-booking.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">Six specialised disciplines. One unified strategy. Every service connects directly to a stage of your pipeline — and a number on your P&L.</p>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map((s,i) => (
              <motion.div variants={itemVariant} key={i} className="bg-ink p-7 card-hover">
                <div className="img-zoom h-44 mb-5 overflow-hidden"><img src={s.img} alt={s.t} className="w-full h-full object-cover grayscale" /></div>
                <h3 className="font-display text-2xl leading-[1.1]">{s.t}</h3>
                <p className="mt-3 text-sm text-bone/75">{s.d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="border-y border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Platform Expertise</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Right platform. Right stage. <em className="text-accent not-italic">Right spend.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">Platform selection is strategy. We do not run everything everywhere - we allocate with surgical precision based on where your specific buyer is in their journey.</p>
          </Reveal>
          <div className="mt-16 space-y-px">
            {platforms.map((p,i) => (
              <Reveal key={i} delay={i*0.05}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-b border-line ${i%2===1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
                  <div className="md:col-span-5 img-zoom h-72 md:h-96 overflow-hidden"><img src={p.img} alt={p.t} className="w-full h-full object-cover grayscale" /></div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <p className="font-tech text-xs uppercase tracking-wider2 text-accent">{p.t}</p>
                    <h3 className="font-display text-3xl md:text-4xl mt-2 leading-[1.05]">{p.sub}</h3>
                    <p className="mt-4 text-bone/75 max-w-xl">{p.d}</p>
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-bone/85">{p.list.map((l,j)=>(<li key={j} className="border-l border-accent pl-3">{l}</li>))}</ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Full Cost Ladder</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Nothing hidden. <em className="text-accent not-italic">Every number accounted for.</em></h2>
            <p className="mt-6 text-muted max-w-3xl">We show you the cost at every stage of your pipeline - not just your CPL. The gap between Rs 350 CPL and Rs 45,000 cost-per-booking is where most budgets disappear without explanation.</p>
          </Reveal>
          <div className="mt-12 border-y border-line">
            {ladder.map(([cost,label,desc],i) => (
              <Reveal key={i} delay={i*0.04}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-7 border-b border-line items-baseline group hover:bg-surface/50 transition-colors">
                  <div className="md:col-span-3"><p className="font-tech font-bold text-xl md:text-2xl text-accent">{cost}</p></div>
                  <div className="md:col-span-3"><p className="font-display text-2xl">{label}</p></div>
                  <div className="md:col-span-6"><p className="text-bone/75">{desc}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted max-w-3xl"><strong>Important:</strong> These are category benchmarks across Mumbai, Pune, Bengaluru, Hyderabad, Delhi NCR, and Tier-2 markets. Actual numbers vary by ticket size, project stage, brand recognition, and city.</p>
          <Link href="/contact" className="btn-primary mt-8">Show me my full cost ladder</Link>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Reporting & Transparency</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Opacity is how agencies <em className="text-accent not-italic">hide bad performance.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">We give you access to every number, at every stage, at every frequency. You never need to ask for a report because it is already in your inbox before you think to ask.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {reporting.map((r,i) => (
              <Reveal key={i} delay={i*0.07}>
                <div className="bg-ink p-7 h-full flex flex-col">
                  <div className="img-zoom h-44 mb-5 overflow-hidden"><img src={r.img} alt={r.tag} className="w-full h-full object-cover grayscale" /></div>
                  <p className="eyebrow text-accent">{r.tag}</p>
                  <h3 className="font-display text-2xl mt-2">{r.t}</h3>
                  <p className="mt-3 text-bone/75 text-sm flex-1">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <Marquee items={['#ShowMeWhereMyBudgetLeaks']} outline speed="slow" className="absolute inset-x-0 top-0 opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-4xl">Show us your funnel. <em className="text-accent not-italic">We'll show you the leak.</em></h2>
            <p className="mt-6 text-bone/80 max-w-2xl">Bring us your current CPL, your lead-to-visit ratio, and your last 3 months of campaign data. We will return a full pipeline audit within 72 hours.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get my free funnel audit →</Link>
              <Link href="/contact" className="btn-ghost">See how we work</Link>
            </div>
            <p className="mt-8 text-sm text-muted">No cost. No lock-in. No agency fluff. Just the truth about your funnel.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
