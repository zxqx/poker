import { createAction } from 'redux-actions';

export const increment = createAction('INCREMENT_COUNTER');
export const decrement = createAction('DECREMENT_COUNTER');

export function incrementAsync(delay = 1000) {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}
