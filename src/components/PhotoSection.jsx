import { useState } from 'react'
import Reveal from './Reveal'
import Tilt from './Tilt'
import { EVENT, MESSAGES, PHOTO_MAIN } from '../data/event'

export default function PhotoSection() {
  const [failed, setFailed] = useState(false)

  return (
    <section className="section photo" id="foto">
      <div className="photo__composition">
        <Reveal className="photo__frame-wrap">
          <Tilt className="photo__tilt" max={8}>
            <div className="photo__frame">
              <div className="photo__ring" aria-hidden="true" />
              {failed ? (
                <div className="photo__fallback" role="img" aria-label={`Foto de ${EVENT.honoree}`}>
                  {EVENT.honoree.charAt(0)}
                </div>
              ) : (
                <img
                  className="photo__image"
                  src={PHOTO_MAIN.src}
                  alt={PHOTO_MAIN.alt}
                  onError={() => setFailed(true)}
                />
              )}
              <span className="photo__age-badge">{EVENT.age} años</span>
            </div>
          </Tilt>
        </Reveal>
      </div>

      <Reveal className="photo__copy" delay={120}>
        <h2 className="section__title">{EVENT.honoree}</h2>
        <p className="photo__message">{MESSAGES.photoMessage}</p>
        <p className="photo__signature">{MESSAGES.photoSignature}</p>
      </Reveal>
    </section>
  )
}
