import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import table from './table';

const rootReducer = combineReducers({
  counter,
  table,
  routing
});

export default rootReducer;
