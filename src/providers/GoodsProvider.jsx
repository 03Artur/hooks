import { createContext } from 'react';

export const GoodsContext = createContext(null);

export const GoodsProvider = ({ children }) => {



  return (
    <GoodsContext.Provider value={}>{children}</GoodsContext.Provider>
  );
}
