'use client';
import Link from 'next/link';
import { ArrowRight, Check, X, Plus, Minus } from 'lucide-react';
import Marquee from '../components/Marquee';
import LogoWall from '../components/LogoWall';
import { Reveal, Stagger, itemVariant } from '../components/Reveal';
import AnimatedCounter from '../components/AnimatedCounter';
import ParallaxImage from '../components/ParallaxImage';
import FAQ from '../components/FAQ';
import TrustStrip from '../components/TrustStrip';
import CinematicBreak from '../components/CinematicBreak';
import CitiesGallery from '../components/CitiesGallery';
import FeaturedProjects from '../components/FeaturedProjects';
import PinnedShowcase from '../components/PinnedShowcase';
import AwardsRecognition from '../components/AwardsRecognition';
import PrincipalCard from '../components/PrincipalCard';
import MonogramDivider from '../components/MonogramDivider';
import { motion } from 'framer-motion';

const services = [
  { n: '01', t: 'Funnel Engineering', d: 'The only agency in India that architects your entire buyer journey - from first impression to signed booking - as a single connected, measured, optimised system.', img: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=900', href: '/funnelengineering' },
  { n: '02', t: 'Branding', d: "The brand you build before your campaign goes live determines the CPL you'll pay after it does. Identity, story, and creative - starting from a position of trust, not obscurity.", img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=900', href: '/branding' },
  { n: '03', t: 'Influence', d: 'Reels, creators, social optimisation, SEO. The layer of organic credibility that paid campaigns will never manufacture alone - and once built, keeps working after the budget runs out.', img: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg?auto=compress&cs=tinysrgb&w=900', href: '/influence' },
  { n: '04', t: 'RealTech', d: 'CRM, lead scoring, WhatsApp automation, attribution dashboards. The infrastructure that turns campaign data into commercial intelligence you can act on in real time.', img: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=900', href: '/tech' },
  { n: '05', t: 'Sales Team & Pitching', d: 'A field-ready sales team trained to pitch, persuade, and close. From site visit scripting to objection handling - we put the right people in the room with the right narrative, so your project sells itself.', img: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=900', href: '/contact' },
];

const stages = [
  { n: '01', tag: 'Awareness', t: 'Build the Brand Before the Campaign', d: 'We establish category presence — branding, OOH, creator seeding, organic SEO — so your project is the one buyers already know when paid ads find them.', m: 'CPL drops 25–40% when brand is established first.', img: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1100' },
  { n: '02', tag: 'Performance', t: 'Run Campaigns Wired to Booking Data', d: 'Meta, Google, and programmatic campaigns with closed-loop attribution from day one. Every rupee tracked to a campaign, a creative, and ultimately a booking.', m: 'Full attribution reduces wasted spend by 20–35%.', img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1100' },
  { n: '03', tag: 'Lead Scoring', t: 'Filter Intent Before It Reaches Your Team', d: 'Proprietary lead scoring ranks every inquiry by budget signal, project match, and engagement depth. Your closers only see leads with a >60% booking probability.', m: 'Lead scoring consistently doubles close rates.', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1100' },
  { n: '04', tag: 'Nurture', t: 'Stay Warm for the Full 6–12 Week Cycle', d: 'Automated WhatsApp sequences, retargeting, and CRM-driven touchpoints keep qualified leads engaged through the real estate decision cycle — so silence never kills a deal.', m: 'Structured nurture recovers 35% of leads marked cold.', img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=1100' },
  { n: '05', tag: 'Site Visit', t: 'Convert Conversations Into Footfall', d: 'Dedicated site visit campaigns — incentivised offers, bespoke messaging per buyer profile, event-based triggers — turn WhatsApp conversations into physical site visits.', m: 'Engineered site visit rate: 3–5× industry average.', img: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1100' },
  { n: '06', tag: 'Booking', t: 'Answer the Only Question That Matters', d: 'Every booking is sourced back to its originating campaign, creative, and channel. Your MD can see exactly which ad sold which flat — in real time, on a single dashboard.', m: 'Closed-loop attribution = complete CPB visibility.', img: 'https://images.pexels.com/photos/4386326/pexels-photo-4386326.jpeg?auto=compress&cs=tinysrgb&w=1100' },
];

const truths = [
  { n: '01', t: 'Your Best Closers Are Working on Your Worst Leads', d: 'Without lead scoring, your top sales executives spend 70% of their day chasing people who are curious, not committed. Funnel engineering ends this by filtering intent before a lead ever reaches the floor.', kicker: "Your sales team's time is your most expensive resource. We stop wasting it.", stat: 'Lead scoring consistently doubles average close rates.', img: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '02', t: "You're Celebrating a CPL That's Quietly Killing You", d: "A ₹400 CPL feels like a win. It isn't — not when only 1 in 80 leads produces a booking. Your real cost of sale is your CPB. Most developers have never calculated it. We put it on a dashboard on day one.", kicker: "The metric you track determines the outcome you get. You're tracking the wrong one.", stat: 'Industry CPB averages 80–150× CPL.', img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '03', t: 'Your Buyer Is Ready in 8 Weeks. Your System Forgot Them in 8 Days.', d: 'Real estate decisions take 6–12 weeks. Without structured nurturing, an interested buyer goes cold and your CPL becomes a write-off. The funnel keeps them warm while your team focuses on closures.', kicker: "You didn't lose that lead to a competitor. You lost them to silence.", stat: 'Average real estate decision cycle: 6–12 weeks.', img: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=900' },
  { n: '04', t: "You Can't Cut What You've Never Measured", d: 'If you cannot trace a booking back to the campaign that produced it, you are funding three things: what works, what doesn\'t, and what you have no idea about. Attribution alone reduces effective CPB by 20–35%.', kicker: "Unattributed marketing isn't a strategy. It's a donation with a logo on it.", stat: 'Closed-loop attribution reduces CPB by 20–35%.', img: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=900' },
];

const testimonials = [
  { city: 'Mumbai', headline: '−31% CPB', sub: 'Cost-per-booking reduction in 90 days', img: 'https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1100', quote: '“We had three agencies before Property Edge. The difference is attribution - they can tell you exactly which creative sold which flat. Our MD stopped asking \"is marketing working?\" within the first month.', stats: [['31%','CPB Reduction'],['2.4×','Close Rate'],['90 days','To Results']], who: { ini: 'DM', name: 'Deepak Mehta', role: 'VP Marketing, Lodha Palava' } },
  { city: 'Bengaluru', headline: '2× Close Rate', sub: 'After AI lead scoring implementation', img: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1100', quote: '“Lead scoring changed everything for my team. We stopped wasting site visits on window shoppers. Every lead that comes to us now has already been ranked, profiled, and pre-qualified. Our closers only talk to buyers.', stats: [['2×','Close Rate'],['68%','Less Waste'],['₹12 Cr','Extra Revenue']], who: { ini: 'PN', name: 'Priya Nair', role: 'Head of Sales, Prestige Estates' } },
  { city: 'Pune', headline: '3.8× Site Visits', sub: 'From engineered site visit campaigns', img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1100', quote: '“The 72-hour audit they gave us was more insightful than six months of internal review. Within a week we had a full funnel plan. Three months later, our site visit volume was almost four times what it was - with better quality buyers.', stats: [['3.8×','Site Visit Rate'],['28%','Lower CPL'],['6 wks','To Full Funnel']], who: { ini: 'RA', name: 'Rahul Agarwal', role: 'Director, Sales & Marketing, Godrej Properties' } },
];

const leakyList = [
  'Leads come in from multiple sources with no tracking',
  'No attribution — no one knows what drove the booking',
  'Sales team wastes time on unqualified window shoppers',
  '80–150× gap between CPL and actual cost-per-booking',
  'Leads go cold during the 6–12 week decision cycle',
  'Site visits happen by accident, not by design',
  'CEO asks "what is marketing doing?" every quarter',
];
const engineeredList = [
  'Every lead traced to campaign, creative, and channel',
  'Full closed-loop attribution from first click to booking',
  'AI lead scoring: only >60% probability leads reach closers',
  'CPB reduced 20–35% within first 90 days of engagement',
  'Automated nurture sequences keep leads warm for 12 weeks',
  'Engineered site visit campaigns: 3–5× industry average rate',
  'CEO sees exactly which ad sold which flat — in real time',
];

const marqueeServices = ['Funnel Engineering','Branding','Influence','RealTech','Performance Media','Lead Nurture','Site Visit Campaigns','Booking Attribution','OOH & Mainline','Video Production','Creator Marketing','CRM & Automation'];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section data-testid="hero-section" className="relative min-h-[100vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal>
            <p className="eyebrow mb-8">Real Estate Marketing That Earns One Thing First. Your Trust.</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-[0.95] tracking-tightest max-w-[18ch]">
              Sold Units Don't Come<br/>From Better Ads.<br/>They Come From a<br/><em className="text-accent not-italic">Better Funnel Engineering.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-10 max-w-2xl text-lg text-bone/85 leading-relaxed">
              Most developers are sitting on ₹30-50L in monthly ad spend with no clear answer to the one question that matters — <strong className="text-bone">which campaign closed which flat?</strong> We built Property Edge to end that conversation permanently.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="hero-primary-cta" className="btn-primary">Tear my funnel apart →</Link>
              <Link href="/funnelengineering" data-testid="hero-secondary-cta" className="btn-ghost">Show me what funnel engineering looks like</Link>
            </div>
          </Reveal>
        </div>
        {/* Hero stat strip */}
        <div className="relative z-10 border-t border-line/70">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line/70 border-l border-r border-line/70">
            {[['72hr','Funnel audit turnaround'],['80–150×','Industry avg CPB vs CPL'],['20–35%','CPB reduction with attribution'],['2×','Close rate with lead scoring']].map(([v,l],i) => (
              <div key={i} className="py-6 px-5">
                <AnimatedCounter value={v} className="font-tech font-bold text-2xl md:text-3xl numlabel tabular-nums" />
                <p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live funnel map quick-strip */}
      <section className="bg-surface/50 border-b border-line py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h3 className="font-display text-3xl md:text-4xl tracking-tightest">Live Funnel Map <em className="text-accent not-italic">— Booking Attribution</em></h3>
            <div className="flex gap-6 text-sm font-tech uppercase tracking-wider2 text-muted">
              <span><span className="text-accent">●</span> Cost Per Booking <strong className="text-bone">Tracked</strong></span>
              <span><span className="text-accent">●</span> Lead Scoring <strong className="text-bone">Active</strong></span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-line border border-line">
            {[['01','Demand','Awareness'],['02','Leads','Acquisition'],['03','Qualified','Scoring'],['04','Site Visits','Conversion'],['05','Bookings','Revenue']].map(([n,t,s],i) => (
              <div key={i} className="bg-ink p-6 group hover:bg-accent transition-colors duration-700 relative overflow-hidden">
                <p className="text-xs font-tech tracking-wider2 text-muted group-hover:text-white/70">{n}</p>
                <p className="font-display text-2xl mt-3">{t}</p>
                <p className="text-xs mt-1 uppercase tracking-wider2 text-muted group-hover:text-white/70">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee services */}
      <section className="border-b border-line py-2 bg-ink">
        <Marquee items={marqueeServices} outline speed="slow" />
      </section>

      {/* LOGOS */}
      <LogoWall />

      {/* TRUST STRIP — featured-in + credibility tiles */}
      <TrustStrip />

      {/* Boardroom Silence */}
      <section data-testid="boardroom-section" className="py-28 md:py-40 bg-ink">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-1">
            <p className="font-tech text-accent text-2xl">#</p>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">#TheAgencyThatStopsAtBookings</p>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-tightest leading-[1.02]">
                Your Campaigns Are Live. Your Team Is Calling. Your Budget Is Burning. And Your Boardroom Still Can't Answer — <em className="text-accent not-italic">Which Ad Sold That Flat?</em>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-10 text-lg text-bone/80 leading-relaxed max-w-3xl">
                That silence in the room - when your MD asks which campaign produced which booking and nobody has a clean answer - is not a data problem. It is a funnel problem. It means every stage of your buyer's journey is running disconnected, unmeasured, and unaccountable. We fix the structure. We engineer the stages. We close the loop. And we make sure the next time that question gets asked in a boardroom, the answer is sitting in a dashboard - sharp, sourced, and indisputable.
              </p>
              <Link href="/contact" data-testid="boardroom-cta" className="btn-primary mt-10">End the boardroom silence →</Link>
            </Reveal>
          </div>
          <div className="md:col-span-4 img-zoom">
            <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Boardroom silence" className="w-full h-[500px] object-cover grayscale" />
          </div>
        </div>
      </section>

      {/* Leaky vs Engineered */}
      <section data-testid="comparison-section" className="border-y border-line bg-surface/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
          <Reveal>
            <p className="eyebrow mb-6">The Real Difference</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">
              Leaky Funnel <em className="text-accent not-italic">vs</em> Engineered Funnel
            </h2>
            <p className="mt-6 text-muted max-w-2xl">Most developers are unknowingly running stage one of a funnel and calling it a full campaign.</p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
            <div className="bg-ink p-8 md:p-10 relative" data-testid="leaky-funnel-card">
              <div className="img-zoom mb-6 h-56 overflow-hidden">
                <img src="https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Leaky funnel" className="w-full h-full object-cover grayscale" />
              </div>
              <p className="eyebrow text-accent">Typical Leaky Funnel</p>
              <h3 className="font-display text-3xl mt-3">What most agencies deliver</h3>
              <ul className="mt-6 space-y-3">
                {leakyList.map((l,i) => (
                  <li key={i} className="flex gap-3 text-bone/80"><X size={16} className="mt-1 shrink-0 text-accent" />{l}</li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-line">
                <p className="font-tech text-4xl font-bold">80–150×</p>
                <p className="text-xs uppercase tracking-wider2 text-muted mt-1">CPL to CPB Gap</p>
                <p className="text-sm text-muted mt-3">The average developer has no idea what their true cost-per-booking is.</p>
              </div>
            </div>
            <div className="bg-ink p-8 md:p-10 relative" data-testid="engineered-funnel-card">
              <div className="img-zoom mb-6 h-56 overflow-hidden">
                <img src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Engineered funnel" className="w-full h-full object-cover" />
              </div>
              <p className="eyebrow text-bone">Property Edge Engineered Funnel</p>
              <h3 className="font-display text-3xl mt-3">What we build for our clients</h3>
              <ul className="mt-6 space-y-3">
                {engineeredList.map((l,i) => (
                  <li key={i} className="flex gap-3 text-bone/90"><Check size={16} className="mt-1 shrink-0 text-accent" />{l}</li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-line">
                <p className="font-tech text-4xl font-bold text-accent">20–35%</p>
                <p className="text-xs uppercase tracking-wider2 text-muted mt-1">CPB Reduction</p>
                <Link href="/contact" data-testid="comparison-cta" className="inline-flex items-center gap-2 mt-4 link-underline font-tech text-xs uppercase tracking-wider2">Find my funnel leaks — Free 72-hr audit <ArrowRight size={14} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section data-testid="services-section" className="py-24 md:py-32 bg-ink">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Five Disciplines</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">
              One Vision. Five Levers. <em className="text-accent not-italic">Every Launch Sold Out.</em>
            </h2>
            <p className="mt-6 text-muted max-w-2xl">Every service at Property Edge is a spoke in the same wheel. Branding builds the trust that lowers your CPL. Influence builds the credibility that raises your site visit rate. Performance builds the machine that converts both into bookings.</p>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map((s, i) => (
              <motion.div variants={itemVariant} key={s.n} className={`bg-ink card-hover group relative ${i === 0 ? 'lg:row-span-2 lg:col-span-1' : ''}`}>
                <Link href={s.href} data-testid={`service-${s.n}-link`} className="block p-8 h-full">
                  <div className="img-zoom h-48 lg:h-56 mb-6 overflow-hidden">
                    <img src={s.img} alt={s.t} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <p className="font-tech text-xs tracking-wider2 text-accent">{s.n}</p>
                  <h3 className="font-display text-3xl md:text-4xl mt-3 leading-[1.05]">{s.t}</h3>
                  <p className="mt-4 text-bone/70 leading-relaxed">{s.d}</p>
                  <p className="mt-6 inline-flex items-center gap-2 font-tech text-xs uppercase tracking-wider2 text-bone/60 group-hover:text-accent transition-colors">Explore <ArrowRight size={14} /></p>
                </Link>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* HOW IT WORKS — 6 STAGES */}
      <section data-testid="stages-section" className="border-t border-line bg-surface/30">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="eyebrow mb-6">How It Works</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">
              The Funnel From First Impression <em className="text-accent not-italic">to Signed Booking</em>
            </h2>
            <p className="mt-6 text-muted max-w-2xl">Six stages. Every one connected. Every one measured. No stage runs in isolation — that's what makes it a funnel, not just a campaign.</p>
          </Reveal>
          <div className="mt-20 space-y-px">
            {stages.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-line ${i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''}`}>
                  <div className="md:col-span-5 img-zoom h-72 md:h-96 overflow-hidden">
                    <img src={s.img} alt={s.tag} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="md:col-span-7 flex flex-col justify-center">
                    <div className="flex items-baseline gap-6">
                      <span className="font-tech text-6xl md:text-8xl text-line tabular-nums">{s.n}</span>
                      <span className="eyebrow">{s.tag}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl mt-4 leading-[1.05] tracking-tightest">{s.t}</h3>
                    <p className="mt-4 text-bone/75 max-w-xl">{s.d}</p>
                    <p className="mt-5 inline-flex items-center font-tech text-sm text-accent border-l-2 border-accent pl-4">{s.m}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-display text-3xl md:text-5xl tracking-tightest max-w-2xl">Ready to see exactly where your funnel is leaking?</p>
            <Link href="/contact" data-testid="stages-cta" className="btn-primary">Get my 72-hour free audit →</Link>
          </div>
        </div>
      </section>

      {/* CINEMATIC BREAK — emotional anchor between systems and outcomes */}
      <CinematicBreak
        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="What We're Really Marketing"
        headline="A home is the largest emotional decision most families ever make. Our job is to make sure the right one"
        accentWord="finds the right buyer."
        attribution="Property Edge Founding Note"
      />

      {/* PINNED CINEMATIC SHOWCASE — sticky scroll-driven 4-stage reveal */}
      <PinnedShowcase />

      {/* TRUTH SECTION */}
      <section data-testid="truth-section" className="py-24 md:py-32 bg-ink">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Uncomfortable Truth</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-5xl">
              Your Funnel Isn't Leaking Because the Market Is Hard. <em className="text-accent not-italic">It's Leaking Because Nobody Built It.</em>
            </h2>
            <p className="mt-6 text-muted max-w-2xl">Most real estate marketing isn't engineered — it's assembled. Here's what's actually happening in your acquisition pipeline right now.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line">
            {truths.map((t,i) => (
              <Reveal key={t.n} delay={i*0.05}>
                <div className="bg-ink p-8 md:p-10 h-full flex flex-col">
                  <p className="font-tech text-7xl text-line">{t.n}</p>
                  <h3 className="font-display text-2xl md:text-3xl mt-2 leading-[1.1]">{t.t}</h3>
                  <p className="mt-5 text-bone/75">{t.d}</p>
                  <div className="img-zoom h-44 my-6 overflow-hidden">
                    <img src={t.img} alt={t.t} className="w-full h-full object-cover grayscale" />
                  </div>
                  <p className="font-display italic text-bone/90 text-lg leading-snug">"{t.kicker}"</p>
                  <p className="mt-4 pt-4 border-t border-line font-tech text-sm text-accent">{t.stat}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section data-testid="results-section" className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Client Results</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">
              What Changes When the Funnel <em className="text-accent not-italic">Is Actually Engineered</em>
            </h2>
            <p className="mt-6 text-muted max-w-2xl">Three developers. Three cities. Three measurable outcomes — all within 90 days of engagement.</p>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t,i) => (
              <Reveal key={i} delay={i*0.1}>
                <article data-testid={`testimonial-${i}`} className="bg-ink border border-line h-full flex flex-col card-hover">
                  <div className="img-zoom h-56 overflow-hidden">
                    <img src={t.img} alt={t.city} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center justify-between">
                      <p className="font-tech text-xs uppercase tracking-wider2 text-muted">{t.city}</p>
                      <span className="font-tech text-[10px] uppercase tracking-wider2 text-accent border border-accent/40 px-2 py-1">Verified</span>
                    </div>
                    <p className="font-display text-3xl md:text-4xl mt-3 leading-[1] text-accent">{t.headline}</p>
                    <p className="text-sm text-muted mt-1">{t.sub}</p>
                    <p className="mt-6 font-display italic text-bone/90 leading-snug">{t.quote}</p>
                    <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-line">
                      {t.stats.map(([v,l],j) => (
                        <div key={j}>
                          <p className="font-tech font-bold text-base">{v}</p>
                          <p className="text-[10px] uppercase tracking-wider2 text-muted mt-1">{l}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-line flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-accent/20 text-accent flex items-center justify-center font-tech text-sm">{t.who.ini}</span>
                      <div>
                        <p className="font-tech text-sm">{t.who.name}</p>
                        <p className="text-xs text-muted">{t.who.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
            {[['50+','Projects Delivered'],['₹4,200 Cr+','Revenue Attributed'],['12','Cities Across India'],['4.9 / 5','Average NPS Score']].map(([v,l],i) => (
              <div key={i} className="bg-ink p-6 md:p-8">
                <AnimatedCounter value={v} className="font-tech font-bold text-3xl md:text-5xl tabular-nums" />
                <p className="text-xs uppercase tracking-wider2 text-muted mt-2">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* FEATURED PROJECTS — luxury work showcase */}
      <FeaturedProjects />

      {/* CITIES — markets we operate in */}
      <CitiesGallery />

      {/* MONOGRAM DIVIDER */}
      <MonogramDivider />

      {/* PRINCIPAL — founder-led trust */}
      <PrincipalCard />

      {/* AWARDS & RECOGNITION */}
      <AwardsRecognition />

      {/* LUXURY CINEMATIC BREAK before final CTA */}
      <CinematicBreak
        src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
        eyebrow="The Brief"
        headline="Tell us about your project. We'll tell you what your funnel is actually"
        accentWord="costing you."
        attribution="72-Hour Free Audit"
        height="h-[70vh]"
      />

      {/* FINAL CTA */}
      <section data-testid="final-cta" className="relative overflow-hidden bg-ink py-24 md:py-32 border-t border-line">
        <Marquee items={['#IfItDoesntCloseItDoesntCount']} outline speed="slow" className="absolute inset-x-0 top-6 opacity-40" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-5xl">
              You Don't Have a Marketing Problem. <em className="text-accent not-italic">You Have a Funnel That Was Never Built.</em>
            </h2>
            <p className="mt-8 text-lg text-bone/80 max-w-3xl">
              Most developers don't need more leads. They need a system that knows what to do with the ones they already have. Tell us your project — we'll show you the leak in 72 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="final-primary-cta" className="btn-primary">Audit my funnel. Give me the uncomfortable truth →</Link>
              <Link href="/funnelengineering" data-testid="final-secondary-cta" className="btn-ghost">I want to see how this works first</Link>
            </div>
            <p className="mt-10 text-sm text-muted max-w-xl">We work exclusively in real estate. We answer exclusively to your cost per booking. Everything else is noise.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
