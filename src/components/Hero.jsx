import { useEffect, useState } from 'react'
import Confetti from './Confetti'
import { EVENT, MESSAGES, PHOTO_SMILE } from '../data/event'

export default function Hero() {
  const [confetti, setConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(true), 700)
    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="hero" id="portada">
      <div
        className="hero__bg"
        style={{ backgroundImage: `url(${PHOTO_SMILE.src})` }}
        aria-hidden="true"
      />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />
      <Confetti active={confetti} />

      <div className="hero__content">
        <p className="hero__eyebrow">Estás invitado a celebrar</p>

        <div className="hero__ornament" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>

        <div className="hero__monogram" aria-hidden="true">
          <span>{EVENT.honoree.charAt(0)}</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__name">{EVENT.honoree}</span>
          <span className="hero__line">Cumple</span>
          <span className="hero__age">{EVENT.age}</span>
        </h1>

        <p className="hero__subtitle">Años · Nueve décadas</p>

        <div className="hero__surprise-tag">¡Tenemos una sorpresa preparada!</div>

        <p className="hero__phrase">{MESSAGES.coverPhrase}</p>

        <a className="hero__cta" href="#foto">
          Descubrir invitación <span aria-hidden="true">↓</span>
        </a>

        <p className="hero__whisper">🤫 Es sorpresa · No le cuentes a María 🤫</p>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span />
      </div>
    </header>
  )
}
