/**
 * Configures the store for DEV environment with log capabilities
 * and using redux-immutable-state-invariant making sure the state is not mutate.
 **/

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';
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
      applyMiddleware(thunk, reduxImmutableStateInvariant(), createLogger())
    )
  );
}
