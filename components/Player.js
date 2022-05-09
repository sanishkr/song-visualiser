import React from 'react';
import '../pages/Player.css';

const Player = props => {
  const backgroundStyles = {
    backgroundImage: `url(${
      props.currently_playing_type === 'ad'
        ? '/images/spotify-ad.jpeg'
        : props.item.album.images[0].url
    })`,
  };

  const getDisplayTime = durationInMS => {
    const min = Math.floor(durationInMS / (1000 * 60));
    const sec = Math.floor(durationInMS / 1000) % 60;
    return pad(min) + ':' + pad(sec);
  };

  function pad(n) {
    return n < 10 ? '0' + n : n;
  }

  const progressBarStyles = {
    width:
      props.currently_playing_type === 'ad'
        ? 0
        : (props.progress_ms * 100) / props.item.duration_ms + '%',
  };

  const getVolumeIcon = volume => {
    if (volume === 0) {
      return '/images/icons8-mute-50.png';
    } else if (volume <= 33) {
      return '/images/icons8-low-volume-50.png';
    } else if (volume <= 66) {
      return '/images/icons8-voice-50.png';
    } else {
      return '/images/icons8-audio-50.png';
    }
  };

  return (
    <div className="App">
      <div className="main-wrapper">
        <div className="my-4 now-playing__img">
          <img
            src={
              props.currently_playing_type === 'ad'
                ? '/images/spotify-ad.jpeg'
                : props.item.album.images[0].url
            }
          />
        </div>
        <div className="now-playing__side">
          <div className="now-playing__name">
            {props.currently_playing_type === 'ad'
              ? 'Ad Playing'
              : props.item.name}
          </div>
          <div className="now-playing__artist">
            <span>
              {props.currently_playing_type === 'ad'
                ? 'Spotify Ad'
                : props.item.artists[0].name}
            </span>
          </div>
          <div className="flex items-center justify-between px-2 my-4 text-sm">
            <span className="font-semibold now-playing__status">
              {props.is_playing ? 'Playing' : 'Paused'} on {props.device.name}
            </span>
            <img
              className="h-6"
              src={getVolumeIcon(props.device.volume_percent)}
            />
          </div>
          <div className="progress">
            <div className="progress__bar" style={progressBarStyles} />
          </div>
          {props.currently_playing_type !== 'ad' ? (
            <div className="flex items-center justify-between my-4 text-sm">
              <span>{getDisplayTime(props.progress_ms)}</span>
              <span>{getDisplayTime(props.item.duration_ms)}</span>
            </div>
          ) : null}
          <div className="flex items-center justify-between mt-4">
            <img
              className="h-8"
              src={
                props.shuffle_state
                  ? '/images/icons8-shuffle-on-50.png'
                  : '/images/icons8-shuffle-off-50.png'
              }
            />
            <img
              className="h-8"
              src={
                props.is_playing
                  ? '/images/icons8-play-50.png'
                  : '/images/icons8-pause-50.png'
              }
              onClick={e => {
                console.log('trying to toggling play...');
                player.togglePlay();
              }}
            />
            <img
              className="h-8"
              src={`/images/icons8-repeat-${props.repeat_state}-50.png`}
            />
          </div>
        </div>
        <div className="background" style={backgroundStyles} />{' '}
      </div>
    </div>
  );
};

export { Player };
