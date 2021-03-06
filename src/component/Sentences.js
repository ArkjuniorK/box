import React, { useContext, useEffect } from 'react'
import { SentencesContext } from '../source/middleText'
import { AnimationContext } from '../source/animation'

// TODO Change postion both top and bottom text when scrolling

const SentencesText = ({ text, right, left, position }) => {
  const line = [0, 1, 2, 3]
  const [y] = useContext(AnimationContext)
  const divide = 100

  // if left then start the transform from left to right
  const x = left ? position - y / divide : position + y / divide

  return (
    <div
      className={
        'flex  text-light-200 items-center space-x-7 min-w-max overflow-hidden relative transition-transform duration-700 ease-out transform origin-left'
      }
      style={{ transform: `translateX(${x}rem)` }}
    >
      {left && (
        <span className={'flex items-center space-x-6 left-0'}>
          {line.map((item) => (
            <span
              key={item}
              className={
                'border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w'
              }
            ></span>
          ))}
        </span>
      )}
      <div className={'font-raleway font-bold  text-5xl w-full '}>
        {text.toUpperCase()}
      </div>
      {right && (
        <span className={'flex items-center space-x-6 left-0'}>
          {line.map((item) => (
            <span
              key={item}
              className={
                'border-4 rounded-xl border-red-200 border-opacity-80 h-0 w-56 w'
              }
            ></span>
          ))}
        </span>
      )}
    </div>
  )
}

const Sentences = () => {
  const [sentences] = useContext(SentencesContext)

  useEffect(() => {})

  return (
    <section className={'mt-20 mb-28 space-y-7'}>
      {sentences.map((sentece) => (
        <SentencesText
          key={sentece.id}
          text={sentece.title}
          right={sentece.right}
          left={sentece.left}
          position={sentece.position}
        />
      ))}
    </section>
  )
}

export default Sentences
