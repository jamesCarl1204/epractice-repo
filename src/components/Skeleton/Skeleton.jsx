import styles from './Skeleton.module.css'

// Reusable na shimmer block. Pwede mong gamitin sa text, cards, atbp.
export default function Skeleton({ width, height, radius, className = '', style }) {
  return (
    <div
      className={`${styles.skeleton} ${className}`}
      style={{ width, height, borderRadius: radius, ...style }}
      aria-hidden="true"
    />
  )
}
