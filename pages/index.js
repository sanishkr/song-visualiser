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
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex flex-col items-start mb-8 font-serif text-right">
        <span className="text-4xl font-bold text-gray-900">Laberinto</span>
        <span className="font-mono text-sm font-light text-gray-700">
          Blond:ish ft. Bahramji{' '}
        </span>
      </div>
      <div className="relative flex flex-row items-center justify-center w-4/5 mx-auto rounded-lg shadow-xl">
        <div className="absolute w-full h-full bg-black bg-opacity-50 rounded-lg"></div>
        <img src={`/images/${bg}.jpg`} className="rounded-lg" />
        <div
          className="absolute w-4/5"
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
        className="w-3/5 my-12 transform scale-150 rounded-full shadow-xl"
        id="audio-element"
        src="/mp3/Blondish_ft_Bahramji_-_Laberinto[Youtubetomp3.sc].mp3"
        autoPlay={false}
        controls={true}
      />
      {/* <select
        className="capitalize"
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
        className="capitalize"
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
