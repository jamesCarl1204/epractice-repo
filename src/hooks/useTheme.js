import { useCallback, useEffect, useState } from 'react'

const getInitialTheme = () =>
  localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  )

  return { theme, toggleTheme }
}
