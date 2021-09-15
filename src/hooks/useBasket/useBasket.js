import {useReducer} from 'react';
import {defaultState, reducer} from './reducer';
import {addAction, decrementAction, removeAction, incrementAction} from './actions';

export const useBasket = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    return [
        state, {
            add: (goodId) => dispatch(addAction(goodId)),
            remove: (goodId) => dispatch(removeAction(goodId)),
            increment: (goodId) => dispatch(incrementAction(goodId)),
            decrement: (goodId) => dispatch(decrementAction(goodId)),
        },
    ];
};
