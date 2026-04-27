'use client';
import { motion } from 'framer-motion';
import { Reveal, Stagger, itemVariant } from './Reveal';

const CITIES = [
  { name: 'Mumbai',     img: 'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Worli · Bandra · Andheri', count: '14 projects' },
  { name: 'Bengaluru',  img: 'https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Whitefield · Sarjapur · Hebbal', count: '9 projects' },
  { name: 'Pune',       img: 'https://images.pexels.com/photos/2526935/pexels-photo-2526935.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Kharadi · Wakad · Hinjewadi', count: '6 projects' },
  { name: 'Hyderabad',  img: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Gachibowli · Kondapur', count: '5 projects' },
  { name: 'Delhi NCR',  img: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Gurugram · Noida', count: '7 projects' },
  { name: 'Chennai',    img: 'https://images.pexels.com/photos/2406731/pexels-photo-2406731.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'OMR · Velachery', count: '3 projects' },
  { name: 'Kolkata',    img: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'New Town · Salt Lake', count: '2 projects' },
  { name: 'Ahmedabad',  img: 'https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'SG Highway · Bopal', count: '2 projects' },
  { name: 'Goa',        img: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'North Goa · Assagao', count: '2 projects' },
  { name: 'Surat',      img: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Vesu · Adajan', count: '1 project' },
  { name: 'Jaipur',     img: 'https://images.pexels.com/photos/3580/buildings-business-city-cityscape.jpg?auto=compress&cs=tinysrgb&w=900', tag: 'Mansarovar · Vaishali', count: '1 project' },
  { name: 'Lucknow',    img: 'https://images.pexels.com/photos/2360569/pexels-photo-2360569.jpeg?auto=compress&cs=tinysrgb&w=900', tag: 'Gomti Nagar · Sushant Golf City', count: '1 project' },
];

export default function CitiesGallery() {
  return (
    <section data-testid="cities-section" className="py-24 md:py-32 bg-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">Markets We Build For</p>
          <h2 className="font-display text-4xl md:text-6xl tracking-tightest leading-[1] max-w-4xl">
            Twelve cities. <em className="text-accent not-italic">One funnel methodology.</em>
          </h2>
          <p className="mt-6 text-muted max-w-2xl">From Mumbai's vertical luxury to Goa's villa market — we've calibrated buyer journeys to the psychology of each city, the regulatory rhythm of each state, and the ticket-size of each segment.</p>
        </Reveal>
        <Stagger className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-line border border-line">
          {CITIES.map((c, i) => (
            <motion.div variants={itemVariant} key={i} data-testid={`city-${c.name.toLowerCase().replace(/\s+/g, '-')}`} className="bg-ink relative overflow-hidden group cursor-pointer aspect-[4/5]">
              <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 group-hover:from-ink/95 transition-colors duration-700" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="font-tech text-[10px] tracking-wider2 uppercase text-gold mb-2">{c.count}</p>
                <h3 className="font-display text-2xl md:text-3xl leading-none">{c.name}</h3>
                <p className="mt-2 text-[11px] text-bone/60 font-tech tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500">{c.tag}</p>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border border-bone/30 rounded-full flex items-center justify-center text-bone/60 font-tech text-[10px] group-hover:border-gold group-hover:text-gold transition-colors duration-500">
                {String(i + 1).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
