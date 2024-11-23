import { createContext, useContext, useEffect, useState } from 'react';
import data from "/src/Data/api.json"
// Create a Context
const DataContext = createContext();

// Create a provider component
// eslint-disable-next-line react/prop-types
export const DataProvider = ({ children }) => {

    // without localstorage
  // const [res, setRes] = useState(data);

     // localstorage
  
     const [res, setRes] = useState(() => {
      const storedData = localStorage.getItem("res");
      return storedData ? JSON.parse(storedData) : data; // Use localStorage if available
    });
  
    // Sync state with localStorage whenever it changes
    useEffect(() => {
      localStorage.setItem("res", JSON.stringify(res));
    }, [res]);

  return (
    <DataContext.Provider value={{ res, setRes }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use context
export const useDataContext = () => {
  return useContext(DataContext);
};
