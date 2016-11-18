// npm
import { combineReducers } from 'redux';
import Cf from 'currency-formatter';

// imports
import Cx from '../constants/forms';

/**
 * Lang
 * @param  {Object} state
 * @param  {Object} payload
 */
export default ( state = { lang: 'en' }, payload ) => {

  // watch payload type
  switch ( payload.type ) {

    case Cx.LANG_UPDATED:
      return Object.assign({}, state, payload);

    default:
      return state;

  }

}