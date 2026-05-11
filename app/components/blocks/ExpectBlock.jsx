/**
 * ExpectBlock — renders the Expect component with optional dark background.
 */
import Expect from '../Expect'

export default function ExpectBlock({ dark = true }) {
  return <Expect dark={dark} />
}
