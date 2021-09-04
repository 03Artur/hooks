import { ACTION_TYPES } from './actions';

export const defaultState = {
  value: 0,
  step: 1,
};

const handlers = {
  [ACTION_TYPES.INCREMENT]: (state, action) => ({
    ...state,
    value: state.value + state.step,
  }),
  [ACTION_TYPES.DECREMENT]: (state, action) => ({
    ...state,
    value: state.value - state.step,
  }),
  [ACTION_TYPES.SET_STEP]: (state, action) => {
    const { payload: { step } } = action;
    return {
      ...state,
      step,
    };
  },
  [ACTION_TYPES.RESET]: (state, action) => {
    const { payload: { initialState } } = action;
    return initialState;
  },
};

export const reducer = (state, action) => {
  const { type } = action;
  if (type in handlers) {
    return handlers[type](state, action);
  }
  return state;
};
