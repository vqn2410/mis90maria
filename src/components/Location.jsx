import Reveal from './Reveal'
import { EVENT, MAPS_URL } from '../data/event'

export default function Location() {
  return (
    <section className="section location" id="ubicacion">
      <Reveal className="location__card">
        <span className="location__pin" aria-hidden="true">
          📍
        </span>
        <p className="section__eyebrow">Dónde nos encontramos</p>
        <h2 className="section__title">Ubicación</h2>

        <address className="location__address">
          <span>{EVENT.address.street}</span>
          <span>{EVENT.address.city}</span>
          <span>{EVENT.address.province}</span>
        </address>

        <a
          className="button button--primary"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">📍</span> Ver ubicación
        </a>
      </Reveal>
    </section>
  )
}
