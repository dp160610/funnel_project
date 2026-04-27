'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const STEPS = [
  {
    n: '01', tag: 'Audit',
    t: 'We open the books. Every channel, every cohort, every cost.',
    d: 'In 72 hours we trace every rupee from impression to booking, mapping the exact stage where your funnel is hemorrhaging — and the size of the leak in your P&L.',
    img: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    n: '02', tag: 'Architect',
    t: 'We rebuild the architecture, not the activity.',
    d: 'A 90-day funnel engineering project: instrument every stage, build the attribution layer, install lead-scoring, automate nurture sequences — all under one accountability metric.',
    img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    n: '03', tag: 'Activate',
    t: 'We light it up — and we put a number on it.',
    d: 'Performance media, brand films, influence content, sales scripting — all coordinated against a single cost-per-booking target visible to your MD on a live dashboard.',
    img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    n: '04', tag: 'Account',
    t: 'We sit on your side of the table. Permanently.',
    d: 'Daily spend report, weekly funnel review, monthly attribution deep-dive. Quarterly business reviews where we tell you what is working, what is broken, and what we are removing from the budget.',
    img: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

export default function PinnedShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  // Each step occupies 1/4 of the scroll
  const activeIndex = useTransform(scrollYProgress, (v) => Math.min(STEPS.length - 1, Math.floor(v * STEPS.length)));

  return (
    <section data-testid="pinned-showcase" ref={containerRef} className="relative bg-ink" style={{ height: `${STEPS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Image stack */}
        <div className="absolute inset-0">
          {STEPS.map((s, i) => (
            <ImageLayer key={i} src={s.img} index={i} progress={scrollYProgress} total={STEPS.length} />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/30 z-[5]" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent z-[5]" />
        </div>

        {/* Content stack */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-2">
              <p className="eyebrow mb-6 text-gold">The Engagement</p>
              <p className="font-tech text-xs uppercase tracking-wider2 text-bone/50">Scroll</p>
            </div>
            <div className="md:col-span-7 relative h-[55vh] md:h-[60vh]">
              {STEPS.map((s, i) => (
                <ContentLayer key={i} step={s} index={i} progress={scrollYProgress} total={STEPS.length} />
              ))}
            </div>
            <div className="md:col-span-3 hidden md:flex flex-col justify-end pb-6 gap-3">
              {STEPS.map((s, i) => (
                <StepIndicator key={i} step={s} index={i} progress={scrollYProgress} total={STEPS.length} />
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 border-t border-line/50">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between font-tech text-[10px] uppercase tracking-wider2 text-bone/50">
            <span>Property Edge — The Engagement Sequence</span>
            <span className="text-gold">04 stages · 90 days · One CPB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageLayer({ src, index, progress, total }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [Math.max(0, start - 0.05), start, end - 0.02, end + 0.05], [0, 1, 1, 0]);
  const scale = useTransform(progress, [start, end], [1.1, 1.18]);
  return (
    <motion.div style={{ opacity, scale }} className="absolute inset-0">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
}

function ContentLayer({ step, index, progress, total }) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [Math.max(0, start - 0.04), start + 0.02, end - 0.04, end + 0.02], [0, 1, 1, 0]);
  const y = useTransform(progress, [start, end], [40, -40]);
  return (
    <motion.div style={{ opacity, y }} className="absolute inset-0 flex flex-col justify-end">
      <p className="font-tech text-7xl md:text-9xl font-bold text-bone/10 leading-none tabular-nums">{step.n}</p>
      <p className="eyebrow mt-2 text-gold">{step.tag}</p>
      <h2 className="hero-title font-display text-3xl md:text-5xl lg:text-6xl tracking-tightest leading-[1.05] mt-3 max-w-3xl">
        {step.t}
      </h2>
      <p className="mt-5 text-bone/85 text-base md:text-lg leading-relaxed max-w-2xl">{step.d}</p>
    </motion.div>
  );
}

function StepIndicator({ step, index, progress, total }) {
  const start = index / total;
  const end = (index + 1) / total;
  const isActive = useTransform(progress, (v) => v >= start && v < end);
  const opacity = useTransform(progress, [start - 0.08, start, end, end + 0.08], [0.4, 1, 1, 0.4]);
  return (
    <motion.div style={{ opacity }} className="border-l border-line pl-3 py-1 group hover:border-gold transition-colors duration-500">
      <p className="font-tech text-[10px] uppercase tracking-wider2 text-gold">{step.n} · {step.tag}</p>
      <motion.div style={{ scaleX: isActive }} className="h-px bg-accent mt-2 origin-left" />
    </motion.div>
  );
}
