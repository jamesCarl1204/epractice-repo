import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './sections/Home/Home'
import Projects from './sections/Projects/Projects'
import useTheme from './hooks/useTheme'
import useScrollSpy from './hooks/useScrollSpy'
import styles from './App.module.css'

const SECTION_IDS = ['home', 'projects']

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const active = useScrollSpy(SECTION_IDS)

  return (
    <>
      <Header active={active} theme={theme} onToggleTheme={toggleTheme} />
      <main className={styles.main}>
        <Home />
        <Projects />
      </main>
      <Footer />
    </>
  )
}
