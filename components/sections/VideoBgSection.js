import styles from '../../styles/components/VideoBgSection.module.css'

export default function VideoBgSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Floating dark navy card with video thumbnail + play button */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.cardMedia}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://realatte.com/images/thumb1.jpg"
                alt="Watch Our Story - Property Edge"
                className={styles.cardThumb}
              />
              <button className={styles.playButton} type="button" aria-label="play_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Full-width background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://realatte.com/images/videobg.png"
          alt=""
          className={styles.videoBg}
        />
      </div>
    </section>
  )
}
