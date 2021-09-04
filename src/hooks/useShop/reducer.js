import { ACTION_TYPES } from './actions';

export const defaultState = {
  goods: [
    {
      id: 1,
      price: 21,
      name: 'Good 1',
      count: 0,
    },
    {
      id: 2,
      price: 21,
      name: 'Good 1',
      count: 0,
    },
    {
      id: 3,
      price: 21,
      name: 'Good 1',
      count: 0,
    },
  ],
  bucket: [{
    good: {},
    count:
  }],
};

const handlers = {
  [ACTION_TYPES.ADD_GOODS_TO_BUCKET]: (state, action) => {
    const { payload: { goodIndex } } = action;
    const {goods} = state;
    const good = goods[goodIndex];
    if(good.count > 0){

    }
  },
  [ACTION_TYPES.REMOVE_GOODS_FROM_BUCKET]: (state, action) => {},
  [ACTION_TYPES.INCREMENT_GOOD_COUNT]: (state, action) => {},
  [ACTION_TYPES.DECREMENT_GOOD_COUNT]: (state, action) => {},
};

export const reducer = (state, action) => {
  const { type } = action;
  if (type in handlers) {
    return handlers[type](state, action);
  }
  return state;
};
