import expect from 'expect';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import * as types from './actionTypes';
import * as artworkActions from './artworkActions';

// Test a sync action
describe('Artwork Actions', () => {
  const artworks = [{
    movieId: 70242311,
    movieName: 'Orange Is the New Black',
    imageType: 'sdp',
    thumbnailUrl: 'http://art.nflximg.net/673e9/b39fcc29b2ac668ee01343de9f21f611c8f673e9.jpg',
    fullSizeImageUrl: 'http://art.nflximg.net/78bc7/198343ed941f178d54878aa366a122e4e2e78bc7.jpg',
    languageCode: 'it'
  }, {
    movieId: 70242311,
    movieName: 'Orange Is the New Black',
    imageType: 'sdp',
    thumbnailUrl: 'http://art.nflximg.net/304d2/7da9da4ea90c6df7889b67137cb64737e65304d2.jpg',
    fullSizeImageUrl: 'http://art.nflximg.net/934f7/e76e738da86e04d9c388605789211d6a883934f7.jpg',
    languageCode: 'de'
  }];

  describe('loadArtworksSuccess', () => {
    it('should create a LOAD_ARTWORKS_SUCCESS action', () => {
      const expectedAction = {
        type: types.LOAD_ARTWORKS_SUCCESS,
        artworks
      };

      const action = artworkActions.loadArtworksSuccess(artworks);

      expect(action).toEqual(expectedAction);
    });
  });

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);

  describe('loadArtworks', () => {
    beforeEach(() => {
      nock.disableNetConnect();
      nock.enableNetConnect('127.0.0.1');
    });

    afterEach(() => {
      nock.cleanAll();
      nock.enableNetConnect();
    });

    it('should create LOAD_ARTWORKS_SUCCESS when dispatching loadArtworks', (done) => {
      nock('http://localhost/api')
       .get('/movies')
       .reply(200, { body: { artworks } });

      const expectedActions = [
        { type: types.LOAD_ARTWORKS_SUCCESS, body: { artworks } }
      ];

      // Testing if success action was called
      const store = mockStore({ artworks: [] }, expectedActions);
      return store.dispatch(artworkActions.loadArtworks()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.LOAD_ARTWORKS_SUCCESS);
        done();
      });
    });
  });
});
