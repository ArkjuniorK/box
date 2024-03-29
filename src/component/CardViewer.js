import React, { useContext, useState, useEffect } from "react";
import { CardContext } from "../source/card";
import Button from "./Button";

// custom animation component
import Animate from "./Animate";

const CardViewer = () => {
  // use cards from CardContext to access the currentCard that active
  // then filter the cards whenever the card.id is match with currentCard
  const [services, current, active] = useContext(CardContext);

  return (
    <div
      className={
        "bg-light-100 text-dark rounded-2xl p-9 flex flex-col justify-between select-none"
      }
      style={{ height: "21rem" }}
    >
      <div>
        <span
          id={"test"}
          className={"text-dark uppercase text-4xl font-extrabold block "}
        >
          <Animate id="test" animateClass="animate-fade">
            {active.name}
          </Animate>
        </span>
        <div className="block space-y-2 w-auto font-quicksand font-medium text-2xl mt-6">
          {active.feature !== undefined
            ? active.feature.map((value, idx) => (
                <div className="flex items-center font-medium " key={idx}>
                  <span className="material-icons mr-2 opacity-90 ">
                    verified
                  </span>
                  {value}
                </div>
              ))
            : ""}
        </div>
      </div>
      <div className={"flex justify-between items-end"}>
        <a
          href="#"
          className={"font-medium hover:text-opacity-50 transition-opacity"}
        >
          {"ask question".toUpperCase()}
        </a>
        <Button title={"ORDER HERE"} icon={"arrow_right_alt"} />
      </div>
    </div>
  );
};

export default CardViewer;
