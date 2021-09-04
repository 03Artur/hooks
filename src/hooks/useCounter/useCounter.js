import { useCallback, useReducer } from 'react';
import { defaultState, reducer } from './reducer';
import {
  resetAction,
  setStepAction,
  incrementAction,
  decrementAction,
} from './actions';

export const useCounter = (initialState = defaultState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const increment = useCallback(() => dispatch(incrementAction()), [dispatch]);
  const decrement = useCallback(() => dispatch(decrementAction()), [dispatch]);
  const setStep = useCallback((value) => dispatch(setStepAction(value)), [dispatch]);
  const reset = useCallback(() => dispatch(resetAction(initialState)), [dispatch, initialState]);

  return [state, { increment, decrement, setStep, reset }];
};
