import { API_KEY as apiKey } from '@env';

const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${apiKey}&format=json`;

function getMusicData() {
  return fetch(URL, {
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

function getArtistImage(artistName) {
  const url = 'https://api.deezer.com/search?q=';

  return fetch(url + encodeURIComponent(artistName))
    .then(response => response.json())
    .then(data => data.data[0].artist['picture_medium']);
}
export { getMusicData, getArtistImage }

