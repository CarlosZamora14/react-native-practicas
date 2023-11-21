import { API_KEY as apiKey } from '@env';

const BASE_URL = 'http://ws.audioscrobbler.com/2.0/';

function getMusicData() {
  const url = `${BASE_URL}?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
      return {
        id: artist.mbid,
        name: artist.name,
        image: artist.image[0]['#text']
      };
    }));
}

function getArtistData(artistId) {
  const url = `${BASE_URL}?method=artist.getinfo&mbid=${artistId}&api_key=${apiKey}&format=json`;
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(async data => {
      const image = await getArtistImage(data.artist.name);

      return {
        mbid: data.artist.mbid,
        name: data.artist.name,
        listeners: data.artist.stats.listeners,
        streamable: data.artist.streamable,
        image,
      }
    });
}

function getArtistImage(artistName) {
  const url = 'https://api.deezer.com/search?q=';

  return fetch(url + encodeURIComponent(artistName))
    .then(response => response.json())
    .then(data => data.data[0].artist['picture_medium']);
}
export { getMusicData, getArtistData, getArtistImage };

