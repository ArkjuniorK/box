const Logo = () => {
  return (
    <section className='flex justify-center h-64 my-9 relative'>
      <div id='lyone' className='absolute z-0 mx-auto'>
        <svg
          width='241'
          height='241'
          viewBox='0 0 241 241'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            x='0.984619'
            y='91.8954'
            width='174.429'
            height='174.429'
            rx='15'
            transform='rotate(-31.4631 0.984619 91.8954)'
            fill='#FF3F3F'
          />
        </svg>
      </div>
      <div id='lytwo' className='absolute z-10 mx-auto '>
        <svg
          width='247'
          height='248'
          viewBox='0 0 247 248'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='123.989'
            width='174.429'
            height='174.429'
            rx='15'
            transform='rotate(-45 0 123.989)'
            fill='#FF6161'
          />
        </svg>
      </div>
    </section>
  )
}

export default Logo
