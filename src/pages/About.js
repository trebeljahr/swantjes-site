import React from 'react';
import aboutAnimation from '../assets/cropped/about_small.mp4'
const About = () => {
  return (
    <div className='fullScreen topLeft'>
    <video autoPlay="autoplay" muted loop src={aboutAnimation} className='fullScreenVideo'></video>
    </div>
  );
}

export default About
