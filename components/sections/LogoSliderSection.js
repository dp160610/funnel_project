import styles from '../../styles/components/LogoSliderSection.module.css'

// Use actual client logos from Realatte (Mumbai city, numbered 1-12 for slider)
const row1Logos = [1, 3, 5, 7, 9, 11, 18, 20, 21, 22, 26, 28]
const row2Logos = [2, 4, 6, 8, 10, 12, 31, 34, 41, 43, 50, 58]

export default function LogoSliderSection() {
  // Duplicate to create seamless loop
  const r1 = [...row1Logos, ...row1Logos]
  const r2 = [...row2Logos, ...row2Logos]

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        {/* Row 1 — scrolls left */}
        <div className={styles.lSlider}>
          <div className={styles.track}>
            {r1.map((n, i) => (
              <div key={i} className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://realatte.com/images/clientslogo/Mumbai/${n}.png`}
                  alt=""
                  className={styles.clogo}
                  width={120}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className={styles.rSlider}>
          <div className={styles.trackReverse}>
            {r2.map((n, i) => (
              <div key={i} className={styles.logoItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://realatte.com/images/clientslogo/Mumbai/${n}.png`}
                  alt=""
                  className={styles.clogo}
                  width={120}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
