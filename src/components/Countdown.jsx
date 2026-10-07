import Reveal from './Reveal'
import { useCountdown } from '../hooks/useCountdown'
import { EVENT_DATE } from '../data/event'

const pad = (value) => String(value).padStart(2, '0')

export default function Countdown() {
  const { days, hours, minutes, seconds, finished } = useCountdown(EVENT_DATE)

  if (finished) {
    return (
      <section className="section countdown" id="cuenta-regresiva">
        <Reveal className="countdown__finished">
          <span aria-hidden="true">🎉</span>
          <h2>¡Llegó el gran momento!</h2>
          <span aria-hidden="true">🎉</span>
        </Reveal>
      </section>
    )
  }

  const units = [
    { label: 'Días', value: days },
    { label: 'Horas', value: pad(hours) },
    { label: 'Minutos', value: pad(minutes) },
    { label: 'Segundos', value: pad(seconds) },
  ]

  return (
    <section className="section countdown" id="cuenta-regresiva">
      <Reveal>
        <p className="section__eyebrow">Falta cada vez menos</p>
        <h2 className="section__title">Cuenta regresiva</h2>
      </Reveal>

      <Reveal className="countdown__grid" delay={120}>
        {units.map((unit) => (
          <div className="countdown__unit" key={unit.label}>
            <span className="countdown__value">{unit.value}</span>
            <span className="countdown__label">{unit.label}</span>
          </div>
        ))}
      </Reveal>
    </section>
  )
}
