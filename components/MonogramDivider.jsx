export default function MonogramDivider() {
  return (
    <div data-testid="monogram-divider" className="relative bg-ink py-12 md:py-16 overflow-hidden border-y border-line/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-center gap-8">
        <span className="flex-1 h-px bg-gradient-to-r from-transparent via-line to-line" />
        <svg width="68" height="68" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-bone/85 shrink-0" aria-hidden="true">
          <rect x="1" y="1" width="78" height="78" stroke="currentColor" strokeWidth="1" opacity="0.4" />
          <path d="M22 60 V20 H42 C50 20 54 26 54 32 C54 38 50 44 42 44 H30" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
          <path d="M30 44 V60" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square" />
          <path d="M58 60 V44 H64 V60 Z" fill="#D92323" />
          <circle cx="40" cy="72" r="1.5" fill="#C9A961" />
        </svg>
        <span className="flex-1 h-px bg-gradient-to-l from-transparent via-line to-line" />
      </div>
      <p className="text-center mt-4 font-tech text-[10px] uppercase tracking-[0.3em] text-bone/40">Property · Edge · Consulting</p>
    </div>
  );
}
