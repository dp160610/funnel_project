import styles from '../../styles/components/Section.module.css'

export default function Section({ id, title, subtitle, children, className, ...props }) {
  return (
    <section id={id} className={`${styles.section} ${className || ''}`} {...props}>
      <div className={styles.content}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
