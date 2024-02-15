import React, { useState, createContext } from 'react';
import { mockData } from '../mockData';
export const AppContext = createContext();

function AppContextProvider(props) {
  const [data, setData] = useState(mockData);
  const [cartData, setCartData] = useState([]);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        cartData,
        setCartData,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
