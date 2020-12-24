import { useState } from 'react'

const Button = ({ title, icon, className }) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={`flex items-center bg-dark transition-all duration-300 ease-in-out font-quicksand font-medium  text-light-200 space-x-2 rounded-full text-sm ${
        hover ? 'py-1 px-3' : 'py-2 px-4'
      } ${className}`}
    >
      <span> {title} </span>
      {icon && <i className={`material-icons`}>{icon}</i>}
    </button>
  )
}

export default Button
