/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import AudioSpectrum from 'react-audio-spectrum';
import screenfull from 'screenfull';

import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

import { templates } from '../config/visualisations';
import { KFAnimations } from '../utils';
import VideoPlayer from '../components/VideoPlayer';

const FSIcon = () => (
  <svg
    fill="currentColor"
    height="100%"
    version="1.1"
    viewBox="0 0 36 36"
    width="100%"
  >
    <g>
      <use xlinkHref="#ytp-id-193"></use>
      <path
        d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"
        id="ytp-id-193"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-194"></use>
      <path
        d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"
        id="ytp-id-194"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-195"></use>
      <path
        d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"
        id="ytp-id-195"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-196"></use>
      <path
        d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"
        id="ytp-id-196"
      ></path>
    </g>
  </svg>
);
const ExitFSIcon = () => (
  <svg
    fill="currentColor"
    height="100%"
    version="1.1"
    viewBox="0 0 36 36"
    width="100%"
  >
    <g>
      <use xlinkHref="#ytp-id-1153"></use>
      <path
        d="m 14,14 -4,0 0,2 6,0 0,-6 -2,0 0,4 0,0 z"
        id="ytp-id-1153"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-1154"></use>
      <path
        d="m 22,14 0,-4 -2,0 0,6 6,0 0,-2 -4,0 0,0 z"
        id="ytp-id-1154"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-1155"></use>
      <path
        d="m 20,26 2,0 0,-4 4,0 0,-2 -6,0 0,6 0,0 z"
        id="ytp-id-1155"
      ></path>
    </g>
    <g>
      <use xlinkHref="#ytp-id-1156"></use>
      <path d="m 10,22 4,0 0,4 2,0 0,-6 -6,0 0,2 0,0 z" id="ytp-id-1156"></path>
    </g>
  </svg>
);
const getRandomItem = items => {
  return items[Math.floor(Math.random() * items.length)];
};
const StyledWrapper = styled.div`
  ${tw`relative flex flex-row items-center justify-center w-4/5 mx-auto rounded-lg shadow-xl md:w-1/3`};
`;
const StyledSkin = styled.div`
  & > div {
    ${props =>
      props.show
        ? css`
            animation: ${KFAnimations.fadeIn} 0.4s ease-in both;
          `
        : css`
            animation: ${KFAnimations.fadeOut} 0.4s ease-in both;
          `}
  }
  ${tw`absolute w-full h-full`};
  ${({ isFS }) =>
    isFS
      ? css``
      : css`
          ${tw`rounded-lg`}
        `};
  background-image: linear-gradient( to bottom,rgba(0,0,0,0),rgba(0,0,0,0.2) 17%,rgba(0,0,0,0.8) );
  );
`;
const FullScreenIcon = styled.div`
  ${tw`absolute top-0 right-0 w-12 h-12 mt-1 mr-1 text-white`};
`;
const AudioWrapper = styled.div`
  ${tw`absolute bottom-0 w-4/5 transform scale-150 rounded-full shadow-xl sm:w-3/5 md:w-2/3`};
  ${({ isFS }) =>
    isFS
      ? css`
          ${tw`bottom-0 w-auto scale-100 md:scale-150`}
        `
      : css`
          bottom: -6rem;
          > audio {
            ${tw`w-full`}
          }
        `};
  ${({ show, isFS }) =>
    isFS
      ? show
        ? css`
            animation: ${KFAnimations.fadeIn} 0.4s ease-in both;
          `
        : css`
            animation: ${KFAnimations.fadeOut} 0.4s ease-in both;
          `
      : ``}
`;
const CanvasWrapper = styled.div`
  ${tw`absolute w-4/5`};
  & > canvas {
    ${tw`w-full`}
  }
`;
const StyledImg = styled.img`
  ${({ isFS }) =>
    isFS
      ? css``
      : css`
          ${tw`rounded-lg`}
        `};
`;
const SongMetaWrapper = styled.div`
  ${tw`absolute flex flex-col items-start font-serif text-right`};
  ${({ isFS }) =>
    isFS
      ? css`
          ${tw`top-0 items-center`}
        `
      : css`
          top: -6rem;
        `};
`;
const TrackTitle = styled.span`
  ${tw`text-4xl font-bold`};
  ${({ isFS }) => (isFS ? tw`text-white md:text-6xl` : tw`text-gray-900`)};
`;
const TrackInfo = styled.div`
  ${tw`font-mono text-sm font-light`};
  ${({ isFS }) => (isFS ? tw`text-lg text-gray-200 ` : tw`text-gray-700`)};
`;
export default () => {
  const [bg, setBg] = useState();
  const [vis, setVis] = useState();
  const [isFS, setIsFS] = useState(false);
  const [showSkin, setShowSkin] = useState(false);
  const ref = useRef();
  const fullPlayer = useRef();
  // const [visConfig, setVisConfig] = useState(templates['neon']);
  useEffect(() => {
    const audioEle = document.getElementById('audio-element');
    // setVisConfig(templates[vis]);
    setBg(getRandomItem(['us1', 'us2', 'us3', 'us4', 'us5']));
    setVis(getRandomItem(Object.keys(templates)));
    audioEle.play();
  }, []);
  const handleClickFullscreen = () => {
    if (screenfull.isFullscreen) {
      screenfull.exit();
    } else {
      screenfull.request(findDOMNode(fullPlayer.current));
    }
    setIsFS(!screenfull.isFullscreen);
  };
  // useEffect(() => {
  //   setVisConfig({});
  //   setVisConfig(JSON.parse(JSON.stringify(templates[vis])));
  // }, [vis]);
  // console.log({ vis, isFS });

  return (
    <div tw="flex flex-col items-center justify-center w-full h-screen">
      <StyledWrapper ref={fullPlayer}>
        <SongMetaWrapper isFS={isFS}>
          <TrackTitle isFS={isFS}>Laberinto</TrackTitle>
          <TrackInfo isFS={isFS}>Blond:ish ft. Bahramji </TrackInfo>
        </SongMetaWrapper>
        <StyledSkin
          onMouseOver={() => {
            setShowSkin(true);
            setTimeout(() => setShowSkin(false), 3000);
          }}
          show={showSkin}
          isFS={isFS}
        >
          <FullScreenIcon onClick={handleClickFullscreen}>
            {isFS ? <ExitFSIcon /> : <FSIcon />}
          </FullScreenIcon>
        </StyledSkin>
        {bg && vis ? (
          <>
            <StyledImg src={`/images/${bg}.jpg`} isFS={isFS} />
            <CanvasWrapper>
              <AudioSpectrum
                id="audio-canvas"
                audioId={'audio-element'}
                {...templates[vis]}
              />
            </CanvasWrapper>
          </>
        ) : null}
        <AudioWrapper show={showSkin} isFS={isFS}>
          <ReactAudioPlayer
            tw="mx-auto"
            id="audio-element"
            src="/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3"
            autoPlay={false}
            volume={1}
            controls
          />
        </AudioWrapper>
      </StyledWrapper>
      {/* <audio
        tw="w-3/5 my-12 transform scale-150 rounded-full shadow-xl md:w-1/3"
        id="audio-element"
        src="/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3"
        autoPlay={false}
        controls={true}
      /> */}

      {/* <AudioPlayer
        autoPlay={false}
        tw="w-3/5 my-12 transform scale-150 rounded-full shadow-xl md:w-1/3"
        id="audio-element"
        src="/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3"
        onPlay={e => console.log('onPlay')}
        ref={ref}
        // other props here
      /> */}

      {/* <VideoPlayer
        id="audio-element"
        ref={ref}
        autoPlay={true}
        controls={true}
      /> */}
      {/* <select
        tw="capitalize"
        defaultValue={vis}
        onChange={e => setVis(e.target.value)}
      >
        {Object.keys(templates).map((temp, i) => (
          <option name="template" value={temp} key={i + 1}>
            {temp}
          </option>
        ))}
      </select>
      <select
        tw="capitalize"
        defaultValue={bg}
        onChange={e => setBg(e.target.value)}
      >
        {['us1', 'us2'].map((temp, i) => (
          <option name="bg" value={temp} key={i + 1}>
            {temp}
          </option>
        ))}
      </select> */}
    </div>
  );
};
