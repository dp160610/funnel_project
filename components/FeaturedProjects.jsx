'use client';
import { motion } from 'framer-motion';
import { Reveal, Stagger, itemVariant } from './Reveal';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  { name: 'Lodha Palava — Phase 7', city: 'Mumbai', segment: 'Premium Township', metric: '−31% CPB', img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1400', tag: 'Performance + Influence' },
  { name: 'Prestige Kingfisher Towers', city: 'Bengaluru', segment: 'Ultra Luxury', metric: '2× Close Rate', img: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1400', tag: 'Brand + RealTech' },
  { name: 'Godrej Splendour', city: 'Pune', segment: 'Mid-Premium', metric: '3.8× Site Visits', img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1400', tag: 'Full-Funnel' },
  { name: 'Mahindra Eden Residences', city: 'Hyderabad', segment: 'Premium Residential', metric: '−28% CPL', img: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1400', tag: 'Performance Media' },
];

export default function FeaturedProjects() {
  return (
    <section data-testid="featured-projects" className="py-24 md:py-32 border-y border-line bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow mb-6 text-gold">Featured Work</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-3xl">
                Marketed. Measured. <em className="text-accent not-italic">Sold out.</em>
              </h2>
            </div>
            <p className="text-muted max-w-md">Four developer engagements. Four ticket bands. Same accountability framework — every campaign laddered to a booking.</p>
          </div>
        </Reveal>
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {PROJECTS.map((p, i) => (
            <motion.article variants={itemVariant} key={i} data-testid={`project-${i}`} className="bg-ink relative group overflow-hidden aspect-[16/11] cursor-pointer">
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              {/* metric badge top right */}
              <div className="absolute top-5 right-5 bg-ink/85 backdrop-blur-md border border-gold/40 px-3 py-1.5">
                <p className="font-tech text-[10px] uppercase tracking-wider2 text-gold">{p.metric}</p>
              </div>
              {/* footer info */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="font-tech text-[10px] uppercase tracking-wider2 text-bone/60 mb-2">{p.city} · {p.segment}</p>
                  <h3 className="font-display text-2xl md:text-3xl leading-[1.05] truncate">{p.name}</h3>
                  <p className="mt-2 text-[11px] font-tech uppercase tracking-wider2 text-accent">{p.tag}</p>
                </div>
                <span className="shrink-0 w-12 h-12 border border-bone/40 rounded-full flex items-center justify-center text-bone/70 group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </motion.article>
          ))}
        </Stagger>
        <p className="mt-8 text-xs text-muted font-tech uppercase tracking-wider2">Project images representative · Specific case detail available under NDA after enquiry.</p>
      </div>
    </section>
  );
}
