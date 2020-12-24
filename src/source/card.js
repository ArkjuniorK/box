import React, { useState } from 'react'

/* HOW TO WORK WITH CONTEXT API
 *  */
const cards = {
  items: [
    {
      id: 1,
      title: 'Turbo Max',
      desc: 'for gaming and streaming',
      price: 280,
      feature: [
        '100Mbps',
        'Stable Networking Area',
        '12 Game Voucher for Selected Games',
      ],
      status: false,
    },
    {
      id: 2,
      title: 'Super User',
      desc: 'for multimedia and office',
      price: 200,
      feature: [
        '80Mbps',
        'Free 12 TV Channel',
        'Unlimited Phone Call with Box Users',
      ],
      status: false,
    },
    {
      id: 3,
      title: 'Show Bizz',
      desc: 'for entertaiment and streaming',
      price: 170,
      feature: [
        '50Mbps',
        'Access From All Device',
        '10 Movies and Drama on Selected Provider',
      ],
      status: false,
    },
    {
      id: 4,
      title: 'Wow College',
      desc: 'for college and high scholl student',
      price: 100,
      feature: [
        '20Mbps',
        'Stable Networking Area',
        '12 Voucher Academic on Selected Provider',
      ],
      status: false,
    },
  ],
  currentCard: 1,
}

const CardContext = React.createContext([{}, () => {}])
const CardProvider = ({ children }) => {
  const [card, setCard] = useState(cards)

  return (
    <CardContext.Provider value={[card, setCard]}>
      {children}
    </CardContext.Provider>
  )
}

export { CardContext, CardProvider, cards }
