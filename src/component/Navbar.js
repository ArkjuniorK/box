// assets
import imglogo from '../assets/logo.svg'
import Button from './Button'

// source
import navbar from '../source/navbar'
import React, { useState } from 'react'

// filter and computed
let toUC = (v) => v.toUpperCase()

// Logo Section
const Logo = () => {
  const [hover, setHover] = useState(false)
  return (
    <a
      href='/#'
      className='flex space-x-1 justify-start items-center relative'
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <img
        src={imglogo}
        alt='Logo'
        className={`
          transform transition-transform duration-700 ease-in-out
          ${hover ? 'rotate-180' : ''}
        `}
      />
      <span className={['font-raleway font-bold text-2xl']}>{toUC('box')}</span>
    </a>
  )
}

// Nav Items
const Item = ({ item }) => {
  const [hover, setHover] = useState(false)

  return (
    <a
      href={item.url}
      className={`flex space-x-1 items-center transition-all duration-100 ease-in-out ${
        hover ? 'text-red-100' : ''
      }`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <span> {toUC(item.name)} </span>
      <i
        className={`material-icons text-sm transform transition-transform duration-500 ease-in-out ${
          hover ? 'translate-x-0 opacity-1' : '-translate-x-1 opacity-0'
        }`}
      >
        arrow_forward
      </i>
    </a>
  )
}

// Navbar
const Navbar = () => {
  return (
    <nav className='text-dark mx-auto relative grid grid-cols-4 gap-0 h-32'>
      {/* USE GRID */}
      <section className='my-auto'>
        <Logo />
      </section>

      <section className='col-span-2 my-auto'>
        <ul className='flex space-x-6 justify-center font-quicksand font-semibold text-sm'>
          {navbar.nav.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      </section>
      <section className='ml-auto my-auto'>
        <Button title={toUC(navbar.button.name)} icon={navbar.button.icon} />
      </section>
    </nav>
  )
}

export default Navbar
