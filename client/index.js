import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';
import { loadArtworks } from './actions/artworkActions';

// react-tap-event-plugin has an issue with clickable elements
// suggested fix:
// https://github.com/callemall/material-ui/issues/1011#issuecomment-187556854
const injectTouchTapEvent = require('react-tap-event-plugin');

injectTouchTapEvent();

// Configure Redux Store with initial Artworks and App states
const store = configureStore(initialState);

// Fetch Artworks from the API dispatching loadArtworks action.
store.dispatch(loadArtworks());

// Add the App with its specific routes to the DOM.
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
