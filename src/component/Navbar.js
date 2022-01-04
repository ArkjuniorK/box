import navbar from "../source/navbar";
import Button from "./Button";
import React, { useContext, useEffect, useState } from "react";
import imglogo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../source/user";

// filter and computed
let toUC = (v) => v.toUpperCase();

// Logo Section
export const LogoSmall = () => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to="/"
      className="flex space-x-1 justify-start items-center relative"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <img
        src={imglogo}
        alt="Logo"
        className={`
          transform transition-transform duration-700 ease-in-out origin-center
          ${hover ? "rotate-180" : ""}
        `}
      />
      <span className={["font-raleway font-bold text-2xl"]}>{toUC("box")}</span>
    </Link>
  );
};

// Nav Items
const Item = ({ item }) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={item.url}
      className={`flex space-x-1 items-center transition-all duration-100 ease-in-out ${
        hover ? "text-red-100" : "text-light-200"
      }`}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <span> {toUC(item.name)} </span>
      <i
        className={`material-icons text-sm transform transition-transform duration-500 ease-in-out ${
          hover ? "translate-x-0 opacity-1" : "-translate-x-1 opacity-0"
        }`}
      >
        arrow_forward
      </i>
    </Link>
  );
};

// Navbar
const Navbar = ({ login, signin, edit }) => {
  const [user, id, setUser, setId] = useContext(UserContext);
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="text-light-200 container mx-auto relative grid grid-cols-4 gap-0 h-32">
      {/* left */}
      <section className="my-auto">
        <LogoSmall />
      </section>
      {/* middle */}
      <section className="col-span-2 my-auto">
        <ul className="flex space-x-6 justify-center font-quicksand font-semibold text-sm">
          {navbar.nav.map((item, index) => (
            <Item item={item} key={index} />
          ))}
        </ul>
      </section>
      {/* right */}
      {/* {!isLogin && ( */}
      <section
        className={
          id.length !== 0
            ? "hidden"
            : "ml-auto my-auto flex space-x-3 items-center"
        }
      >
        <button
          onClick={login}
          type="button"
          className=" focus:outline-none text-xs font-raleway hover:text-opacity-50 text-light-100 transition ease-in-out duration-500"
        >
          Already member?
        </button>
        <Button
          type={"button"}
          onClick={signin}
          title={toUC(navbar.button.name)}
          icon={navbar.button.icon}
        />
      </section>
      <section
        className={
          id.length === 0
            ? "hidden"
            : "ml-auto relative my-auto flex space-x-3 items-center"
        }
      >
        <div className="text-sm font-raleway font-semibold">
          {user.username}
        </div>
        <span className="material-icons">face</span>
        <button
          onClick={() => {
            setDropdown((prev) => {
              if (prev) return false;
              else return true;
            });
          }}
          className="material-icons focus:outline-none"
        >
          expand_more
        </button>
        {dropdown && (
          <div
            className="absolute bg-light-200 py-2 text-dark right-0 rounded w-max px-4 divide-y divide-dark divide-opacity-30 text-right"
            style={{ top: 34 + "px" }}
          >
            <button
              onClick={edit}
              type="button"
              className="flex focus:outline-none font-quicksand text-right py-2 items-center uppercase font-semibold text-base space-x-2"
            >
              <span className="material-icons text-lg">edit</span>
              <span className="">Edit</span>
            </button>
            <button
              onClick={() => {
                setId("");
                setUser({});
                setDropdown(false);
              }}
              type="button"
              className="flex font-quicksand py-2 items-center uppercase font-semibold text-base space-x-2"
            >
              <span className="material-icons text-lg">logout</span>
              <span className="">Logout</span>
            </button>
          </div>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
