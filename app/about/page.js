'use client';
import Link from 'next/link';
import { Reveal, Stagger, itemVariant } from '../../components/Reveal';
import Marquee from '../../components/Marquee';
import AnimatedCounter from '../../components/AnimatedCounter';
import { motion } from 'framer-motion';

const principles = [
  ['01', 'We work for one number.', 'Cost per booking. Not impressions, not CPL, not "engagement". Every campaign, every creative, every report ladders up to one P&L line — your booked inventory.'],
  ['02', 'We refuse to be a vendor.', 'We sit on your side of the table. We will tell you when your pricing is wrong, when your sales script is broken, when your project positioning is muddled. Agencies who only nod sell more retainers and fewer flats.'],
  ['03', 'We engineer, we do not improvise.', 'Every funnel we ship is documented, instrumented, and accountable. If a stage is leaking, we can show you the exact drop-off in 90 seconds. No hand-waving, no "the algorithm changed", no excuses dressed as insight.'],
  ['04', 'We are real estate only. Permanently.', 'No FMCG cousins, no D2C side-projects. Every team member, every playbook, every benchmark is calibrated to the 6–12 week real estate decision cycle. Specialisation is the only honest moat.'],
];

const team = [
  { ini: 'PE', name: 'Principal Strategy', role: 'Funnel architecture · Cost modelling · MD-room conversations' },
  { ini: 'BR', name: 'Brand Studio', role: 'Positioning · Identity systems · Films · Mainline campaigns' },
  { ini: 'PM', name: 'Performance Media', role: 'Meta · Google · Programmatic · DSP · Attribution engineering' },
  { ini: 'IN', name: 'Influence & Content', role: 'Creator partnerships · Reels · SEO · Digital PR' },
  { ini: 'RT', name: 'RealTech', role: 'CRM · Lead scoring · WhatsApp automation · Dashboards' },
  { ini: 'CL', name: 'Closure & Sales', role: 'Site visit choreography · Pitch training · Objection playbooks' },
];

const timeline = [
  ['2019', 'First funnel engagement.', 'Started with one Mumbai developer who was burning ₹40L/month with zero attribution. Recovered 28% of CPB in 90 days. The methodology wrote itself.'],
  ['2021', 'Closed-loop attribution shipped.', 'Built proprietary stack connecting Meta, Google, CRMs, and site-visit logs into one dashboard. First in category to answer "which ad sold which flat" in real time.'],
  ['2023', 'Five disciplines, one wheel.', 'Brand · Influence · Performance · RealTech · Sales — unified under a single cost-per-booking accountability model.'],
  ['2025', 'Twelve cities. ₹760 Cr+ managed.', 'Scaled across India\'s top metros and Tier-2 launch markets. 50+ projects. ₹4,200 Cr+ revenue attributed back to specific campaigns.'],
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-ink">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pt-32 pb-16 md:pb-24">
          <Reveal><p className="eyebrow mb-8">About — Property Edge Consulting</p></Reveal>
          <Reveal delay={0.1}>
            <h1 className="hero-title font-display text-[40px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-[0.95] tracking-tightest max-w-[16ch]">
              We Were Built For One Conversation. <em className="text-accent not-italic">"Which Ad Sold That Flat?"</em>
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-2xl text-lg text-bone/85">
              Property Edge Consulting Pvt Ltd is an Indian real estate marketing agency engineered around a single accountability — your cost per booking. We don't run campaigns. We architect the system that turns the campaigns into closures.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="about-cta-primary" className="btn-primary">Tell us about your project →</Link>
              <Link href="/funnelengineering" data-testid="about-cta-secondary" className="btn-ghost">See how we work</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-line bg-surface/40 py-14">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line">
          {[
            ['₹760Cr+','Ad Spend Managed'],
            ['50+','Projects Delivered'],
            ['12','Cities Across India'],
            ['4.9/5','Average Client NPS'],
          ].map(([v,l],i) => (
            <Reveal key={i} delay={i*0.06}><div className="bg-ink p-6 md:p-8">
              <AnimatedCounter value={v} className="font-tech font-bold text-4xl md:text-5xl tabular-nums" />
              <p className="mt-2 text-[11px] uppercase tracking-wider2 text-muted">{l}</p>
            </div></Reveal>
          ))}
        </div>
      </section>

      {/* WHY WE EXIST */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-6">Why We Exist</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1]">
              Most agencies sell <em className="text-accent not-italic">activity.</em> We sell the <em className="text-accent not-italic">answer.</em>
            </h2>
          </Reveal>
          <div className="md:col-span-7 space-y-6">
            <Reveal><p className="text-bone/80 text-lg leading-relaxed">In every Indian developer's marketing review, there is one moment that matters more than any deck — when the MD asks <strong className="text-bone">"which campaign produced this booking?"</strong> and the room goes quiet. That silence is what we exist to end.</p></Reveal>
            <Reveal delay={0.1}><p className="text-bone/80 text-lg leading-relaxed">We started Property Edge after watching too many great projects get marketed by agencies that confused motion with progress — daily reports, vanity metrics, "creative awards", but no straight line from rupee in to flat sold. We rebuilt the model from the booking backwards.</p></Reveal>
            <Reveal delay={0.2}><p className="text-bone/80 text-lg leading-relaxed">Today we work with developers who would rather hear an uncomfortable diagnosis than another optimistic forecast. If that sounds like you, we should talk.</p></Reveal>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="border-y border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Operating Principles</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Four non-negotiables. <em className="text-accent not-italic">Every engagement.</em></h2>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
            {principles.map(([n,t,d]) => (
              <motion.div variants={itemVariant} key={n} className="bg-ink p-8 md:p-10 card-hover">
                <p className="font-tech text-7xl text-line leading-none">{n}</p>
                <h3 className="font-display text-3xl md:text-4xl mt-4 leading-[1.05]">{t}</h3>
                <p className="mt-4 text-bone/75 leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Story</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">From one Mumbai project to <em className="text-accent not-italic">twelve cities.</em></h2>
          </Reveal>
          <div className="mt-16 border-t border-line">
            {timeline.map(([y,t,d],i) => (
              <Reveal key={y} delay={i*0.06}>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-line group hover:bg-surface/40 transition-colors duration-500">
                  <div className="md:col-span-2"><p className="font-tech text-5xl md:text-6xl font-bold tabular-nums">{y}</p></div>
                  <div className="md:col-span-4"><h3 className="font-display text-2xl md:text-3xl leading-[1.1]">{t}</h3></div>
                  <div className="md:col-span-6"><p className="text-bone/75">{d}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM / DISCIPLINES */}
      <section className="border-y border-line bg-surface/30 py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <Reveal>
            <p className="eyebrow mb-6">The Studio</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">Six disciplines. One accountability. <em className="text-accent not-italic">Zero hand-off loss.</em></h2>
            <p className="mt-6 text-muted max-w-2xl">We are not a network of freelancers stitched together. Every discipline sits in one room, on one positioning document, against one cost-per-booking target.</p>
          </Reveal>
          <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line">
            {team.map((t,i) => (
              <motion.div variants={itemVariant} key={i} className="bg-ink p-7 card-hover">
                <span className="inline-flex w-14 h-14 rounded-full bg-accent/15 text-accent items-center justify-center font-tech font-bold text-base">{t.ini}</span>
                <h3 className="font-display text-2xl mt-5">{t.name}</h3>
                <p className="mt-3 text-sm text-bone/75">{t.role}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* MARQUEE / CTA */}
      <section className="relative overflow-hidden py-24 md:py-32 border-t border-line">
        <Marquee items={['#TheAgencyThatStopsAtBookings']} outline speed="slow" className="absolute inset-x-0 top-6 opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
          <Reveal>
            <p className="eyebrow mb-6">Property Edge Consulting Pvt Ltd</p>
            <h2 className="font-display text-4xl md:text-7xl tracking-tightest leading-[1] max-w-4xl">If your boardroom is still asking <em className="text-accent not-italic">"which ad sold that flat?"</em> — we should be on the answer side of that table.</h2>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact" data-testid="about-final-cta" className="btn-primary">Get my 72-hour audit →</Link>
              <Link href="/funnelengineering" className="btn-ghost">See the methodology</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
