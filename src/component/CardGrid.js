import { useState, useContext } from "react";
import { CardContext } from "../source/card";
import { AnimationContext } from "../source/animation";
import Button from "./Button";

const CardGrid = ({ title, price, feature, left }) => {
  const [hover, setHover] = useState(false);
  const [animate, setAnimate] = useState(false);

  // class and style for parent
  const classname = animate ? "border-red-100 border-4" : ""; // border of the card when animate
  const width = animate ? "210%" : "100%"; // width of the card when animate
  const leftSide = left ? " right-0" : ""; // for card that placed in left

  // class for child one
  const flexState = hover ? "flex-initial" : "flex-1";

  // first toggle the animate then hover
  // do backward if both of state is false
  function toggleHover() {
    if (!animate && !hover) {
      setAnimate(!animate);
      setTimeout(() => setHover(!hover), 200);
    } else {
      setHover(!hover);
      setTimeout(() => setAnimate(!animate), 200);
    }
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(price);
  }

  return (
    <div className={"relative select-none cursor-pointer h-64"}>
      <div
        id={"parent"}
        onClick={toggleHover}
        className={`flex ${leftSide} ${classname} absolute bg-light-100 transform h-full rounded-3xl overflow-hidden ease-in-out duration-200 transition-all`}
        style={{ width: width }}
      >
        {/* child one */}
        <div
          className={` text-dark pl-10 py-10 flex flex-col justify-between ${flexState} `}
        >
          <span className={"text-5xl font-bold"}>{title.toUpperCase()}</span>
          <span className={"font-quicksand text-3xl font-medium"}>
            Rp. {formatPrice(price)}
          </span>
        </div>

        {/* child two */}
        {hover && (
          <div
            className={`py-10 pr-10 flex flex-initial flex-col justify-between`}
          >
            <div className={"flex flex-col space-y-1"}>
              {feature.map((value) => (
                <div className={"inline-flex font-medium "}>
                  <span className={"material-icons mr-2 opacity-90 text-lg"}>
                    verified
                  </span>
                  {value}
                </div>
              ))}
            </div>
            <Button
              title={"ORDER HERE"}
              icon={"arrow_right_alt"}
              className={"w-max"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

const CardGridWrapper = () => {
  const [services] = useContext(CardContext);
  const left = services.slice(0, 2);
  const right = services.slice(2, 4);

  // Animation
  const [y] = useContext(AnimationContext);
  const divide = 300;
  const tyLeft = 4 - y / divide; // from down to up
  const tyRight = -4 + y / divide; // from up to down

  return (
    <div className={"grid grid-cols-4 gap-7 mt-20 mb-28"}>
      <div
        className={
          "grid grid-rows-2 col-start-2 gap-7 relative transform transition-transform ease-out duration-700"
        }
        style={{ transform: `translateY(${tyLeft}rem)` }}
      >
        {left.map((card) => (
          <CardGrid
            key={card.id}
            title={card.name}
            price={card.price}
            feature={card.feature}
            left={true}
          />
        ))}
      </div>

      <div
        className={
          " grid grid-rows-2 col-start-3 gap-7 relative transform transition-transform ease-out duration-700"
        }
        style={{ transform: `translateY(${tyRight}rem)` }}
      >
        {right.map((card) => (
          <CardGrid
            key={card.id}
            title={card.name}
            price={card.price}
            feature={card.feature}
          />
        ))}
      </div>
    </div>
  );
};

export default CardGridWrapper;
