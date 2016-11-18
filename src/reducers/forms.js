// npm
import Cf from 'currency-formatter';
import { combineReducers } from 'redux';

// imports
import Cx from '../constants/forms';

/**
 * Form reducer
 * @param  {Object} state
 * @param  {Object} payload
 */
export default ( state = {}, payload ) => {

  // watch payload type
  switch ( payload.type ) {
    
    case Cx.INPUT_UPDATED:
      return Object.assign({}, state, payload);

    case Cx.RESULTS_UPDATED:
      return Object.assign({}, state, {
        sneakersCostHide: false,
        sneakersCostValue: Cf.format( payload.sneakersCost, { code: 'USD' } ),

        sneakersCostForFreeHide: false,
        sneakersCostForFreeValue: Cf.format( payload.sneakersCostForFree, { code: 'USD' } ),

        sneakersCostForResaleHide: false,
        sneakersCostForResaleValue: Cf.format( payload.sneakersCostForResale, { code: 'USD' } ),

        sneakersQuantityHide: false,
        sneakersQuantityValue: payload.sneakersQuantity,

        sneakersResaleAverageHide: false,
        sneakersResaleAverageValue: Cf.format( payload.sneakersResaleAverage, { code: 'USD' } ),

        totalCostHide: false,
        totalCostValue: Cf.format( payload.totalCost, { code: 'USD' } )
      });

    case Cx.CLEAR_RESULTS:
      return Object.assign({}, state, {
        sneakersCostHide: true,
        sneakersCostValue: '',

        sneakersCostForFreeHide: true,
        sneakersCostForFreeValue: '',

        sneakersQuantityHide: true,
        sneakersQuantityValue: '',

        sneakersResaleAverageHide: true,
        sneakersResaleAverageValue: '',

        totalCostHide: true,
        totalCostValue: ''
      });

    default:
      return state;

  }

}