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
    .then(artists => artists.map(artist => ({
      id: artist.mbid,
      name: artist.name,
      image: artist.image[0]['#text']
    })));
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
    .then(data => ({
      mbid: data.artist.mbid,
      name: data.artist.name,
      listeners: data.artist.stats.listeners,
      playcount: data.artist.stats.playcount,
      streamable: data.artist.streamable,
      tags: data.artist.tags.tag,
    }));
}

function getArtistImage(artistName, pictureSize = 'picture_medium') {
  const url = 'https://api.deezer.com/search?q=';

  return fetch(url + encodeURIComponent(artistName))
    .then(response => response.json())
    .then(data => data.data[0].artist[pictureSize]);
}

export { getMusicData, getArtistData, getArtistImage };

