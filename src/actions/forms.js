// npm
import React from 'react';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

import Cx from '../constants/forms';

import calculator from '../../lib/browser';

/**
 * inputs updated
 * @param {Object} payload
 */
const inputUpdated = ( payload ) => {
  return {
    ...payload,
    type: Cx.INPUT_UPDATED
  }
};

/**
 * results updated
 * @param {Object} payload
 */
const resultsUpdated = ( payload ) => {
  return {
    ...payload,
    type: Cx.RESULTS_UPDATED
  }
};

/**
 * clear results
 * @param {Object} payload
 */
const clearResults = ( payload ) => {
  return {
    ...payload,
    type: Cx.CLEAR_RESULTS
  };
};

// export update
export function update ( payload ) {

  return ( dispatch, getState ) => {

    // dispatch input updated
    dispatch( inputUpdated( payload ) );

    // set state
    const state = getState();

    // parse sneaker cost
    const sneakerCost = parseInt( state.forms.sneakerCostValue.replace('$', '') );

    // if sneaker quantity resale value is populated
    if ( state.forms.sneakerQuantityForResaleValue ) {

      /**
       * update user inputs
       * @type {Object}
       */
      const userInputs = {
        sneakerCost,
        sneakerName: state.forms.sneakerNameValue,

        sneakersQuantityForFree: state.forms.sneakerQuantityForFreeValue,
        sneakersQuantityForResale: state.forms.sneakerQuantityForResaleValue,

        associates: {
          associatesQuantity: state.forms.associatesQuantityValue || 0,
          associatesPayPerHour: state.forms.associatesPayPerHourValue || 0,
          associatesHours: state.forms.associatesHoursValue || 0
        }

      };

      calculator( userInputs, ( errors, response ) => {

        dispatch( resultsUpdated( response ) );

        ReactGA.event({
          category: 'Results',
          action: 'submitted',
          label: userInputs.sneakerName
        });

      });

    } else {

      dispatch( clearResults() );

    }

  }

}