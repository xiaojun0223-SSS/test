import { useEffect, useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.transform = 'scale(0.92)'
    el.style.opacity = '0'
    el.style.transformOrigin = 'center bottom'

    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          const p = entry.intersectionRatio // 0 → 1
          el.style.transform = `scale(${0.92 + 0.08 * p})`
          el.style.opacity = p
        })
      },
      { threshold: Array.from({ length: 51 }, (_, i) => i / 50) }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <footer className="w-full">
      <div className="w-full overflow-hidden">
        <img
          ref={ref}
          src="/images/editor.png"
          alt="Editor"
          className="w-full object-cover"
          style={{ transition: 'none' }}
        />
      </div>
    </footer>
  )
}
