import { createAction } from 'redux-actions';

export const createTable = createAction('CREATE_TABLE');
export const addPlayer = createAction('ADD_PLAYER');
export const modifyPlayerStackSize = createAction('MODIFY_PLAYER_STACK_SIZE');
export const removePlayer = createAction('REMOVE_PLAYER');
export const sitOutPlayer = createAction('SIT_OUT_PLAYER');
export const sitInPlayer = createAction('SIT_IN_PLAYER');
