import {ACTION_TYPES} from './actions';

export const defaultState = {
    goods: [
        {
            id: 1,
            price: 21,
            name: 'Good 1',
            count: 10 + 10,
        },
        {
            id: 2,
            price: 21,
            name: 'Good 2',
            count: 2,
        },
        {
            id: 3,
            price: 21,
            name: 'Good 3',
            count: 0,
        },
    ],
    basket: [],
};

const handlers = {
    [ACTION_TYPES.ADD_GOODS_TO_BUCKET]: (state, action) => {
        console.log({
            state,
            action,
        });
        const {payload: {goodId}} = action;
        const {goods, basket} = state;
        const goodIndex = goods.findIndex(({id}) => id === goodId);
        if (goodIndex === -1) {
            return state;
        }
        if (goods[goodIndex].count < 1) {
            return state;
        }
        const newGoods = [...goods];
        newGoods[goodIndex] = {
            ...goods[goodIndex],
            count: goods[goodIndex].count - 1,
            isInBasket: true,
        };
        const newBasket = [
            ...basket,
            {
                good: newGoods[goodIndex],
                count: 1,
            },
        ];

        return {
            goods: newGoods,
            basket: newBasket,
        };
    },
    [ACTION_TYPES.REMOVE_GOODS_FROM_BUCKET]: (state, action) => {},
    [ACTION_TYPES.INCREMENT_GOOD_COUNT]: (state, action) => {},
    [ACTION_TYPES.DECREMENT_GOOD_COUNT]: (state, action) => {},
};

export const reducer = (state, action) => {
    const {type} = action;
    if (type in handlers) {
        return handlers[type](state, action);
    }
    return state;
};
