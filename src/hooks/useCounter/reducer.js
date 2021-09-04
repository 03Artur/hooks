import { ACTION_TYPES } from './actions';

export const defaultState = {
  value: 0,
  step: 1,
};

export const reducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case ACTION_TYPES.INCREMENT: {
      return {
        ...state,
        value: state.value + state.step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      return {
        ...state,
        value: state.value - state.step,
      };
    }
    case ACTION_TYPES.SET_STEP: {
      const { payload: { step } } = action;
      return {
        ...state,
        step,
      };
    }
    case ACTION_TYPES.RESET: {
      const { payload: { initialState } } = action;
      return initialState;
    }
    default:
      return state;
  }
};
