import { useState, useContext } from 'react'
import { CardContext } from '../source/card'
import Button from './Button'

const CardGrid = ({ title, price, feature, left }) => {
  const [hover, sethover] = useState(false)

  const classname = hover ? 'border-red-100 border-4 ' : ''
  const leftSide = left ? ' right-0' : ''
  const hoverParent = hover ? 'absolute' : ''
  const width = hover ? '36rem' : '100%'

  function setHover() {
    setTimeout(() => sethover(!hover), 200)
  }

  return (
    <div className={'relative select-none cursor-pointer  h-64'}>
      <div
        className={`flex ${leftSide} ${hoverParent} ${classname} bg-light-100 transform h-full rounded-3xl overflow-hidden ease-in-out duration-200 transition-all`}
        style={{ width: width }}
        onClick={setHover}
      >
        {/* one */}
        <div
          className={` text-dark pl-10 py-10 flex flex-col justify-between flex-1 `}
        >
          <span className={'text-5xl font-bold'}>{title.toUpperCase()}</span>
          <span className={'font-quicksand text-3xl font-medium'}>
            Rp. {price}K
          </span>
        </div>

        {/* two */}
        {hover && (
          <div className={`py-10 pr-10 flex flex-col justify-between`}>
            <div className={'flex flex-col space-y-1'}>
              {feature.map((value) => (
                <div className={'inline-flex font-medium '}>
                  <span className={'material-icons mr-2 opacity-90 text-lg'}>
                    verified
                  </span>
                  {value}
                </div>
              ))}
            </div>
            <Button
              title={'ORDER HERE'}
              icon={'arrow_right_alt'}
              className={'w-max'}
            />
          </div>
        )}
      </div>
    </div>
  )
}

const CardGridWrapper = () => {
  const [cards] = useContext(CardContext)
  let left = []
  let right = []

  // seperate cards.items into 2 array
  cards.items.forEach((card) => {
    // even number
    if (card.id % 2 === 0) right.push(card)
    else left.push(card) // odd number
  })

  return (
    <div className={'grid grid-cols-4 gap-7 mt-20 mb-28'}>
      <div
        className={
          'grid grid-rows-2 col-start-2 gap-7 relative transform translate-y-0'
        }
      >
        {left.map((card) => (
          <CardGrid
            key={card.id}
            title={card.title}
            price={card.price}
            feature={card.feature}
            left={true}
          />
        ))}
      </div>

      <div
        className={
          ' grid grid-rows-2 col-start-3 gap-7 relative translate-y-10 transform-gpu'
        }
      >
        {right.map((card) => (
          <CardGrid
            key={card.id}
            title={card.title}
            price={card.price}
            feature={card.feature}
          />
        ))}
      </div>
    </div>
  )
}

export default CardGridWrapper
