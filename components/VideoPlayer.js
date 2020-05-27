import React from 'react';
import ReactPlayer from 'react-player';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export default ({
  height = 210,
  width = 375,
  url = '/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3',
  ref,
  ...props
}) => {
  return (
    <ReactPlayer
      css={css`
        > audio {
          ${tw`w-3/5 my-12 transform scale-150 rounded-full shadow-xl md:w-1/3`}
        }
      `}
      ref={ref}
      url={url}
      config={{ height, width }}
      height="50"
      width="60%"
      {...props}
    />
  );
};
