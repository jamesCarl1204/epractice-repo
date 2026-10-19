import { MoonIcon, SunIcon } from '../Icons/Icons'
import styles from './ThemeToggle.module.css'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={onToggle}
      aria-label="Toggle dark and light mode"
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
