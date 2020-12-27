import { useContext, useState } from 'react'
import { AnimationContext } from '../source/animation'
const Background = ({
  position,
  translateX,
  translateY,
  typeX,
  typeY,
  divideY,
  divideX,
}) => {
  const [y] = useContext(AnimationContext)
  const [type] = useState({ x: typeX, y: typeY })
  const [translate] = useState({ x: translateX, y: translateY })

  // identifier
  const tx = translate.x + y / divideX
  const ty = translate.y + y / divideY

  // unit
  const tyx = type.x ? type.x : 'rem'
  const tyy = type.y ? type.y : 'rem'

  return (
    <section
      className={`absolute transform ${position} transition-transform duration-500 ease-in-out`}
      style={{ transform: `translate(${tx + tyx}, ${ty + tyy})` }}
    >
      <svg
        width='278'
        height='278'
        viewBox='0 0 278 278'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='139' cy='139' r='138.5' stroke='#FF6161' />
      </svg>
    </section>
  )
}

export default Background
