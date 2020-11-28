import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import { Router, withRouter } from 'next/router';
import { authEndpoint, clientId, redirectUri, scopes } from './config';
import Player from './Player';
// import logo from "./logo.svg";
import './App.css';
import { route } from 'next/dist/next-server/server/router';

// const hash = dynamic(() => import('./hash'))

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: '' }],
        },
        name: '',
        artists: [{ name: '' }],
        duration_ms: 0,
      },
      currently_playing_type: '',
      is_playing: 'Paused',
      progress_ms: 0,
      no_data: false,
      repeat_state: '',
      shuffle_state: false,
      device: {},
    };

    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    const { router } = this.props;
    const hash = router.asPath.includes('#')
      ? this.tokenize(router.asPath.split('#')[1])
      : {};
    // Set token
    let _token = hash.access_token;

    if (_token) {
      // Set token
      this.setState({
        token: _token,
      });
      this.getCurrentlyPlaying(_token);
      // this.getLyrics()
    }

    // set interval for polling every 5 seconds
    this.interval = setInterval(() => this.tick(), 5000);
  }

  tokenize(path) {
    return path.split('&').reduce(function(initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
  }

  componentWillUnmount() {
    // clear the interval to save resources
    clearInterval(this.interval);
  }

  tick() {
    if (this.state.token) {
      this.getCurrentlyPlaying(this.state.token);
    }
  }

  getCurrentlyPlaying(token) {
    // Make a call using the token
    fetch('https://api.spotify.com/v1/me/player', {
      method: 'get',
      headers: new Headers({
        Authorization: 'Bearer ' + token,
      }),
    })
      .then(res => res.json())
      .then(data => {
        // Checks if the data is not empty
        if (!data) {
          this.setState({
            no_data: true,
          });
        } else if (data?.error?.status === 401) {
          const { router } = this.props;
          this.setState({
            token: null,
          });
          router.push(router.route);
        } else {
          this.setState({
            item: data.item,
            is_playing: data.is_playing,
            progress_ms: data.progress_ms,
            repeat_state: data.repeat_state,
            shuffle_state: data.shuffle_state,
            currently_playing_type: data.currently_playing_type,
            device: data.device,
            no_data: false,
          });
        }
      })
      .catch(e => {
        console.error(e);
        this.setState({
          no_data: true,
        });
      });
  }

  getLyrics() {
    const { artists, name } = this.state.item.album;
    console.log({ name }, artists[0]['name']);
    fetch(
      `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=${name}t&q_artist=${artists[0]['name']}&apikey=d6f65cfc34495d4df7b232e3c5315f46`,
    )
      .then(res => res.json())
      .then(data => console.log(data.message.body?.lyrics?.lyrics_body ?? ''));
  }

  render() {
    // console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                '%20',
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          )}
          {this.state.token && !this.state.no_data ? (
            <Player
              item={this.state.item}
              is_playing={this.state.is_playing}
              progress_ms={this.state.progress_ms}
              repeat_state={this.state.repeat_state}
              shuffle_state={this.state.shuffle_state}
              device={this.state.device}
              currently_playing_type={this.state.currently_playing_type}
            />
          ) : null}
          {this.state.no_data && (
            <p>Connect to Spotify on some device and play some track.</p>
          )}
        </header>
      </div>
    );
  }
}

export default withRouter(App);
