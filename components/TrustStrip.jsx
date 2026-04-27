'use client';
import { Award, ShieldCheck, TrendingUp, FileBadge2, Zap, Users2 } from 'lucide-react';

const TRUST = [
  { icon: ShieldCheck, label: 'RERA-aware compliance' },
  { icon: Award, label: '4.9/5 average client NPS' },
  { icon: TrendingUp, label: '20–35% avg CPB reduction' },
  { icon: FileBadge2, label: 'Closed-loop attribution' },
  { icon: Zap, label: '48hr CRM activation SLA' },
  { icon: Users2, label: '50+ developers served' },
];

const PRESS = ['Times of India', 'Economic Times', 'Mint', 'Hindustan Times', 'Money Control', 'Business Standard', 'YourStory', 'Inc42'];

export default function TrustStrip() {
  return (
    <section data-testid="trust-strip" className="border-y border-line bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-3">
            <p className="eyebrow mb-4">As Featured In</p>
            <p className="font-display text-2xl leading-[1.15]">Coverage across India's <em className="text-accent not-italic">business press.</em></p>
          </div>
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-px bg-line border border-line">
            {PRESS.map((p, i) => (
              <div key={i} className="bg-ink py-5 px-4 flex items-center justify-center text-center hover:bg-surface/60 transition-colors duration-500">
                <span className="font-display text-base md:text-lg text-bone/60 hover:text-bone transition-colors">{p}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-line border border-line">
          {TRUST.map(({ icon: Icon, label }, i) => (
            <div key={i} className="bg-ink p-5 flex items-center gap-3 hover:bg-surface/60 transition-colors duration-500">
              <Icon size={20} className="text-accent shrink-0" strokeWidth={1.4} />
              <span className="font-tech text-[11px] uppercase tracking-wider2 text-bone/80 leading-tight">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
