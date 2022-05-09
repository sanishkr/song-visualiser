module.exports = {
  development: {
    api: 'https://jsonplaceholder.typicode.com',
    authEndpoint: 'https://accounts.spotify.com/authorize',
    clientId: '86a27b63343f4a07ab9c5bbaee9ecd80',
    accessToken:
      'BQAb3ufl3NFQppi9rz2kyV3HfBgLBqB3gYUN3wY9uOcDcJGxW78GX6b5LLUkIrkWNROisYch8C-yzgbRuDFE9p-Ec3CM2gpw7OxdvAjvG00hZOwzIvV5r68ngAKeAnnW-NiiSypxDd1g33zi-6CTymkZnPzPyJPI5UH8r5_-7KuiBpma8sxVT9M',
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
    accessToken:
      'BQAb3ufl3NFQppi9rz2kyV3HfBgLBqB3gYUN3wY9uOcDcJGxW78GX6b5LLUkIrkWNROisYch8C-yzgbRuDFE9p-Ec3CM2gpw7OxdvAjvG00hZOwzIvV5r68ngAKeAnnW-NiiSypxDd1g33zi-6CTymkZnPzPyJPI5UH8r5_-7KuiBpma8sxVT9M',
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
    clientId: '86a27b63343f4a07ab9c5bbaee9ecd80',
    accessToken:
      'BQAb3ufl3NFQppi9rz2kyV3HfBgLBqB3gYUN3wY9uOcDcJGxW78GX6b5LLUkIrkWNROisYch8C-yzgbRuDFE9p-Ec3CM2gpw7OxdvAjvG00hZOwzIvV5r68ngAKeAnnW-NiiSypxDd1g33zi-6CTymkZnPzPyJPI5UH8r5_-7KuiBpma8sxVT9M',
    redirectUri: 'https://spotify.sanish.me/',
    scopes: [
      'user-top-read',
      'user-read-currently-playing',
      'user-read-playback-state',
    ],
  },
}[process.env.NODE_ENV];
