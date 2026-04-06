import Link from 'next/link'
import styles from '../../styles/components/CaseStudiesSection.module.css'

const cases = [
  { id: 1, title: 'Dosti Greater Thane', brand: 'Dosti Realty', img: 'https://backend.realatte.com/uploads/3_6a38fe5cc5.jpg' },
  { id: 2, title: 'Runwal Gardens Dombivli', brand: 'Runwal Group', img: 'https://backend.realatte.com/uploads/4_33b5fed058.jpg' },
  { id: 3, title: 'Hiranandani Empress Hill', brand: 'Hiranandani', img: 'https://backend.realatte.com/uploads/1_4f177a8438.jpg' },
  { id: 4, title: 'Alcove New Kolkata', brand: 'Alcove', img: 'https://backend.realatte.com/uploads/8_bb003c72e3.jpg' },
  { id: 5, title: 'Piramal Mahalaxmi', brand: 'Piramal Realty', img: 'https://backend.realatte.com/uploads/2_7be8cfd73b.jpg' },
  { id: 6, title: 'AR Homes Rise', brand: 'AR Homes', img: 'https://backend.realatte.com/uploads/22_e54f9006af.jpg' },
  { id: 7, title: 'Assetz Sora & Saki', brand: 'Assetz Property', img: 'https://backend.realatte.com/uploads/15_c6d094f2cc.jpg' },
  { id: 8, title: 'Concorde Equity', brand: 'Concorde Group', img: 'https://backend.realatte.com/uploads/16_90ec95291c.jpg' },
  { id: 9, title: 'Century Built Rare', brand: 'Century Real Estate', img: 'https://backend.realatte.com/uploads/13_cf573b5b89.jpg' },
  { id: 10, title: 'Dosti Greenscapes', brand: 'Dosti Realty', img: 'https://backend.realatte.com/uploads/19_49876c029b.jpg' },
  { id: 11, title: 'Dosti Eden', brand: 'Dosti Realty', img: 'https://backend.realatte.com/uploads/5_17c5a246f8.jpg' },
  { id: 12, title: 'Hiranandani Chennai', brand: 'Hiranandani', img: 'https://backend.realatte.com/uploads/20_22adfe3ea3.jpg' },
  { id: 13, title: 'Gera Island of Joy', brand: 'Gera Developments', img: 'https://backend.realatte.com/uploads/17_b2d92605af.jpg' },
  { id: 14, title: 'NSL Luxoria', brand: 'NSL Group', img: 'https://backend.realatte.com/uploads/21_c8f5a55095.jpg' },
  { id: 15, title: 'Mantri Webcity', brand: 'Mantri Developers', img: 'https://backend.realatte.com/uploads/11_19134fc928.jpg' },
  { id: 16, title: 'Nambiar Millenia', brand: 'Nambiar Builders', img: 'https://backend.realatte.com/uploads/14_68a37f5ecf.jpg' },
]

export default function CaseStudiesSection() {
  return (
    <section id="cases" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.overline}>Some Of Our Work</p>
          <div className={styles.headerRow}>
            <h2 className={styles.heading}>Our Work</h2>
            <Link href="/portfolio" className={styles.viewAll}>View All &rarr;</Link>
          </div>
          <p className={styles.subheading}>A showcase of smart strategies, bold campaigns, and real results we&apos;ve delivered for our clients.</p>
        </div>

        <div className={styles.grid}>
          {cases.map((c) => (
            <Link key={c.id} href={`/portfolio/${c.id}`} className={styles.card}>
              <div className={styles.imgPlaceholder}>
                <img src={c.img} alt={c.title} />
                <div className={styles.playBtn}>&#9654; View</div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.cardTag}>Performance Campaign</p>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardBrand}>{c.brand}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
