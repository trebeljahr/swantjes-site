import React from 'react';
import mainAnimation from '../assets/cropped/main_small.mp4';

const Home = () => {
  return (
    <div className='fullScreen topLeft'>
      <video autoPlay="autoplay" muted loop src={mainAnimation} className='fullScreenVideo'></video>
    </div>
  )
}

export default Home
