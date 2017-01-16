import sortBy from 'lodash/sortBy';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Reducer responsible for managing Artwork state.
 * contains methods for data normalization
 */

const groupByArray = ['languageCode', 'movieId'];

/**
 * Method responsible for data normalization and sorting.
 * normalizes the data per group
 * @param [{artworks}], groupBy
 * @return {normalizedArtworks}, contaning group keys, with array of artworks.
 **/
function artworkNormalization(artworks, groupBy) {
  return sortBy(artworks, [groupBy]).reduce((groupedArtworks, artwork) => {
    const aggregator = groupedArtworks;
    if (!groupedArtworks[artwork[groupBy]]) {
      aggregator[artwork[groupBy]] = [];
    }
    groupedArtworks[artwork[groupBy]].push(artwork);

    return aggregator;
  }, {});
}

export default function artworkReducer(state = initialState.artworks, action) {
  const groupedArtworks = { ...state };
  switch (action.type) {
    case types.LOAD_ARTWORKS_SUCCESS:
      groupByArray.forEach((group) => {
        groupedArtworks[group] = artworkNormalization(action.artworks, group);
      });

      return groupedArtworks;

    default:
      return state;
  }
}
