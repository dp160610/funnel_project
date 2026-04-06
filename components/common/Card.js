import styles from '../../styles/components/Card.module.css'

export default function Card({ children, className, ...props }) {
  return (
    <div className={`${styles.card} ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
