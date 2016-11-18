// npm
import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

// imports
import lang from './lang';
import forms from './forms';

/**
 * rootReducer
 * @type {Object}
 */
const rootReducer = combineReducers({
  lang,
  forms,
  routing: routerReducer
});

// export rootReducer
export default rootReducer;