import Reveal from './Reveal'
import styles from '../../styles/components/MediaShowcase.module.css'

export default function MediaShowcase({ title, subtitle, items = [] }) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {(title || subtitle) && (
          <Reveal className={styles.copy}>
            {title && <div className={styles.kicker}>{title}</div>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </Reveal>
        )}

        <Reveal className={styles.viewport} delay={120} distance="34px">
          <div className={styles.track}>
            {[...items, ...items].map((item, index) => (
              <article key={`${item.title}-${index}`} className={styles.card}>
                <div className={styles.mediaWrap}>
                  {item.type === 'video' ? (
                    <video
                      className={styles.media}
                      src={item.src}
                      poster={item.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img className={styles.media} src={item.src} alt={item.title} loading="lazy" />
                  )}
                </div>
                <div className={styles.meta}>
                  <div className={styles.metaType}>{item.label}</div>
                  <h3 className={styles.metaTitle}>{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
