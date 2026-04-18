'use client'

import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import styles from '../../styles/components/FlagshipCarousel.module.css'

export default function FlagshipCarousel({
  kicker,
  title,
  subtitle,
  slides = [],
  autoPlayMs = 4800,
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length < 2) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, autoPlayMs)

    return () => window.clearInterval(timer)
  }, [autoPlayMs, slides.length])

  if (!slides.length) {
    return null
  }

  const activeSlide = slides[activeIndex]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.header}>
          {kicker && <div className={styles.kicker}>{kicker}</div>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </Reveal>

        <Reveal className={styles.panel} delay={120} distance="34px">
          <div className={styles.copy}>
            <div className={styles.copyTop}>
              <div className={styles.eyebrow}>{activeSlide.eyebrow}</div>
              <h3 className={styles.panelTitle}>{activeSlide.title}</h3>
              <p className={styles.panelBody}>{activeSlide.body}</p>
            </div>

            <div className={styles.metricGrid}>
              {activeSlide.metrics.map((metric) => (
                <div key={metric.label} className={styles.metric}>
                  <div className={styles.metricValue}>{metric.value}</div>
                  <div className={styles.metricLabel}>{metric.label}</div>
                </div>
              ))}
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => setActiveIndex((activeIndex - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
              >
                &#8592;
              </button>
              <button
                type="button"
                className={styles.arrow}
                onClick={() => setActiveIndex((activeIndex + 1) % slides.length)}
                aria-label="Next slide"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className={styles.mediaStage}>
            <div className={styles.mediaFrame}>
              {activeSlide.type === 'video' ? (
                <video
                  key={activeSlide.src}
                  className={styles.media}
                  src={activeSlide.src}
                  poster={activeSlide.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  key={activeSlide.src}
                  className={styles.media}
                  src={activeSlide.src}
                  alt={activeSlide.title}
                  loading="lazy"
                />
              )}
            </div>

            <div className={styles.thumbRow}>
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`${styles.thumb}${index === activeIndex ? ` ${styles.thumbActive}` : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${slide.title}`}
                >
                  {slide.thumbType === 'video' ? (
                    <video
                      className={styles.thumbMedia}
                      src={slide.thumbSrc}
                      poster={slide.poster}
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="metadata"
                    />
                  ) : (
                    <img className={styles.thumbMedia} src={slide.thumbSrc} alt={slide.title} loading="lazy" />
                  )}
                  <span className={styles.thumbLabel}>{slide.eyebrow}</span>
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
