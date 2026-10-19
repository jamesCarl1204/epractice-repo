import { profile } from '../../data/profile'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Designed with minimalist principles.</p>
      </div>
    </footer>
  )
}
