/* react utlis */
import React, { useState, useContext, useEffect } from 'react'
import {
  Transition,
  SwitchTransition,
  CSSTransition,
} from 'react-transition-group'
import './assets/App.css'

/* source */
import { CardProvider, CardContext } from './source/card'
import { SentencesProvider } from './source/middleText'

/* components */
import Navbar from './component/Navbar'
import Button from './component/Button'
import Background from './component/Background'
import Text from './component/Text'
import Logo from './component/Logo'
import CardWrapper from './component/CardWrapper'
import CardViewer from './component/CardViewer'
import Sentences from './component/Sentences'

const CardGrid = ({ title, price, feature, left }) => {
  const [hover, sethover] = useState(false)

  const classname =
    hover && left
      ? 'absolute top-0 right-0 border-red-100 border-2 '
      : hover
      ? 'absolute border-red-100 border-2 '
      : ''

  const width = hover ? '36rem' : 'auto'

  return (
    // <div>
    <div
      className={`${classname} bg-light-100 text-dark px-10 py-9 rounded-2xl relative z-10 transition-all ease-in-out duration-300 `}
      style={{ height: '15rem' }}
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
    >
      <div className={'flex relative h-full'}>
        <div
          id={'right'}
          className={'h-full flex-grow-0 flex-1 flex flex-col justify-between'}
        >
          <h1 className={'font-bold text-5xl'}>{title.toUpperCase()}</h1>
          <span className={'font-quicksand text-3xl font-medium '}>
            Rp. {price}K
          </span>
        </div>
        {hover && (
          <div
            className={
              'flex-1 ml-8 z-0 flex-grow  flex flex-col justify-between bg-light-100 '
            }
          >
            <div
              style={{ width: width }}
              className={'font-quicksand text-lg flex flex-col'}
            >
              {feature.map((item, index) => (
                <div
                  key={index}
                  className={' inline-flex items-start font-medium '}
                >
                  <span className={'material-icons mr-2 opacity-90 text-base'}>
                    verified
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <Button
              title={'ORDER HERE'}
              icon={'arrow_right_alt'}
              className={'flex-grow-0 w-max'}
            />
          </div>
        )}
      </div>
    </div>
    // </div>
  )
}

const CardGridWrapper = () => {
  const [cards, setCard] = useContext(CardContext)
  let left = []
  let right = []

  // seperate cards.items into 2 array
  cards.items.forEach((card) => {
    if (card.id % 2 === 0) right.push(card)
    // even number
    else left.push(card) // odd number
  })

  return (
    <div className={'grid grid-cols-4 gap-7 my-20'}>
      <div className={'grid grid-rows-2 col-start-2 gap-7 relative'}>
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

      <div className={' grid grid-rows-2 col-start-3 gap-7  relative'}>
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

const App = () => {
  const feature = ['Hello World', 'Hello Js', 'Cangkano is Great']

  return (
    <div id='app' className='bg-light-200 relative overflow-x-hidden'>
      <Background position='-translate-x-48 z-20 translate-y-80 left-0' />
      <Background position='translate-x-36 translate-y-40 right-0' />
      <header className='container mx-auto relative '>
        <Navbar />
        <Logo />
        <Text />
        <Button title={'BECOME MEMBER'} className={'mx-auto font-bold'} />
      </header>
      <main className={'container mx-auto relative my-20 w-full px-11 '}>
        <CardProvider>
          <Background position='translate-x-1/3 -translate-y-6 w-full' />
          <section
            id='cards'
            className={'grid grid-cols-2 gap-9 relative z-10'}
          >
            <CardWrapper />
            <CardViewer />
          </section>
        </CardProvider>
        <SentencesProvider>
          <Sentences />
        </SentencesProvider>
        <section>
          <div className={'text-center'}>
            <h1 className={'font-bold text-4xl mb-2'}>FAVORITE PLAN</h1>
            <span className={'text-2xl'}>Choose Your Style</span>
            <div className={' w-1/2 mx-auto mt-6'}>
              <p className={'font-quicksand text-xl font-medium'}>
                Decide what plan you want to your life and enjoy it. Full
                support from our team. We always ready to give you the best
                interconnection experience with our services.
              </p>
            </div>
          </div>
          <CardProvider>
            <CardGridWrapper />
          </CardProvider>
        </section>
      </main>
    </div>
  )
}

export default App
