export default function Header({ active }) {
  const isHome  = active === 'home'
  const isWork  = active === 'work'
  const isAbout = active === 'about'

  return (
    <header className="flex items-end justify-between px-4 md:px-10 py-4 md:py-6 bg-white">
      {/* Logo */}
      <img
        src="/images/home logo.png"
        alt="Home"
        className="h-[18px] w-auto"
      />

      {/* Navigation */}
      <nav className="flex items-center gap-4 md:gap-8 text-sm font-medium">
        {[
          ['HOME', '#', isHome],
          ['WORK', '#/work', isWork],
          ['ABOUT', '#/about', isAbout],
        ].map(([label, href, active]) => (
          <a
            key={label}
            href={href}
            className={`group relative inline-block pb-1 transition-colors duration-300 ${
              active ? 'text-black' : 'text-[#2D993A]'
            }`}
          >
            {label}
            <span
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#2D993A] transition-all duration-300 ${
                active ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </a>
        ))}
      </nav>
    </header>
  )
}
