/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        surface: '#141414',
        bone: '#F5F5F0',
        muted: '#A1A1AA',
        accent: '#D92323',
        accenthover: '#B91C1C',
        gold: '#C9A961',
        line: '#27272A',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        sans: ['"Cabinet Grotesk"', '"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        wider2: '0.2em',
      },
      animation: {
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-mid': 'marquee 40s linear infinite',
        'marquee-rev': 'marqueeRev 50s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out both',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        marqueeRev: { '0%': { transform: 'translateX(-50%)' }, '100%': { transform: 'translateX(0)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(24px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
