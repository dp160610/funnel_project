'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxImage({ src, alt = '', overlayClass = 'hero-overlay', heightClass = 'absolute inset-0' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  return (
    <div ref={ref} className={heightClass}>
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
      <div className={`absolute inset-0 ${overlayClass}`} />
    </div>
  );
}
