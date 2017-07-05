import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import table from './table';

const rootReducer = combineReducers({
  table,
  routing
});

export default rootReducer;
