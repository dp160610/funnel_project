'use client';
import Link from 'next/link';
import { useState } from 'react';
import Marquee from '../../components/Marquee';
import { Reveal, Stagger, itemVariant } from '../../components/Reveal';
import AnimatedCounter from '../../components/AnimatedCounter';
import { motion, AnimatePresence } from 'framer-motion';

const tags = ['CRM Integration','Automation Flows','Response Speed','Lead Scoring','Dashboards','Attribution Engine','WhatsApp Journeys','Daily Reporting'];

const services = [
  ['01','CRM Integration & Setup','Connect lead sources, campaigns, and sales teams into a single real-time pipeline so nothing falls through and every follow-up is triggered automatically.','Build a pipeline that closes itself','https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['02','Lead Management Dashboard','A single view of every lead: source, stage, quality score, last touchpoint, and follow-up status. Your team knows exactly who to call and when.',"Stop guessing who's hot",'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['03','Automated Nurture Flows','Behaviour-triggered WhatsApp, email, and SMS sequences that keep leads warm between sales calls without a single manual touchpoint.','Nurture at scale, without the headcount','https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['04','Campaign Attribution Engine','Every booking traced back to originating channel, audience, creative, and keyword so you know exactly what drove revenue and where to scale.','Attribute every rupee to a result','https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['05','Lead Scoring & Qualification','AI-assisted lead scoring surfaces highest-intent prospects in real time, so sales teams spend time on buyers who are ready, not browsers who are not.','Let data pick your next call','https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=900'],
  ['06','Reporting & Analytics','Daily pulse, weekly breakdown, and monthly attribution in dashboards your leadership can read and marketing can act on instantly.','Know your numbers before your agency does','https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=900'],
];

const leadRows = [
  { name: 'Rahul M. — Worli', score: 92, color: 'bg-accent', source: 'Meta Reels · Lookalike audience', stage: 'Site visit booked', nextAction: 'Confirm site visit Tue 4pm' },
  { name: 'Priya S. — Bandra', score: 78, color: 'bg-accent/80', source: 'Google Search · Brand keyword', stage: 'Qualified — financing approved', nextAction: 'Send floor plans + offer overlay' },
  { name: 'Vikram N. — Andheri', score: 61, color: 'bg-accent/60', source: 'YouTube TrueView · Project film', stage: 'Engaged — comparing options', nextAction: 'WhatsApp nurture · Day 4 of 7' },
  { name: 'Anjali R. — Powai', score: 44, color: 'bg-accent/40', source: 'Programmatic display · Retarget', stage: 'Cold-warm — considering area', nextAction: 'Drip sequence · awareness' },
  { name: 'Deepak C. — Thane', score: 29, color: 'bg-accent/25', source: 'Meta Lead Form · Budget lookalike', stage: 'Unqualified — outside budget band', nextAction: 'Suppress · re-target in 60 days' },
];

const action = [
  { tag: 'Dashboard Layer', t: 'Operational clarity that turns scattered lead data into one system', img: 'https://realatte.com/images/performance/offers/Media-Planning.jpg' },
  { tag: 'Automation Layer', t: 'Lead journeys and response workflows engineered around buyer behavior', img: 'https://realatte.com/images/performance/offers/hands-holding-smartphone-social-media-concept.jpg' },
  { tag: 'Reporting Layer', t: 'A richer operations experience with visible movement and control', img: 'https://realatte.com/images/performance/offers/Performance-Marketing.jpg' },
];

function LeadRow({ row, idx }) {
  const [open, setOpen] = useState(false);
  const tier = row.score >= 80 ? 'HOT' : row.score >= 60 ? 'WARM' : row.score >= 40 ? 'NURTURE' : 'COLD';
  const tierColor = row.score >= 80 ? 'text-accent' : row.score >= 60 ? 'text-bone' : 'text-muted';
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
      data-testid={`lead-row-${idx}`}
      className="relative grid grid-cols-12 gap-3 items-center px-2 py-2.5 hover:bg-surface/60 transition-colors duration-300 cursor-pointer rounded-sm"
    >
      <span className="col-span-5 md:col-span-4 font-tech text-xs md:text-sm truncate">{row.name}</span>
      <span className="hidden md:block md:col-span-5 text-xs text-muted truncate">{row.source} · <span className="text-bone/70">{row.stage}</span></span>
      <div className="col-span-5 md:col-span-2 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-surface relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${row.score}%` }}
            transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={`h-full ${row.color}`}
          />
        </div>
      </div>
      <div className="col-span-2 md:col-span-1 flex items-center justify-end gap-2">
        <span className="font-tech font-bold text-xs md:text-sm tabular-nums">{row.score}</span>
        <span className={`hidden md:inline font-tech text-[9px] tracking-wider2 uppercase ${tierColor}`}>{tier}</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute left-2 right-2 md:left-auto md:right-2 top-full z-20 mt-1 bg-ink border border-accent/60 px-4 py-3 shadow-2xl shadow-black/60 max-w-md md:w-[420px]"
            data-testid={`lead-tooltip-${idx}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-tech text-[10px] uppercase tracking-wider2 text-accent">{tier} · Score {row.score}/100</p>
              <span className="font-tech text-[9px] uppercase tracking-wider2 text-muted">click to pin</span>
            </div>
            <p className="font-display text-base md:text-lg mt-1 leading-tight">{row.name}</p>
            <div className="mt-3 grid grid-cols-1 gap-2 text-xs">
              <div className="flex gap-2"><span className="font-tech text-[10px] uppercase tracking-wider2 text-muted shrink-0 w-20">Source</span><span className="text-bone/85">{row.source}</span></div>
              <div className="flex gap-2"><span className="font-tech text-[10px] uppercase tracking-wider2 text-muted shrink-0 w-20">Stage</span><span className="text-bone/85">{row.stage}</span></div>
              <div className="flex gap-2"><span className="font-tech text-[10px] uppercase tracking-wider2 text-accent shrink-0 w-20">Next</span><span className="text-bone">{row.nextAction}</span></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Page() {
  return (
    <div data-testid="tech-page">
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal><p className="eyebrow mb-8">#SmartTechStacked</p></Reveal>
          <Reveal delay={0.1}><h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tightest max-w-[18ch]">Your Data Should Be Your Best Sales Tool. <em className="text-accent not-italic">Right Now It Isn't.</em></h1></Reveal>
          <Reveal delay={0.25}><p className="mt-8 max-w-2xl text-lg text-bone/85">Technology that makes every campaign faster, every lead smarter, and every rupee answerable to a booking.</p></Reveal>
          <Reveal delay={0.35}><div className="mt-10 flex flex-col sm:flex-row gap-4"><Link href="/contact" className="btn-primary">Audit my tech stack</Link><a href="#what" className="btn-ghost">See what's possible</a></div></Reveal>
        </div>
      </section>

      <section className="border-y border-line py-3"><Marquee items={tags} outline speed="slow" /></section>

      <section className="py-12 border-b border-line">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line border-l border-r border-line">
          {[['100%','Attribution Tracked'],['48hr','CRM Setup Time'],['10x','Faster Lead Response'],['Zero','Data Black Boxes']].map(([v,l],i)=>(<div key={i} className="py-6 px-5"><p className="font-tech font-bold text-2xl md:text-3xl">{v}</p><p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p></div>))}
        </div>
      </section>

      <section id="what" className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">What We Build</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">Technology That Turns Your Pipeline From a Spreadsheet <em className="text-accent not-italic">Into a System.</em></h2>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {services.map(([n,t,d,c,img],i) => (<motion.div variants={itemVariant} key={i} className="bg-ink p-7 card-hover h-full">
              <div className="img-zoom h-44 mb-5 overflow-hidden"><img src={img} alt={t} className="w-full h-full object-cover grayscale" /></div>
              <p className="font-tech text-xs uppercase tracking-wider2 text-accent">{n}</p>
              <h3 className="font-display text-2xl mt-2 leading-[1.1]">{t}</h3>
              <p className="mt-3 text-sm text-bone/75">{d}</p>
              <p className="mt-5 inline-flex items-center gap-2 font-tech text-xs uppercase tracking-wider2 text-bone/70">{c} →</p>
            </motion.div>))}
          </Stagger>
        </div>
      </section>

      <section className="border-t border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Live Pipeline Intelligence</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">This is what your sales team sees. <em className="text-accent not-italic">Every morning.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">One dashboard. Every lead scored, every follow-up triaged, every rupee accounted for. Built live in 48 hours. Hover any row for the why behind the score.</p>
          </Reveal>
          <div className="mt-12 border border-line bg-ink overflow-hidden">
            <div className="border-b border-line px-4 md:px-6 py-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <span className="hidden md:flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/40"/>
                  <span className="w-2.5 h-2.5 rounded-full bg-bone/20"/>
                  <span className="w-2.5 h-2.5 rounded-full bg-bone/20"/>
                </span>
                <p className="font-tech text-[10px] md:text-xs uppercase tracking-wider2 text-muted truncate">Property Edge CRM — Live Pipeline</p>
              </div>
              <span className="font-tech text-[10px] uppercase tracking-wider2 text-accent flex items-center gap-2 shrink-0"><span className="w-2 h-2 bg-accent rounded-full animate-pulse" />LIVE</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line">
              {[['2,847','Total Leads (MTD)','+12% WoW'],['634','Qualified Leads','22% conversion'],['218','Site Visits','3.4× avg'],['31','Bookings','₹38.5 Cr GMV']].map(([v,l,sub],i) => (
                <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{duration:.5,delay:i*.08}} viewport={{once:true}} key={i} className="bg-ink p-5 md:p-6 group hover:bg-surface/60 transition-colors duration-500">
                  <AnimatedCounter value={v} className="font-tech font-bold text-2xl md:text-3xl tabular-nums" />
                  <p className="text-[10px] uppercase tracking-wider2 text-muted mt-2">{l}</p>
                  <p className="text-[10px] font-tech text-accent mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">↗ {sub}</p>
                </motion.div>
              ))}
            </div>
            <div className="border-t border-line p-4 md:p-6 space-y-1">
              <div className="grid grid-cols-12 gap-3 px-2 pb-2 text-[10px] font-tech uppercase tracking-wider2 text-muted">
                <span className="col-span-5 md:col-span-4">Lead</span>
                <span className="hidden md:block md:col-span-5">Source · Stage</span>
                <span className="col-span-5 md:col-span-2 text-right md:text-left">Score</span>
                <span className="col-span-2 md:col-span-1 text-right">Status</span>
              </div>
              {leadRows.map((r, i) => (
                <LeadRow key={i} idx={i} row={r} />
              ))}
            </div>
            <p className="border-t border-line px-4 md:px-6 py-3 text-[10px] uppercase tracking-wider2 text-muted font-tech">Illustrative data — real dashboards built for your actual pipeline. Hover for context.</p>
          </div>
          <div className="mt-12 border border-accent p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-accent/5">
            <div>
              <p className="font-display text-3xl md:text-4xl">Results in 48 Hours. <em className="text-accent not-italic">Or We Work for Free.</em></p>
              <p className="mt-3 text-bone/80 max-w-2xl">We configure your full CRM, attribution engine, and lead management dashboard within 48 hours of kickoff — with your live data flowing through it. If we miss that window, we extend the engagement at no charge. No small print.</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">Claim the 48hr Setup →</Link>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">RealTech in Action</p>
            <h2 className="font-display text-4xl md:text-5xl tracking-tightest max-w-3xl">Real dashboards. Live pipelines. <em className="text-accent not-italic">Attribution that closes the loop.</em></h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {action.map((c,i) => (<Reveal key={i} delay={i*0.06}><article className="border border-line bg-ink card-hover">
              <div className="img-zoom h-56 overflow-hidden"><img src={c.img} alt="" className="w-full h-full object-cover grayscale" /></div>
              <div className="p-6"><p className="font-tech text-xs uppercase tracking-wider2 text-accent">{c.tag}</p><h3 className="font-display text-2xl mt-3 leading-[1.1]">{c.t}</h3></div>
            </article></Reveal>))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32 border-t border-line">
        <Marquee items={['#YourDataShouldCloseDeals']} outline speed="slow" className="absolute inset-x-0 top-6 opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-4xl">Your Next Project Should Run on Data. <em className="text-accent not-italic">Not Instinct.</em></h2>
            <p className="mt-6 text-bone/80 max-w-2xl">Tell us your current setup. We'll map the gaps, build the integrations, and have your pipeline running on full attribution within 48 hours.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Audit my tech stack — Free →</Link>
              <Link href="/contact" className="btn-ghost">Talk to a tech strategist</Link>
            </div>
            <p className="mt-8 text-sm text-muted">No lock-in. No long contracts. Results in 48 hours or we work for free.</p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
