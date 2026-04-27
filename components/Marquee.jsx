export default function Marquee({ items = [], speed = 'mid', reverse = false, outline = false, className = '' }) {
  const animClass = reverse ? 'animate-marquee-rev' : (speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee-mid');
  const dup = [...items, ...items];
  return (
    <div className={`marquee py-6 ${className}`}>
      <div className={`marquee-track gap-12 ${animClass}`}>
        {dup.map((it, i) => (
          <span key={i} className={`font-display text-4xl md:text-6xl lg:text-7xl tracking-tightest whitespace-nowrap ${outline ? 'text-outline' : 'text-bone'}`}>
            {it}<span className="text-accent mx-6">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
