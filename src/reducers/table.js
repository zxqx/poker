import { handleActions } from 'redux-actions';
import pickBy from 'lodash.pickby';
import {
  createTable,
  modifyTable,
  addPlayer,
  modifyPlayerStackSize,
  removePlayer,
  sitOutPlayer,
  sitInPlayer,
  modifyPlayerSessionTotal
} from '../actions/table';

const initialState = {
  players: {}
};

export default handleActions({
  [createTable]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [modifyTable]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [addPlayer]: (state, action) => ({
    ...state,
    players: {
      ...state.players,
      [action.payload.name]: {
        sitting: true,
        ...action.payload
      }
    }
  }),
  [modifyPlayerStackSize]: (state, action) => ({
    ...state,
    players: {
      ...state.players,
      [action.payload.name]: {
        ...state.players[action.payload.name],
        stackSize: state.players[action.payload.name].stackSize
        + action.payload.amount
      }
    }
  }),
  [removePlayer]: (state, action) => ({
    ...state,
    players: pickBy(state.players, player => player.name !== action.payload)
  }),
  [sitOutPlayer]: (state, action) => ({
    ...state,
    players: {
      ...state.players,
      [action.payload]: {
        ...state.players[action.payload],
        sitting: false
      }
    }
  }),
  [sitInPlayer]: (state, action) => ({
    ...state,
    players: {
      ...state.players,
      [action.payload]: {
        ...state.players[action.payload],
        sitting: true
      }
    }
  }),
  [modifyPlayerSessionTotal]: (state, action) => ({
    ...state,
    players: {
      ...state.players,
      [action.payload.name]: {
        ...state.players[action.payload.name],
        sessionTotal: state.players[action.payload.name].sessionTotal
        + action.payload.amount
      }
    }
  })
}, initialState);
