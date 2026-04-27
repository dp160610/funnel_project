'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function CinematicBreak({ src, eyebrow, headline, accentWord, attribution, height = 'h-[80vh]' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  return (
    <section ref={ref} data-testid="cinematic-break" className={`relative ${height} overflow-hidden border-y border-line`}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={src} alt="" className="w-full h-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/55 to-ink/30" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            viewport={{ once: true, margin: '-120px' }}
            className="md:col-span-7"
          >
            {eyebrow && <p className="eyebrow mb-6 text-gold">{eyebrow}</p>}
            <h2 className="font-display italic text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tightest text-bone hero-title">
              "{headline}<em className="not-italic text-gold"> {accentWord}</em>"
            </h2>
            {attribution && <p className="mt-8 font-tech text-xs uppercase tracking-wider2 text-bone/70">— {attribution}</p>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
