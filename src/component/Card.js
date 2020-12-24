import React, { useContext } from 'react'
import { CardContext } from '../source/card'

const Card = ({ id, title, desc, price, current, color, height, bg }) => {
  const [cards, setCard] = useContext(CardContext)

  // using currentCard for clickable component
  function selectCard() {
    if (id === cards.currentCard) return

    setCard((cards) => ({ ...cards, currentCard: id }))
  }

  const active =
    current === id ? 'border-4 border-light-100 border-opacity-70 ' : ''

  return (
    <div
      id={'card'}
      onClick={selectCard}
      className={`px-8 py-9 relative flex flex-col justify-between rounded-2xl transition-all  ease-in-out duration-200 cursor-pointer select-none ${active} ${bg} ${color}`}
      style={{ height: height }}
    >
      <div className={' flex flex-col'}>
        <span className={'text-5xl text font-bold'}>{title.toUpperCase()}</span>
        {desc && (
          <span className={'font-quicksand font-medium text-lg mt-2'}>
            {desc.toUpperCase()}
          </span>
        )}
      </div>

      <span className={'font-quicksand text-3xl font-medium '}>
        Rp. {price}K
      </span>
    </div>
  )
}

const CardWrapper = () => {
  // TODO Select only first 2 item from cards.items

  const [cards] = useContext(CardContext)
  const items = cards.items.slice(0, 2)
  const current = cards.currentCard

  return (
    <div className={'grid grid-cols-2 gap-9'}>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          desc={item.desc}
          price={item.price}
          height={'21rem'}
          color={'text-light-200'}
          bg={'bg-red-100'}
          click={true}
          current={current}
        />
      ))}
    </div>
  )
}

export default CardWrapper
