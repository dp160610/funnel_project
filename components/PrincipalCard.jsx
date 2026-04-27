'use client';
import { Reveal } from './Reveal';
import { Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PrincipalCard() {
  return (
    <section data-testid="principal-section" className="py-24 md:py-32 bg-surface/40 border-y border-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="img-zoom h-[520px] md:h-[640px] overflow-hidden bg-line">
              <img src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1100" alt="Principal — Property Edge" className="w-full h-full object-cover grayscale" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-ink border border-gold/50 px-4 py-3 max-w-[260px]">
              <p className="font-tech text-[9px] uppercase tracking-wider2 text-gold">Principal · Founder</p>
              <p className="font-display text-xl mt-1 leading-tight">12+ years, real estate marketing only.</p>
            </div>
          </div>
        </Reveal>
        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow mb-6 text-gold">From the Principal's Desk</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1.02]">
              "I started Property Edge after watching too many <em className="text-accent not-italic">great projects</em> get marketed by agencies that confused activity with progress."
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-5 text-bone/85 leading-relaxed max-w-2xl text-lg">
              <p className="first-letter:font-display first-letter:text-7xl first-letter:font-medium first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-[0.85] first-letter:text-accent">
                Twelve years in this category taught me that marketing's job in real estate is not to generate noise — it is to generate <strong className="text-bone">conviction</strong>. Conviction in the buyer that this is the right home. Conviction in the developer that the spend is producing the outcome. Conviction in the boardroom that there is a system, not a stunt, behind the numbers.
              </p>
              <p>
                We answer to one question, every month, in every meeting: <em className="text-gold">"Which campaign produced this booking?"</em> If the answer is fuzzy, we are not doing our job. That is the only standard worth holding ourselves to.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-gold/20 text-gold flex items-center justify-center font-tech font-bold text-base border border-gold/30">PE</span>
                <div>
                  <p className="font-tech text-sm">Property Edge Consulting Pvt Ltd</p>
                  <p className="text-xs text-muted mt-0.5">Mumbai · Bengaluru · Pune · Hyderabad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/company/propertyedge" aria-label="LinkedIn" className="text-bone/60 hover:text-gold transition-colors"><Linkedin size={18} /></a>
                <a href="mailto:hello@propertyedge.com" aria-label="Email" className="text-bone/60 hover:text-gold transition-colors"><Mail size={18} /></a>
                <Link href="/contact" className="font-tech text-xs uppercase tracking-wider2 text-bone/85 hover:text-accent inline-flex items-center gap-2 transition-colors">Schedule a call <ArrowRight size={14} /></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
