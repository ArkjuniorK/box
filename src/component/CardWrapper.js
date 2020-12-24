import React, { useContext } from 'react'
import { CardContext } from '../source/card'
import Card from './Card'

const CardWrapper = () => {
  // TODO Select only first 2 item from cards.items

  const [cards, setCard] = useContext(CardContext)
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
