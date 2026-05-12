import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'

export default function App() {
  const [page, setPage] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setPage(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (page === '#/work') return <WorkPage />
  if (page === '#/about') return <AboutPage />
  return <HomePage />
}
