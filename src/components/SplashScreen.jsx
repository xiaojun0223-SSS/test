import { useState, useEffect } from 'react'

export default function SplashScreen({ onDone }) {
  const [phase, setPhase] = useState('show') // show → exit → done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('exit'), 600)
    const t2 = setTimeout(onDone, 950)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [onDone])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-[600ms] ${
        phase === 'exit' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#2D993A' }}
    >
      <img
        src="/images/open logo.png"
        alt=""
        className="h-[120px] w-auto transition-all duration-[600ms] ease-out"
        style={{
          transform: phase === 'exit' ? 'scale(1.08)' : 'scale(1)',
          opacity: phase === 'exit' ? 0 : 1,
        }}
      />
    </div>
  )
}
