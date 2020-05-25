/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from 'react';
import AudioSpectrum from 'react-audio-spectrum';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';

import { templates } from '../config/visualisations';

export default () => {
  const [bg, setBg] = useState('us1');
  const [vis, setVis] = useState('neon');
  const [visConfig, setVisConfig] = useState(templates['neon']);
  useEffect(() => {
    const audioEle = document.getElementById('audio-element');
    // setVisConfig(templates[vis]);
    audioEle.play();
  }, [vis]);
  // useEffect(() => {
  //   setVisConfig({});
  //   setVisConfig(JSON.parse(JSON.stringify(templates[vis])));
  // }, [vis]);
  return (
    <div tw="flex flex-col items-center justify-center w-full h-screen">
      <div tw="flex flex-col items-start mb-8 font-serif text-right">
        <span tw="text-4xl font-bold text-gray-900">Laberinto</span>
        <span tw="font-mono text-sm font-light text-gray-700">
          Blond:ish ft. Bahramji{' '}
        </span>
      </div>
      <div tw="relative flex flex-row items-center justify-center w-4/5 mx-auto rounded-lg shadow-xl md:w-1/3">
        <div tw="absolute w-full h-full bg-black bg-opacity-50 rounded-lg"></div>
        <img src={`/images/${bg}.jpg`} tw="rounded-lg" />
        <div
          tw="absolute w-4/5"
          css={css`
            & > canvas {
              ${tw`w-full`}
            }
          `}
        >
          <AudioSpectrum
            id="audio-canvas"
            audioId={'audio-element'}
            {...visConfig}
          />
        </div>
      </div>
      <audio
        tw="w-3/5 my-12 transform scale-150 rounded-full shadow-xl md:w-1/3"
        id="audio-element"
        src="/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3"
        autoPlay={false}
        controls={true}
      />
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
