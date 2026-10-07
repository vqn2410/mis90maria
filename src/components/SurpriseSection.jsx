import { useState } from 'react'
import Confetti from './Confetti'
import { useReveal } from '../hooks/useReveal'
import { EVENT, MESSAGES, PHOTO_SECRET } from '../data/event'

export default function SurpriseSection() {
  const { ref, visible } = useReveal({ threshold: 0.25 })
  const [nudge, setNudge] = useState(false)

  const wiggle = () => {
    setNudge(false)
    requestAnimationFrame(() => setNudge(true))
    window.setTimeout(() => setNudge(false), 900)
  }

  return (
    <section className="section surprise" id="sorpresa" ref={ref}>
      <Confetti active={visible} count={22} />

      <div className={`surprise__card ${visible ? 'is-visible' : ''}`}>
        <div className="surprise__grid">
          <div className="surprise__veil-wrap">
            <button
              type="button"
              className={`veil ${nudge ? 'is-nudge' : ''}`}
              onClick={wiggle}
              aria-label="María todavía no puede ver esta foto: es sorpresa"
            >
              <img
                className="veil__photo"
                src={PHOTO_SECRET.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                onError={(event) => {
                  event.currentTarget.style.visibility = 'hidden'
                }}
              />
              <span className="veil__frost" />
              <span className="veil__lock" aria-hidden="true">
                🔒
              </span>
              <span className="veil__hint">{MESSAGES.surpriseSecretHint}</span>
            </button>
          </div>

          <div className="surprise__body">
            <p className="surprise__eyebrow">Confidencial</p>
            <h2 className="surprise__title">🤫 {MESSAGES.surpriseTitle}</h2>
            <p className="surprise__lead">{MESSAGES.surpriseText}</p>

            <div className="surprise__divider" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>

            <p className="surprise__request">{MESSAGES.surpriseRequest}</p>

            <ul className="surprise__rules">
              <li>No comentar</li>
              <li>No publicar</li>
              <li>No revelar la sorpresa</li>
            </ul>

            <p className="surprise__signature">
              — El secreto lo cuidamos entre todos por {EVENT.honoree}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
