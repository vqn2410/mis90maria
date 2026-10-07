import { useMemo } from 'react'

const COLORS = ['#e8d8b0', '#d9b86a', '#c9a24a', '#f4ead2', '#a87d3f']

export default function Confetti({ active = false, count = 26 }) {
  const pieces = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 1.6,
        duration: 3.6 + Math.random() * 2.6,
        size: 5 + Math.random() * 7,
        drift: (Math.random() - 0.5) * 120,
        rotate: Math.random() * 360,
        color: COLORS[i % COLORS.length],
      })),
    [count],
  )

  if (!active) return null

  return (
    <div className="confetti" aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti__piece"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 1.6}px`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            '--drift': `${p.drift}px`,
            '--rotate': `${p.rotate}deg`,
          }}
        />
      ))}
    </div>
  )
}
