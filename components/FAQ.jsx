'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const FAQS = [
  {
    q: "What does 'cost per booking' actually include?",
    a: "Total marketing investment in the period — every rupee of media spend, agency fee, creative production, tech stack, and nurture cost — divided by the total bookings attributed to that period. Not CPL. Not CPQL. The number that ladders directly to your P&L.",
  },
  {
    q: "How is the 72-hour funnel audit free? What's the catch?",
    a: "There is no catch. We use the audit to qualify whether we can actually reduce your CPB. If we can't, we'll tell you and recommend who can. We'd rather say no in 72 hours than waste a quarter of your budget proving it.",
  },
  {
    q: "Do you work with non-real-estate businesses?",
    a: "No. Real estate exclusively. Every benchmark, every playbook, every team member is calibrated to the 6–12 week real estate decision cycle. Specialisation is the only honest competitive advantage in a category this nuanced.",
  },
  {
    q: "How quickly can you have my pipeline running on full attribution?",
    a: "48 hours from kickoff. CRM integration, lead-source tagging, attribution dashboard, lead-scoring model — all live with your real data flowing through it. If we miss that window, we extend the engagement at no charge.",
  },
  {
    q: "What's the engagement model — retainer, project, or performance-based?",
    a: "All three. Most clients start on a 90-day funnel-engineering project to see CPB compression. From there, retainer (monthly performance + tech stack management) or hybrid (retainer + booking-based bonus) makes sense. We discuss after the audit.",
  },
  {
    q: "Can you work with our existing media agency?",
    a: "Yes — we frequently sit on top of existing agency relationships as the funnel-engineering and attribution layer. Many clients keep their creative agency and add us for the system that connects their work to bookings.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section data-testid="faq-section" className="py-24 md:py-32 border-y border-line bg-surface/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="eyebrow mb-6">Frequently Asked</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1]">
            The questions <em className="text-accent not-italic">every MD asks first.</em>
          </h2>
          <p className="mt-6 text-muted max-w-md">If yours isn't listed, ask us in your audit form. Real answers, no agency-speak.</p>
        </div>
        <div className="md:col-span-7 border-t border-line">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line">
                <button
                  data-testid={`faq-toggle-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-baseline justify-between gap-6 py-6 md:py-8 text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-5 flex-1">
                    <span className="font-tech text-xs text-accent tabular-nums shrink-0 mt-1">[{String(i + 1).padStart(2, '0')}/06]</span>
                    <span className="font-display text-xl md:text-2xl leading-[1.2] group-hover:text-accent transition-colors duration-500">{f.q}</span>
                  </div>
                  <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.4, ease: [0.77,0,0.18,1] }} className="shrink-0 text-bone/60">
                    <Plus size={22} strokeWidth={1.5} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.77,0,0.18,1] }}
                      className="overflow-hidden"
                    >
                      <p data-testid={`faq-answer-${i}`} className="pb-7 md:pb-9 pl-[68px] pr-10 text-bone/80 leading-relaxed max-w-2xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
