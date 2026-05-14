import { useEffect, useRef } from 'react'

export default function ParallaxImage({ src, alt, className = '', amplitude = 0.50 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.style.transform = 'scale(1)'
    el.style.transformOrigin = 'center center'

    let raf
    const observer = new IntersectionObserver(
      ([entry]) => {
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(() => {
          el.style.transform = `scale(${1 + amplitude * (1 - entry.intersectionRatio)})`
        })
      },
      { threshold: Array.from({ length: 51 }, (_, i) => i / 50) }
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [amplitude])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
    />
  )
}
