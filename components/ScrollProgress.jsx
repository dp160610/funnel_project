'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  return (
    <motion.div
      data-testid="scroll-progress"
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60] origin-left"
      aria-hidden="true"
    />
  );
}
