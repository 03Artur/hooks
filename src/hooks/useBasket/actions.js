export const ACTION_TYPES = {
    ADD_GOODS_TO_BUCKET: 'ADD_GOODS_TO_BUCKET',
    REMOVE_GOODS_FROM_BUCKET: 'REMOVE_GOODS_FROM_BUCKET',
    INCREMENT_GOOD_COUNT: 'INCREMENT_GOOD_COUNT',
    DECREMENT_GOOD_COUNT: 'DECREMENT_GOOD_COUNT',
};

export const addAction = (goodId) => ({
    type: ACTION_TYPES.ADD_GOODS_TO_BUCKET,
    payload: {
        goodId,
    },
});

export const removeAction = (goodId) => ({
    type: ACTION_TYPES.REMOVE_GOODS_FROM_BUCKET,
    payload: {
        goodId,
    },
});

export const incrementAction = (goodId) => ({
    type: ACTION_TYPES.INCREMENT_GOOD_COUNT,
    payload: {
        goodId,
    },
});


export const decrementAction = (goodId) => ({
    type: ACTION_TYPES.DECREMENT_GOOD_COUNT,
    payload: {
        goodId,
    },
});
