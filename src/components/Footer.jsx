import Reveal from './Reveal'
import { EVENT, MESSAGES } from '../data/event'

export default function Footer() {
  return (
    <footer className="section footer" id="cierre">
      <Reveal className="footer__content">
        <div className="footer__ornament" aria-hidden="true">
          <span />
          <i>✦</i>
          <span />
        </div>

        <p className="footer__thanks">{MESSAGES.closing}</p>

        <div className="footer__secret">
          <span className="footer__secret-title">🤫 {MESSAGES.closingSecret} 🤫</span>
          <span className="footer__secret-note">{MESSAGES.closingNote}</span>
        </div>

        <p className="footer__signature">
          {EVENT.honoree} · {EVENT.age} años
        </p>
      </Reveal>
    </footer>
  )
}
