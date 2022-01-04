import React, { createContext, useState } from "react";

const UserContext = createContext([{}, "", () => {}, () => {}]);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [id, setId] = useState("");

  return (
    <UserContext.Provider value={[user, id, setUser, setId]}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
