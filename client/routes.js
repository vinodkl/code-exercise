/**
 * Application routes
 * "/" routes to Artwork List.
 * "artwork/:languageCode/:movieId" routes to Artwork Detail page.
 **/

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ArtworksPage from './components/artwork/ArtworksPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ArtworksPage}/>
    <Route path="artwork/:languageCode/:movieId" component={ArtworksPage}/>
  </Route>
);
