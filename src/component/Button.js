import { useState } from "react";

const Button = ({ title, icon, className, bg, type, disabled, onClick }) => {
  const [hover, setHover] = useState(false);
  const isbg = bg ? bg : "bg-red-100";
  const ishover = hover ? "py-1 px-3" : "py-2 px-4";

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      className={`flex items-center transition-all duration-500  ease-in-out font-quicksand font-medium focus:outline-none  text-light-200 space-x-2 rounded-full text-sm ${ishover} ${className} ${isbg}`}
    >
      {title && <span> {title} </span>}
      {icon && <i className={`material-icons`}>{icon}</i>}
    </button>
  );
};

export default Button;
