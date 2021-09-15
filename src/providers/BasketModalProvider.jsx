import {createContext, useState} from 'react';

export const BasketModalContext = createContext(null);

export const BasketModalProvider = ({children}) => {
    const state = useState(false);
    return (
        <BasketModalContext.Provider value={state}>
            {children}
        </BasketModalContext.Provider>
    );
};
