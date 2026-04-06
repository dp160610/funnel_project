import Link from 'next/link'
import styles from '../../styles/components/Button.module.css'

export default function Button({ children, href, variant = 'primary', onClick, type = 'button', ...props }) {
  const buttonClass = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  )
}
