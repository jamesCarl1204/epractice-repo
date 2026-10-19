import ThemeToggle from '../ThemeToggle/ThemeToggle'
import { profile } from '../../data/profile'
import styles from './Header.module.css'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
]

export default function Header({ active, theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand}>
          <span className={styles.dot}></span>
          <span className={styles.brandText}>{profile.handle}</span>
        </a>

        <div className={styles.actions}>
          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`${styles.link} ${active === link.id ? styles.active : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
