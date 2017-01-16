import expect from 'expect';
import * as types from '../actions/actionTypes';
import artworkReducer from './artworkReducer';
import initialState from './initialState';
import { artworks, normalizedArtworks } from '../stubs';

describe('Artwork Reducer', () => {
  it('should return the initial state', () => {
    expect(artworkReducer(undefined, {})).toEqual(initialState.artworks);
  });

  it('should handle LOAD_ARTWORKS_SUCCESS', () => {
    const action = {
      type: types.LOAD_ARTWORKS_SUCCESS,
      artworks
    };

    expect(artworkReducer({}, action)).toEqual(normalizedArtworks);
  });
});
