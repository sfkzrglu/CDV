import React, { createContext, useState, useContext } from 'react';

const DatabaseContext = createContext();

export const useDatabase = () => useContext(DatabaseContext);

export const DatabaseProvider = ({ children }) => {
  const [database, setDatabase] = useState({ list: [] });

  return (
    <DatabaseContext.Provider value={{ database, setDatabase }}>
      {children}
    </DatabaseContext.Provider>
  );
};
