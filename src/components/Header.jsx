export default function Header({ active }) {
  const isWork = active === 'work'
  const isAbout = active === 'about'

  return (
    <header className="flex items-center justify-between px-10 py-6 bg-white">
      {/* Logo */}
      <a href="#" className="text-sm font-medium tracking-wide text-[#4CAF50] hover:scale-110 inline-block transition-transform">
        GOOD NEWS
      </a>

      {/* Navigation */}
      <nav className="flex items-center gap-8 text-sm font-medium">
        <a
          href="#/work"
          className={`inline-block hover:scale-110 transition-transform ${isWork ? 'text-black' : 'text-[#4CAF50]'}`}
        >
          WORK
        </a>
        <a
          href="#/about"
          className={`inline-block hover:scale-110 transition-transform ${isAbout ? 'text-black' : 'text-[#4CAF50]'}`}
        >
          ABOUT
        </a>
        <a href="#contact" className="inline-block hover:scale-110 transition-transform text-[#4CAF50]">
          CONTACT
        </a>
      </nav>
    </header>
  )
}
