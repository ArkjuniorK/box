import { createContext, useState, useEffect } from "react";

const AnimationContext = createContext([{}, () => {}]);
const AnimationProvider = ({ children }) => {
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setY(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setY(0);
      });
    };
  }, []);

  return (
    <AnimationContext.Provider value={[y, setY]}>
      {children}
    </AnimationContext.Provider>
  );
};

export { AnimationContext, AnimationProvider };
