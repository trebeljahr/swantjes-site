import React from 'react';
import myVideo from '../assets/main_small.mp4';

const Home = () => {
  return (
    <div className='fullScreen topLeft'>
      <video autoPlay="autoplay" muted loop id="myVideo" src={myVideo} className='fullScreenVideo'></video>
    </div>
  )
}

export default Home
