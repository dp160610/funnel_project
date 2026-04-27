'use client';
import { useEffect, useRef, useState } from 'react';

export default function MagneticCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    setEnabled(true);

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };
    const onEnter = (e) => {
      if (e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-testid^="lead-row"]')) {
        ringRef.current?.classList.add('cursor-active');
      }
    };
    const onLeave = (e) => {
      if (e.target.closest && e.target.closest('a, button, [role="button"], input, textarea, select, label, [data-testid^="lead-row"]')) {
        ringRef.current?.classList.remove('cursor-active');
      }
    };
    const tick = () => {
      rx += (mx - rx) * 0.14;
      ry += (my - ry) * 0.14;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${mx - 3}px, ${my - 3}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onEnter);
    window.addEventListener('mouseout', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onEnter);
      window.removeEventListener('mouseout', onLeave);
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-accent z-[70] pointer-events-none" />
      <div ref={ringRef} className="cursor-ring fixed top-0 left-0 w-9 h-9 rounded-full border border-bone/40 z-[70] pointer-events-none transition-[width,height,border-color,opacity] duration-300" />
    </>
  );
}
