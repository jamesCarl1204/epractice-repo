import styles from './Card.module.css'

export default function Card({ className = '', children, ...rest }) {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  )
}
