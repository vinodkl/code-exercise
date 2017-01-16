/**
 * Utility to stub test data.
 **/

export const artwork = {
  movieId: 70242311,
  movieName: 'Orange Is the New Black',
  imageType: 'sdp',
  thumbnailUrl: 'http://art.nflximg.net/673e9/b39fcc29b2ac668ee01343de9f21f611c8f673e9.jpg',
  fullSizeImageUrl: 'http://art.nflximg.net/78bc7/198343ed941f178d54878aa366a122e4e2e78bc7.jpg',
  languageCode: 'it'
};

export const artworks = [{
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
}, {
  movieId: 70178217,
  movieName: 'House of Cards',
  imageType: 'sdp',
  thumbnailUrl: 'http://art.nflximg.net/920d5/aa6acd66076eb1127521a3fff5dceddbbf7920d5.jpg',
  fullSizeImageUrl: 'http://art.nflximg.net/1ba7e/756e795d7469900eae82794a38f1942e6521ba7e.jpg',
  languageCode: 'tr'
}, {
  movieId: 70178217,
  movieName: 'House of Cards',
  imageType: 'sdp',
  thumbnailUrl: 'http://art.nflximg.net/9f266/6216fd01988706ee545cf990e55a483620c9f266.jpg',
  fullSizeImageUrl: 'http://art.nflximg.net/3ac1d/624005be3a3002650feb87c46391bab6a233ac1d.jpg',
  languageCode: 'ja'
}];


export const normalizedArtworks = {
  languageCode: {
    de: [{
      fullSizeImageUrl: 'http://art.nflximg.net/934f7/e76e738da86e04d9c388605789211d6a883934f7.jpg',
      imageType: 'sdp',
      languageCode: 'de',
      movieId: 70242311,
      movieName: 'Orange Is the New Black',
      thumbnailUrl: 'http://art.nflximg.net/304d2/7da9da4ea90c6df7889b67137cb64737e65304d2.jpg'
    }],
    it: [{
      fullSizeImageUrl: 'http://art.nflximg.net/78bc7/198343ed941f178d54878aa366a122e4e2e78bc7.jpg',
      imageType: 'sdp',
      languageCode: 'it',
      movieId: 70242311,
      movieName: 'Orange Is the New Black',
      thumbnailUrl: 'http://art.nflximg.net/673e9/b39fcc29b2ac668ee01343de9f21f611c8f673e9.jpg'
    }],
    ja: [{
      fullSizeImageUrl: 'http://art.nflximg.net/3ac1d/624005be3a3002650feb87c46391bab6a233ac1d.jpg',
      imageType: 'sdp',
      languageCode: 'ja',
      movieId: 70178217,
      movieName: 'House of Cards',
      thumbnailUrl: 'http://art.nflximg.net/9f266/6216fd01988706ee545cf990e55a483620c9f266.jpg'
    }],
    tr: [{
      fullSizeImageUrl: 'http://art.nflximg.net/1ba7e/756e795d7469900eae82794a38f1942e6521ba7e.jpg',
      imageType: 'sdp',
      languageCode: 'tr',
      movieId: 70178217,
      movieName: 'House of Cards',
      thumbnailUrl: 'http://art.nflximg.net/920d5/aa6acd66076eb1127521a3fff5dceddbbf7920d5.jpg'
    }]
  },
  movieId: {
    70178217: [{
      fullSizeImageUrl: 'http://art.nflximg.net/1ba7e/756e795d7469900eae82794a38f1942e6521ba7e.jpg',
      imageType: 'sdp',
      languageCode: 'tr',
      movieId: 70178217,
      movieName: 'House of Cards',
      thumbnailUrl: 'http://art.nflximg.net/920d5/aa6acd66076eb1127521a3fff5dceddbbf7920d5.jpg'
    }, {
      fullSizeImageUrl: 'http://art.nflximg.net/3ac1d/624005be3a3002650feb87c46391bab6a233ac1d.jpg',
      imageType: 'sdp',
      languageCode: 'ja',
      movieId: 70178217,
      movieName: 'House of Cards',
      thumbnailUrl: 'http://art.nflximg.net/9f266/6216fd01988706ee545cf990e55a483620c9f266.jpg'
    }],
    70242311: [{
      fullSizeImageUrl: 'http://art.nflximg.net/78bc7/198343ed941f178d54878aa366a122e4e2e78bc7.jpg',
      imageType: 'sdp',
      languageCode: 'it',
      movieId: 70242311,
      movieName: 'Orange Is the New Black',
      thumbnailUrl: 'http://art.nflximg.net/673e9/b39fcc29b2ac668ee01343de9f21f611c8f673e9.jpg'
    }, {
      fullSizeImageUrl: 'http://art.nflximg.net/934f7/e76e738da86e04d9c388605789211d6a883934f7.jpg',
      imageType: 'sdp',
      languageCode: 'de',
      movieId: 70242311,
      movieName: 'Orange Is the New Black',
      thumbnailUrl: 'http://art.nflximg.net/304d2/7da9da4ea90c6df7889b67137cb64737e65304d2.jpg'
    }]
  }
};
