import RestApi from './RestApi';

/**
* Artwork service Layer for API communication
**/
const artworkApi = new RestApi('/movies');
export default class ArtworkService {
  static getAllArtworks() {
    return artworkApi.get();
  }
}
