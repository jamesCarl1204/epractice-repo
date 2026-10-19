import styles from './CardHeader.module.css'

export default function CardHeader({ title, icon }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.icon}>{icon}</span>
    </div>
  )
}
