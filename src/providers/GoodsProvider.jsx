import {createContext, useReducer} from 'react';
import {defaultState, reducer} from '../hooks/useBasket/reducer';

export const GoodsContext = createContext(null);

export const GoodsProvider = ({children}) => {
    const state = useReducer(reducer, defaultState);


    return (
        <GoodsContext.Provider value={state}>{children}</GoodsContext.Provider>
    );
};
