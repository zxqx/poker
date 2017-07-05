import { handleActions } from 'redux-actions';
import {
  createHand
} from '../actions/hand';

const initialState = {
  actions: [],
  availableActions: []
};

export default handleActions({
  [createHand]: () => initialState
}, initialState);
