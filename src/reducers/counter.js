import { handleActions } from 'redux-actions';
import { increment, decrement } from '../actions/counter';

const initialState = 0;

export default handleActions({
  [increment]: state => state + 1,
  [decrement]: state => state - 1
}, initialState);
