import { useEffect } from 'react'

const Text = () => {
  // use effect to gave the <strong> tag 'text-dark' class
  useEffect(() => {
    const span = document.querySelectorAll('#text')
    span.forEach((item) => {
      const strong = Object.values(item.children)
      strong.forEach((tag) => (tag.className += 'text-dark font-black'))
    })
  })

  return (
    <section className='relative flex items-center'>
      <div className='absolute z-0 flex font-raleway text-3xl w-full justify-center space-x-16'>
        <div className='text-left text-red-100'>
          <span id='text'>
            TAKE YOUR <br /> <strong>FREEDOM</strong> AND <strong>ENJOY</strong>
          </span>
        </div>
        <div className='text-center text-red-100'>
          <span id='text'>
            BE <strong>CONSIESE</strong> AND TAKE <br />
            <strong>CONTROL</strong> OF IT
          </span>
        </div>
        <div className='text-right text-red-100'>
          <span id='text'>
            YOUR <strong>FIRST</strong> <br />
            <strong>INTERNET</strong> PROVIDER:
          </span>
        </div>
      </div>
      <div className='relative z-10 grid grid-cols-5 w-full h-36'>
        <span
          className={'w-full col-span-2 trans bg-gradient-to-r from-light-200'}
        />
        <span></span>
        <span className={'w-full col-span-2 bg-gradient-to-l from-light-200'} />
      </div>
    </section>
  )
}

export default Text
