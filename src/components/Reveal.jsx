import { useReveal } from '../hooks/useReveal'

export default function Reveal({ className = '', delay = 0, children, ...rest }) {
  const { ref, visible } = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </div>
  )
}
