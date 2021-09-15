import {useContext, useReducer} from 'react';
import {defaultState, reducer} from './reducer';
import {addAction, decrementAction, removeAction, incrementAction} from './actions';
import {GoodsContext} from '../../providers/GoodsProvider';

export const useBasket = () => {
    const [state, dispatch] = useContext(GoodsContext);

    return [
        state.basket, {
            add: (goodId) => dispatch(addAction(goodId)),
            remove: (goodId) => dispatch(removeAction(goodId)),
            increment: (goodId) => dispatch(incrementAction(goodId)),
            decrement: (goodId) => dispatch(decrementAction(goodId)),
        },
    ];
};
