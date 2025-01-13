import React, { createContext, useState, useContext } from 'react';
import { configurationObj } from '../Objects/ConfigurationObj';
const ConfigurationContext = createContext();

export const useConfiguration = () => useContext(ConfigurationContext);

export const ConfigurationProvider = ({ children }) => {
  const [configuration, setConfiguration] = useState(configurationObj);

  return (
    <ConfigurationContext.Provider value={{ configuration, setConfiguration }}>
      {children}
    </ConfigurationContext.Provider>
  );
};
