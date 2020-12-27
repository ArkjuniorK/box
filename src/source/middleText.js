import React, { useState } from 'react'

const sentecesArray = [
  {
    id: 1,
    title: 'compatible with almost',
    right: true,
    left: false,
    position: -4,
  },
  { id: 2, title: 'every provider', right: true, left: true, position: -32.5 },
  {
    id: 3,
    title: 'on indonesia and 12 country',
    right: false,
    left: true,
    position: -24,
  },
]

const SentencesContext = React.createContext([{}, () => {}])
const SentencesProvider = ({ children }) => {
  const [senteces, setsenteces] = useState(sentecesArray)

  return (
    <SentencesContext.Provider value={[senteces, setsenteces]}>
      {children}
    </SentencesContext.Provider>
  )
}

export { SentencesContext, SentencesProvider }
