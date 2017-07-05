import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import table from './table';
import hand from './hand';

const rootReducer = combineReducers({
  table,
  hand,
  routing
});

export default rootReducer;
