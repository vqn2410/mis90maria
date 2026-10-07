import { useState } from 'react'
import Confetti from './Confetti'
import Reveal from './Reveal'
import { EVENT, MESSAGES } from '../data/event'

export default function CandleSection() {
  const [blown, setBlown] = useState(false)

  return (
    <section className="section candle-section" id="deseo">
      <Reveal className={`candle-stage ${blown ? 'is-blown' : ''}`}>
        <Confetti active={blown} count={34} />

        <p className="section__eyebrow">El deseo</p>
        <h2 className="section__title">
          {blown ? MESSAGES.candleWish : `Un deseo para ${EVENT.honoree}`}
        </h2>
        <p className="candle__prompt">
          {blown ? '🎉 Gracias por soplarla con nosotros 🎉' : MESSAGES.candlePrompt}
        </p>

        <div className="candle" aria-hidden="true">
          <div className="candle__glow" />
          <div className="candle__flame" />
          <div className="candle__smoke">
            <i />
            <i />
            <i />
          </div>
          <div className="candle__wick" />
          <div className="candle__body">
            <span className="candle__num">90</span>
          </div>
          <div className="candle__plate" />
        </div>

        <button
          type="button"
          className="button button--primary candle__button"
          onClick={() => setBlown((value) => !value)}
        >
          {blown ? `↻ ${MESSAGES.candleAgain}` : 'Soplar la vela 🎂'}
        </button>
      </Reveal>
    </section>
  )
}
