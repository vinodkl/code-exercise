/**
 * Configures the store for PROD environment with just the needed libs
 * no logs in this case.
 **/

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';

import rootReducer from '../reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      responsiveStoreEnhancer,
      applyMiddleware(thunk)
    )
  );
}
