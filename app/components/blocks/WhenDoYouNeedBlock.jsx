/**
 * WhenDoYouNeedBlock — wraps the existing WhenDoYouNeed component.
 * Maps block fields (heading, gradient, color, scenarios) to the
 * { whenHeading, gradient, color, scenarios } shape WhenDoYouNeed expects.
 */
import WhenDoYouNeed from '../WhenDoYouNeed'

export default function WhenDoYouNeedBlock({ heading, gradient, color, scenarios = [] }) {
  const data = {
    whenHeading: heading,
    gradient: gradient || 'linear-gradient(160deg,#111,#2a2a2a)',
    color: color || '#1a1a1a',
    scenarios,
  }
  return <WhenDoYouNeed data={data} />
}
