import * as types from './actionTypes';
import artworkService from '../api/ArtworkService';

/**
* Utility function to check response status.
* @param {response}
* @return {response} in case of success.
**/
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  throw new Error(response.statusText);
}

/**
* Utility function to parse JSON response.
* @param {response}
* @return {JSON object}.
**/
function parseJSON(response) {
  return response.json();
}

/**
 * @param {artworks}
 * @return redux action responsible for updating artwork state.
 **/
export function loadArtworksSuccess(artworks) {
  return { type: types.LOAD_ARTWORKS_SUCCESS, artworks };
}

/**
 * Async action to fetch artworks from the API layer.
 * Dispatches LOAD_ARTWORKS_SUCCESS when the artworks are received
 * redux action responsible for updating artwork state.
 **/
export function loadArtworks() {
  return dispatch =>
    artworkService.getAllArtworks()
    .then(checkStatus)
    .then(parseJSON)
    .then((artworks) => {
      dispatch(loadArtworksSuccess(artworks));
    })
    .catch((error) => {
      throw (error);
    });
}
