import React from 'react';
import { useStateContext } from '../Context';

import sunVideo from '../assets/gif/sunny.mp4';
import rainVideo from '../assets/gif/rain.mp4';
import cloudyVideo from '../assets/gif/cloud.mp4';
import snowVideo from '../assets/gif/snowy.mp4';
import fogVideo from '../assets/gif/fogg.mp4';
import stormVideo from '../assets/gif/stormy.mp4';


const weatherVideoMap = {
  clear: sunVideo,
  sun: sunVideo,
  cloudy: cloudyVideo,
  fog: fogVideo,
  rain: rainVideo,
  shower: rainVideo,
  snow: snowVideo,
  thunder: stormVideo,
  storm: stormVideo,
};

const BackGroundLayout = () => {
  const { weather } = useStateContext();

  let videoSrc = sunVideo; 

  if (weather?.conditions) {
    const condition = weather.conditions.toLowerCase();

    for (const key in weatherVideoMap) {
      if (condition.includes(key)) {
        videoSrc = weatherVideoMap[key];
        break;
      }
    }
  }

  return (
    <video
      autoPlay
      loop
      muted
      className="fixed inset-0 w-full h-full object-cover -z-10"
      src={videoSrc}
    />
  );
};

export default BackGroundLayout;
