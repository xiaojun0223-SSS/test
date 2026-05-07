export default function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white">
      {/* Logo */}
      <div className="text-sm font-medium tracking-wide text-[#4CAF50]">
        GOOD NEWS
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-sm font-medium text-[#4CAF50]">
        <a href="#work" className="inline-block hover:scale-110 transition-transform">
          WORK
        </a>
        <a href="#about" className="inline-block hover:scale-110 transition-transform">
          ABOUT
        </a>
        <a href="#contact" className="inline-block hover:scale-110 transition-transform">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
