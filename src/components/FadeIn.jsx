import { useEffect, useRef, useState } from 'react'

const dirClasses = {
  up:     { out: 'opacity-0 translate-y-12',  in: 'opacity-100 translate-y-0' },
  down:   { out: 'opacity-0 -translate-y-12', in: 'opacity-100 translate-y-0' },
  left:   { out: 'opacity-0 -translate-x-12', in: 'opacity-100 translate-x-0' },
  right:  { out: 'opacity-0 translate-x-12',  in: 'opacity-100 translate-x-0' },
}

export default function FadeIn({ children, dir = 'up' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [autoV, setAutoV] = useState('up') // for 'auto-v'

  // for non-auto directions, pick class directly
  const isAuto = dir === 'auto-v'
  const cls = isAuto ? dirClasses[autoV] : (dirClasses[dir] || dirClasses.up)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const intersecting = entry.isIntersecting
        setVisible(intersecting)

        if (intersecting && isAuto) {
          // entering from above → slide down; from below → slide up
          const mid = window.innerHeight / 2
          setAutoV(entry.boundingClientRect.top < mid ? 'down' : 'up')
        }
      },
      { threshold: 0 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [isAuto])

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? cls.in : cls.out
      }`}
    >
      {children}
    </div>
  )
}
