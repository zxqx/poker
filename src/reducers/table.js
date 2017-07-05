import { handleActions } from 'redux-actions';
import { createTable, addPlayer } from '../actions/table';

const initialState = {
  players: []
};

export default handleActions({
  [createTable]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [addPlayer]: (state, action) => ({
    ...state,
    players: [
      ...state.players,
      action.payload
    ]
  })
}, initialState);
