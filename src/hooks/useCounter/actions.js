export const ACTION_TYPES = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  SET_STEP: 'SET_STEP',
  RESET: 'RESET',
};

export const incrementAction = () => ({
  type: ACTION_TYPES.INCREMENT,
});

export const decrementAction = () => ({
  type: ACTION_TYPES.DECREMENT,
});

export const setStepAction = (value) => ({
  type: ACTION_TYPES.SET_STEP,
  payload: {
    step: value,
  },
});

export const resetAction = (initialState) => ({
  type: ACTION_TYPES.RESET,
  payload: {
    initialState,
  }
});
