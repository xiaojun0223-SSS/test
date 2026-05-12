import Header from '../components/Header'
import Hero from '../components/Hero'
import DiscoverMore from '../components/DiscoverMore'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header active="home" />
      <Hero />
      <DiscoverMore />
      <Gallery />
      <Footer />
    </div>
  )
}
