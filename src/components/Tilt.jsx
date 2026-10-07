import { useRef } from 'react'

export default function Tilt({ className = '', max = 9, children }) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--rx', `${(-py * max).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * max).toFixed(2)}deg`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${className}`.trim()}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {children}
    </div>
  )
}
