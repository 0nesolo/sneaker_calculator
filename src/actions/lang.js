import request from 'superagent';
import Cx from '../constants/lang';

/**
 * update language
 * @param {Object} payload
 */
const updateLang = ( payload ) => {
  return {
    ...payload,
    type: Cx.LANG_UPDATED
  }
};

/**
 * push language
 * @param {Object} payload
 */
export function pushLanguage ( payload ) {

  return ( dispatch, getState ) => {
    dispatch( updateLang( payload ) );
  }

}