import React, { createContext, useState } from "react";

export const LoginContext = createContext("");

const Context = ({ children }) => {
  const [userData, setUserData] = useState("");

  return (
    <>
      <LoginContext.Provider value={{ userData, setUserData }}>
        {children}
      </LoginContext.Provider>
    </>
  );
};

export default Context;
