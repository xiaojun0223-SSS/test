import Header from './components/Header'
import Hero from './components/Hero'
import DiscoverMore from './components/DiscoverMore'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DiscoverMore />
      <Gallery />
      <Footer />
    </div>
  )
}
