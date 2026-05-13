export default function Header({ active }) {
  const isHome  = active === 'home'
  const isWork  = active === 'work'
  const isAbout = active === 'about'

  return (
    <header className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6 bg-white">
      {/* Logo — no link */}
      <span className="text-sm font-medium tracking-wide text-[#4CAF50]">
        GOOD NEWS
      </span>

      {/* Navigation */}
      <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium">
        <a
          href="#"
          className={`inline-block hover:scale-110 transition-transform ${isHome ? 'text-black' : 'text-[#4CAF50]'}`}
        >
          HOME
        </a>
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
      </nav>
    </header>
  )
}
