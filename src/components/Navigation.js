// npm
import React from 'react';
import URL from 'url-parse';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routerMiddleware, push } from 'react-router-redux';

// imports
import store from '../stores/configureStore';
import openletter from '../../content/letter.json';

class Navigation extends React.Component {

  /**
   * constructor
   * @param {Object} props
   */
  constructor ( props ) {

    // extend
    super( props );

  }


  updateRoute ( label ) {
    ReactGA.event({
      category: 'Route',
      action: 'route_changed',
      label
    });
  }

  /**
   * render
   */
  render () {

    const language = this.props.params.lang || 'en';

    return (
      <nav className="solo_navigation">
        <p>
          <a onClick={this.updateRoute.bind(this, `/calculator`)} href={`/#/calculator`}>Sneaker calculator</a> | <a onClick={this.updateRoute.bind(this, `/openletter/${language}`)} href={`/#/openletter/${language}`}>Open letter</a> | <a onClick={this.updateRoute.bind(this, `/mbc`)} href={`/#/mbc`}>MBC</a>
        </p>
      </nav>
    )
  }

}

// export naigation
export default Navigation;