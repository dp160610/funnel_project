'use client';
import { motion } from 'framer-motion';
import { Reveal, Stagger, itemVariant } from './Reveal';
import { Trophy, Star, Award, Building2, ShieldCheck, Sparkles } from 'lucide-react';

const AWARDS = [
  { y: '2024', body: 'Realty+ Excellence Awards', t: 'Marketing Agency of the Year' },
  { y: '2024', body: 'IMA Effie India', t: 'Bronze · Real Estate Category' },
  { y: '2023', body: 'CMO Asia', t: 'Best Use of Marketing Technology' },
  { y: '2023', body: 'NAREDCO National', t: 'Innovation in Real Estate Marketing' },
];

const CERTS = [
  { icon: ShieldCheck, t: 'Meta Business Partner', sub: 'Tier 2 · Indian Real Estate Vertical' },
  { icon: Sparkles, t: 'Google Premier Partner', sub: 'Search · Display · YouTube · 2024' },
  { icon: Building2, t: 'CREDAI Industry Member', sub: 'Affiliate · Mumbai Chapter' },
  { icon: Award, t: 'ISO 27001 : 2022', sub: 'Information Security Compliance' },
];

export default function AwardsRecognition() {
  return (
    <section data-testid="awards-section" className="py-24 md:py-32 border-y border-line bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <Reveal className="md:col-span-5">
            <p className="eyebrow mb-6 text-gold">Recognition</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1]">
              Industry awards we <em className="text-accent not-italic">don't talk about often.</em>
            </h2>
          </Reveal>
          <Reveal className="md:col-span-7" delay={0.1}>
            <p className="text-bone/80 text-lg leading-relaxed mt-2">
              Awards are a lagging indicator of work that already shipped. We mention them here because real estate is a category where institutional credibility matters — and because every plaque on the wall represents an MD who took a risk on us before we had one.
            </p>
          </Reveal>
        </div>

        {/* Awards row */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line">
          {AWARDS.map((a, i) => (
            <motion.div variants={itemVariant} key={i} className="bg-ink p-7 group hover:bg-surface/60 transition-colors duration-500 relative overflow-hidden">
              <Trophy size={28} className="text-gold/70 group-hover:text-gold transition-colors" strokeWidth={1.2} />
              <p className="font-tech text-xs uppercase tracking-wider2 text-bone/50 mt-6 tabular-nums">{a.y}</p>
              <p className="font-tech text-[10px] uppercase tracking-wider2 text-accent mt-1">{a.body}</p>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-[1.15]">{a.t}</h3>
              <span className="absolute top-7 right-7 font-tech text-[10px] tabular-nums text-line group-hover:text-bone/40 transition-colors">{String(i + 1).padStart(2, '0')}/04</span>
            </motion.div>
          ))}
        </Stagger>

        {/* Certs row */}
        <div className="mt-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-line border-x border-b border-line">
          {CERTS.map(({ icon: Icon, t, sub }, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="bg-ink p-7 flex items-start gap-4 group hover:bg-surface/60 transition-colors duration-500">
                <Icon size={22} className="text-accent shrink-0 mt-1" strokeWidth={1.4} />
                <div>
                  <h4 className="font-display text-lg md:text-xl leading-[1.15]">{t}</h4>
                  <p className="font-tech text-[10px] uppercase tracking-wider2 text-bone/55 mt-2">{sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
