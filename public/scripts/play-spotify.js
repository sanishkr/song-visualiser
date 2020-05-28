
  window.onSpotifyWebPlaybackSDKReady = () => {
    const token =
      'BQDRUXz5vZQfXX-Y-ZvU6JpYQOx7yq2avQ_9xfOfK2mP4gUzeL5u1kEqe167ThbXcM3gOzJodWvbxzMjVHmqYTzlDmoz-CQR2EKyMk6WpNLAZyTwuaQna9Fg5VrTvnwB1n9XPYWW2ghUS05vPloKEZ8NwZl4AErt_6U1U9P27SpVTpo3LnE';
    const player = new Spotify.Player({
      name: 'Song Visualiser',
      getOAuthToken: cb => {
        cb(token);
      },
    });
    player.id="audio-element";
    // Error handling
    player.addListener('initialization_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('authentication_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('account_error', ({ message }) => {
      console.error(message);
    });
    player.addListener('playback_error', ({ message }) => {
      console.error(message);
    });

    // Playback status updates
    player.addListener('player_state_changed', state => {
      console.log(state);
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  }
