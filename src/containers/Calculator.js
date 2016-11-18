// npm
import React from 'react';
import URL from 'url-parse';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

// imorts
// import Sidebar from '../components/Sidebar';
import stores from '../stores/configureStore';
import * as langActions from '../actions/lang';
import * as formActions from '../actions/forms';
import FormSneakerName from '../components/forms/SneakerName';
import FormSneakerCost from '../components/forms/SneakerCost';
import AssociatesHours from '../components/forms/AssociatesHours';
import AssociatesQuantity from '../components/forms/AssociatesQuantity';
import AssociatesPayPerHour from '../components/forms/AssociatesPayPerHour';
import FormSneakerQuantityForFree from '../components/forms/SneakerQuantityForFree';
import FormSneakerQuantityForResale from '../components/forms/SneakerQuantityForResale';

/**
 * Class Calculator
 */
class Calculator extends React.Component {

  /**
   * constructor
   * @param props
   */
  constructor ( props ) {

    // extend
    super( props );

    // send page view
    ReactGA.pageview('/calculator');

  }

  /**
   * render
   */
  render () {
    return (
      <section className="solo_calculator">
        {this.props.children}
      </section>
    );
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
export default connect( mapStateToProps, mapDispatchToProps )(Calculator);