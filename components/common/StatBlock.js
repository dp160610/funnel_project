import styles from '../../styles/components/StatBlock.module.css'

export default function StatBlock({ number, label, description }) {
  return (
    <div className={styles.statBlock}>
      <div className={styles.number}>{number}</div>
      <div className={styles.label}>{label}</div>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  )
}
