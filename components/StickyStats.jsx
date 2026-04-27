'use client';
import { usePathname } from 'next/navigation';

const stats = [
  { v: '₹760Cr+', l: 'Ad Spend Managed' },
  { v: '50+', l: 'Projects Delivered' },
  { v: '12', l: 'Cities Active' },
  { v: '4.9/5', l: 'Client NPS' },
  { v: '72hr', l: 'Free Funnel Audit' },
];

export default function StickyStats() {
  const path = usePathname();
  if (path === '/contact') return null;
  return (
    <div data-testid="sticky-stats" className="hidden md:block fixed bottom-0 inset-x-0 z-40 border-t border-line bg-ink/80 backdrop-blur-xl">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-5 divide-x divide-line">
        {stats.map((s, i) => (
          <div key={i} className="py-3 px-4 flex items-baseline gap-3">
            <span className="font-tech font-bold text-sm md:text-base text-bone">{s.v}</span>
            <span className="text-[10px] tracking-wider2 uppercase text-muted hidden lg:inline">{s.l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
