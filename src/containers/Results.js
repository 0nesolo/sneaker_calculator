// npm
import React from 'react';
import URL from 'url-parse';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

// imports
import * as langActions from '../actions/lang';
import * as formActions from '../actions/forms';

class Results extends React.Component {

  /**
   * constructor
   * @param {Object} props
   */
  constructor ( props ) {

    // extend
    super( props );

  }

  /**
   * render
   */
  render () {
    return (
      <section className="solo_results">
        <p> results here </p>
      </section>
    )
  }

}

/**
 * Map states to props
 * @param {Object} state
 */
var mapStateToProps = function ( state ) {
  return state;
};

/**
 * Map dispatch to props
 * @param {Object} dispatch
 */
var mapDispatchToProps = function ( dispatch ) {
  return bindActionCreators( Object.assign( {}, formActions, langActions ), dispatch );
};

// export app
export default connect( mapStateToProps, mapDispatchToProps )(Results);