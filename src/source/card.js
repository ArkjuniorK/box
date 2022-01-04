import React, { useEffect, useState } from "react";

const CardContext = React.createContext([[], "", {}, () => {}]);
const CardProvider = ({ children, services, current, setCurrent }) => {
  const [active, setActive] = useState({});

  useEffect(() => {
    setActive((prev) => {
      const data = services.filter((item) => item.id === current)[0];
      return { ...prev, ...data };
    });
  }, [current]);

  return (
    <CardContext.Provider value={[services, current, active, setCurrent]}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardProvider };
