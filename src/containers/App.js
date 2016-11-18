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
import forms from '../../content/form.json';
import stores from '../stores/configureStore';
import * as langActions from '../actions/lang';
import * as formActions from '../actions/forms';
import Navigation from '../components/Navigation';

/**
 * Class App
 */
class App extends React.Component {

  /**
   * constructor
   * @param {Object} props
   */
  constructor ( props ) {

    // extend
    super( props );

    // update form
    this.props.update( forms );

  }

  /**
   * render
   */
  render () {
    return (
      <section className="solo_container">
        <Navigation {...this.props} />
        {this.props.children}
        <section className="solo_social">
          <p>
            <a 
              className="twitter-follow-button"
              href="https://twitter.com/0nesolo"
              data-show-count="true">
                Follow @0nesolo
            </a>
          </p>
          <div className="fb-like" 
            data-href="http://broodcapital/#/calculator" 
            data-layout="standard" 
            data-action="like" 
            data-show-faces="true">
          </div>
        </section>
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
export default connect( mapStateToProps, mapDispatchToProps )(App);