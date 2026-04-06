import styles from '../../styles/components/Container.module.css'

export default function Container({ children, className, ...props }) {
  return (
    <div className={`${styles.container} ${className || ''}`} {...props}>
      {children}
    </div>
  )
}
