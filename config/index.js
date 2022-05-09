module.exports = {
  development: {
    api: 'https://jsonplaceholder.typicode.com',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '21f2266b3dd541bca58f37ec6f548005',
    redirectUri:
      'https://sanishkr-song-visualiser-jrpgjrj735vw6-3000.githubpreview.dev/',
    scopes: [
      'user-top-read',
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
  },
  stage: {
    api: 'https://api.stage.com',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '21f2266b3dd541bca58f37ec6f548005',
    redirectUri: 'https://spotify.sanish.me/',
    scopes: [
      'user-top-read',
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
  },
  production: {
    api: 'https://jsonplaceholder.typicode.com',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '21f2266b3dd541bca58f37ec6f548005',
    redirectUri: 'https://spotify.sanish.me/',
    scopes: [
      'user-top-read',
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
  },
}[process.env.NODE_ENV];
