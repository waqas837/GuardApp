import React, { useState } from "react";
export const MainContext = React.createContext();
export const Provider = ({ children }) => {
  const [lnglat, setlnglat] = useState("No Initial Value");
  return (
    <MainContext.Provider value={{ lnglat, setlnglat }}>
      {children}
    </MainContext.Provider>
  );
};
