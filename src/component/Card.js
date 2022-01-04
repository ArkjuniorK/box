import React, { useContext } from "react";
import { CardContext } from "../source/card";

const Card = (props) => {
  const [services, current, active, setCurrent] = useContext(CardContext);

  // using currentCard for clickable component
  function selectCard() {
    if (props.id === current) return;
    setCurrent(props.id);
  }

  const activated =
    props.active === props.id ? "ring-4 ring-light-100 ring-opacity-70 " : "";

  function formatPrice(price) {
    return new Intl.NumberFormat("en-GB", {
      notation: "compact",
      compactDisplay: "short",
    }).format(price);
  }

  return (
    <div
      id={"card"}
      onClick={selectCard}
      className={`px-8 py-9 relative flex flex-col justify-between rounded-2xl transition-all  ease-in-out duration-200 cursor-pointer select-none ${activated} ${props.bg} ${props.color}`}
      style={{ height: props.height }}
    >
      <div className={" flex flex-col"}>
        <span className={"text-5xl text font-bold"}>
          {props.title.toUpperCase()}
        </span>
        {props.desc && (
          <span className={"font-quicksand font-medium text-lg mt-2"}>
            {props.desc.toUpperCase()}
          </span>
        )}
      </div>

      <span className={"font-quicksand text-3xl font-medium "}>
        Rp. {formatPrice(props.price)}
      </span>
    </div>
  );
};

const CardWrapper = ({ className, length }) => {
  // TODO Select only first 2 item from cards.items

  const [services, current] = useContext(CardContext);
  const items = services.slice(0, length);

  return (
    <div className={className}>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.name}
          desc={item.desc}
          price={item.price}
          height={"21rem"}
          color={"text-light-200"}
          bg={"bg-red-100"}
          click={true}
          active={current}
        />
      ))}
    </div>
  );
};

export default CardWrapper;
