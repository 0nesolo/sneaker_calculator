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
import stores from '../stores/configureStore';
import * as langActions from '../actions/lang';
import letter from '../../content/letter.json';
import * as formActions from '../actions/forms';

/**
 * Class Open Letter
 */
class OpenLetter extends React.Component {

  /**
   * constructor
   * @param props
   */
  constructor ( props ) {

    // extend
    super( props );

    // send page view
    ReactGA.pageview(`/openletter/${this.props.params.lang}`);

  }

  /**
   * Update event
   */
  updateEvent () {

    // collect correct language script
    const scripts = letter[this.props.params.lang.toUpperCase()];

    // send event
    ReactGA.event({
      category: 'Route',
      action: 'route_changed',
      label: `/openletter/${scripts.url}/`
    });

  }

  /**
   * Create languages
   */
  languages () {
    return Object.keys( letter ).map( ( lang, index ) => {
      return (
        <li key={index}>
          <a onClick={this.updateEvent.bind(this)} href={`/#/openletter/${letter[lang.toUpperCase()].url}`}>{lang}</a>
        </li>
      )
    });
  }

  /**
   * render
   */
  render () {

    // collect correct language script
    const scripts = letter[this.props.params.lang.toUpperCase()];

    return (
      <article className="solo_openletter">
        <ul>
          {this.languages.bind(this)()}
        </ul>
        {scripts.content.map( ( script, index ) => {
          return (
            <p key={index}>{script}</p>
          );
        })}
      </article>
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
export default connect( mapStateToProps, mapDispatchToProps )(OpenLetter);