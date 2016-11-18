// npm
import React from 'react';
import URL from 'url-parse';
import ReactGA from 'react-ga';
import ReactDom from 'react-dom';
import Immutable from 'immutable';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// imports
import Mbc from './containers/Mbc';
import App from './containers/App';
import Form from './containers/Forms';
import Results from './containers/Results';
import store from './stores/configureStore';
import Calculator from './containers/Calculator';
import OpenLetter from './containers/OpenLetter';

/**
 * Create hash history
 * @type {Object}
 */
const history = syncHistoryWithStore( hashHistory, store );

// intialize google analytics
ReactGA.initialize('UA-87358178-1');

/**
 * Log page view
 */
const logPageView = () => {
  ReactGA.set( { page: window.location.pathname } );
  ReactGA.pageview( window.location.pathname );
};

// render site
ReactDom.render((
  <Provider store={store}>
    <Router history={history} queryKey={false} onUpdate={logPageView}>
      <Route path="/" component={App}>
        <Route path="/calculator" name="calculator" component={Calculator}>
          <IndexRoute component={Form} />
          <Route path="results" name="results" component={Results} />
        </Route>
        <Route path="/openletter/:lang" name="openletter" component={OpenLetter} />
        <Route path="/mbc" name="mbc" component={Mbc} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('HOV'));