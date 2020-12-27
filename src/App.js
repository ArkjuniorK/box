/* react utlis */
import React, { useContext, useEffect } from 'react'

/* source */
import { CardProvider } from './source/card'
import { SentencesProvider } from './source/middleText'
import { AnimationProvider, AnimationContext } from './source/animation'

/* components */
import Navbar from './component/Navbar'
import Button from './component/Button'
import Background from './component/Background'
import Text from './component/Text'
import Logo from './component/Logo'
import CardWrapper from './component/Card'
import CardViewer from './component/CardViewer'
import Sentences from './component/Sentences'
import CardGridWrapper from './component/CardGrid'
import Footer from './component/Footer'

// TODO Create a context for all components
// so it will only react on those context without creating multiple useEffect
// on each component

const App = () => {
  useEffect(() => {}, [])
  return (
    <AnimationProvider>
      <div
        id='app'
        className='bg-dark relative overflow-x-hidden transition-all duration-500 ease-in-out h-full'
      >
        <Background
          position='z-20 left-0'
          translateX={-12}
          translateY={20}
          divideX={700}
          divideY={500}
        />
        <Background
          position='right-0'
          translateX={9}
          translateY={10}
          divideX={600}
          divideY={400}
        />
        <Background
          position='left-0 '
          translateX={10}
          translateY={90}
          divideX={700}
          divideY={700}
        />
        <Background
          position='right-0'
          translateX={-12}
          translateY={120}
          divideX={1400}
          divideY={-1100}
        />
        <header className='container mx-auto relative '>
          <Navbar />
          <Logo />
          <Text />
          <Button title={'BECOME MEMBER'} className={'mx-auto font-bold'} />
        </header>

        <main className={'container mx-auto relative my-20 w-full px-11 '}>
          <CardProvider>
            <Background
              position=' w-full'
              translateX={33}
              translateY={2}
              typeX={'%'}
              divideX={1000}
              divideY={400}
            />
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

          <section className={'w-full'}>
            <div className={'text-center text-light-200'}>
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
            <div className={'flex text-light-200 space-x-5 mx-auto w-2/5'}>
              <div className={'text-right flex flex-col justify-between'}>
                <span className={'font-bold text-4xl font-raleway '}>
                  FULL SUPPORT
                </span>
                <Button
                  title={'CONTACT US'}
                  icon={'arrow_right_alt'}
                  className={'font-bold w-max'}
                />
              </div>
              <p className={'text-lg font-quicksand font-medium'}>
                Decide what plan you want to your life and enjoy it. Full
                support from our team. We always ready to give you the best
                interconnection experience with our services.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </AnimationProvider>
  )
}

export default App
