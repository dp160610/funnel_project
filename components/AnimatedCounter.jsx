'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Parses a value like "₹760Cr+", "20–35%", "4.9/5", "72hr", "50+", "2×"
 * and animates the leading numeric portion on scroll-into-view.
 */
function parseValue(raw) {
  const s = String(raw);
  // Find first numeric run (supports decimals)
  const m = s.match(/(\d+(?:\.\d+)?)/);
  if (!m) return { prefix: s, num: null, suffix: '', decimals: 0 };
  const num = parseFloat(m[1]);
  const decimals = m[1].includes('.') ? m[1].split('.')[1].length : 0;
  const idx = s.indexOf(m[1]);
  return {
    prefix: s.slice(0, idx),
    num,
    suffix: s.slice(idx + m[1].length),
    decimals,
  };
}

export default function AnimatedCounter({ value, duration = 1.6, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);
  const parsed = parseValue(value);

  useEffect(() => {
    if (!inView || parsed.num === null) return;
    let raf;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const tick = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      setDisplay(parsed.num * ease(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, parsed.num, duration]);

  if (parsed.num === null) {
    return <span ref={ref} className={className}>{value}</span>;
  }
  const formatted = display.toFixed(parsed.decimals);
  return (
    <span ref={ref} className={className}>
      {parsed.prefix}{formatted}{parsed.suffix}
    </span>
  );
}
