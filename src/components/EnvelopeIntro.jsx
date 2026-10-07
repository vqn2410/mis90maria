import { EVENT } from '../data/event'

export default function EnvelopeIntro({ leaving, onOpen }) {
  return (
    <div className={`intro ${leaving ? 'is-leaving' : ''}`}>
      <div className="intro__glow" aria-hidden="true" />

      <div className="intro__inner">
        <p className="intro__eyebrow">Tenés una invitación</p>

        <button
          type="button"
          className="intro__envelope"
          onClick={onOpen}
          aria-label="Abrir la invitación y comenzar la música"
        >
          <span className="intro__back" />
          <span className="intro__letter">
            <span className="intro__monogram">{EVENT.honoree.charAt(0)}</span>
            <span className="intro__letter-name">{EVENT.honoree}</span>
            <span className="intro__letter-age">{EVENT.age} años</span>
          </span>
          <span className="intro__front" />
          <span className="intro__flap" />
          <span className="intro__seal">✦</span>
        </button>

        <p className="intro__hint">Tocá el sobre para abrir</p>

        <button type="button" className="button button--primary intro__cta" onClick={onOpen}>
          Abrir invitación
        </button>

        <p className="intro__music">
          <span aria-hidden="true">♪</span> Al abrir, comienza la música
        </p>
      </div>
    </div>
  )
}
