import Reveal from './Reveal'
import { EVENT } from '../data/event'

const details = [
  { icon: '📅', label: 'Fecha', value: EVENT.dateLabel },
  { icon: '🕣', label: 'Hora', value: EVENT.timeLabel, highlight: true },
  {
    icon: '📍',
    label: 'Dirección',
    value: `${EVENT.address.street}, ${EVENT.address.city}`,
  },
]

export default function EventDetails() {
  return (
    <section className="section details" id="detalles">
      <Reveal>
        <p className="section__eyebrow">La celebración</p>
        <h2 className="section__title">Información del evento</h2>
      </Reveal>

      <div className="details__grid">
        {details.map((item, index) => (
          <Reveal
            key={item.label}
            className={`details__card ${item.highlight ? 'details__card--accent' : ''}`}
            delay={index * 110}
          >
            <span className="details__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span className="details__label">{item.label}</span>
            <span className="details__value">{item.value}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="details__punctual" delay={220}>
        <span className="details__punctual-icon" aria-hidden="true">
          ⏰
        </span>
        <span className="details__punctual-text">20:30 HS PUNTUAL</span>
      </Reveal>

      <Reveal className="details__note" delay={280}>
        <span className="details__type">{EVENT.eventType}</span>
      </Reveal>
    </section>
  )
}
