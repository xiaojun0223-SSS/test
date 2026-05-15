import { useState, useEffect, useRef } from 'react'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import SplashScreen from './components/SplashScreen'

export default function App() {
  const [page, setPage] = useState(() => window.location.hash)
  const [splashDone, setSplashDone] = useState(false)
  const isHomePage = !page || page === '#'
  const initial = useRef(true)

  useEffect(() => {
    const onHashChange = () => {
      setPage(window.location.hash)
      initial.current = false
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // Splash only on first visit to homepage
  if (isHomePage && !splashDone && initial.current) {
    return <SplashScreen onDone={() => setSplashDone(true)} />
  }

  if (page === '#/work') return <WorkPage />
  if (page === '#/about') return <AboutPage />
  return <HomePage />
}
