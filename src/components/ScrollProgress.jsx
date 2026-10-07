import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = document.documentElement
        const max = el.scrollHeight - el.clientHeight
        setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0)
      })
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress / 100})` }} />
    </div>
  )
}
