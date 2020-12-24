const Background = ({ position }) => {
  return (
    <section className={`absolute transform ${position}`}>
      <svg
        width='278'
        height='278'
        viewBox='0 0 278 278'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='139' cy='139' r='138.5' stroke='#FF6161' />
      </svg>
    </section>
  )
}

export default Background
