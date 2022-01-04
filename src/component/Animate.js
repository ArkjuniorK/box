import React, { useState, useEffect } from "react";

const Animate = ({ id, children, animateClass }) => {
  const [animation] = useState(animateClass);

  useEffect(
    () => {
      // add 'animate-fade'
      const animate = document.getElementById(id);
      animate.classList.add(animation);
      setTimeout(() => {
        animate.classList.remove(animation);
      }, 300);

      // return () => {}
    },
    [children] /* react when children props is change */
  );

  return <div id={id}>{children}</div>;
};

export default Animate;
