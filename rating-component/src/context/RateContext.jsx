import React, { createContext, useContext, useState } from "react";

const RateContext = createContext();

export const RateProvider = ({ children }) => {
  const [selectedRate, setSelectedRate] = useState(null);

  return (
    <RateContext.Provider value={{ selectedRate, setSelectedRate }}>
      {children}
    </RateContext.Provider>
  );
};

const useRate = () => {
  return useContext(RateContext);
};

export default useRate;
