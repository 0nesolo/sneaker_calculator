// npm
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import invariant from 'redux-immutable-state-invariant';
import { routerMiddleware, push } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router';

// imports
import reducer from '../reducers';

/**
 * Middleware
 * @type {Object}
 */
const middleware = routerMiddleware( hashHistory );

/**
 * configure store
 * @param  {Object} initialState
 */
function configureStore( initialState ) {

  /**
   * Create final store
   * @type {Object}
   */
  const finalCreateStore = compose(
    applyMiddleware(invariant(), thunk),
    applyMiddleware(middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  /**
   * Store
   * @type {Object}
   */
  const store = finalCreateStore(reducer, initialState);

  // if module is hot
  if ( module.hot ) {

    // accept hot module
    module.hot.accept('../reducers', () => {

      /**
       * Next reducer
       * @type {Object}
       */
      const nextReducer = require('../reducers');

      // replace reducers
      store.replaceReducer(nextReducer);

    });

  }

  // return store
  return store;

}

/**
 * store
 * @type {Object}
 */
const store = configureStore();

// export store
export default store;