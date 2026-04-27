'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageTransition({ children }) {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const t = setTimeout(() => setShow(false), 750);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {show && (
          <motion.div
            key={pathname + 'curtain'}
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.18, 1] }}
            className="fixed inset-0 z-[55] bg-ink origin-bottom pointer-events-none"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="font-display text-bone/40 text-2xl tracking-tightest"
              >
                Property<span className="text-accent">.</span>Edge
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}
