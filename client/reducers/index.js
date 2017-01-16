import { combineReducers } from 'redux';
import { responsiveStateReducer } from 'redux-responsive';
import app from './appReducer';
import artworks from './artworkReducer';

const rootReducer = combineReducers({
  app,
  artworks,
  // reducer responsible for Application responsiveness
  browser: responsiveStateReducer
});

export default rootReducer;
