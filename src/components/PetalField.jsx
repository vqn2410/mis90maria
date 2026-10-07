import { useMemo } from 'react'

export default function PetalField({ count = 14 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 14,
        duration: 16 + Math.random() * 14,
        size: 9 + Math.random() * 11,
        sway: (Math.random() * 2 - 1) * 70,
        drift: (Math.random() * 2 - 1) * 90,
        opacity: 0.22 + Math.random() * 0.28,
        hue: -10 + Math.random() * 26,
      })),
    [count],
  )

  return (
    <div className="petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.25}px`,
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--sway': `${p.sway}px`,
            '--drift': `${p.drift}px`,
            '--hue': `${p.hue}deg`,
          }}
        />
      ))}
    </div>
  )
}
