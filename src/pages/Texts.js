import React from 'react';
import {
  Link
} from "react-router-dom";
import gardenAnimation from '../assets/cropped/garden_small.mp4';

const Texts = () => {
  return (
    <div className='fullScreen topLeft' id='filmsPage'>
        <section id="garden">
          {/* <h2><Link to="/texts/garden">Garden</Link></h2> */}
          <Link to="/texts/garden">
            <video autoPlay="autoplay" muted loop  src={gardenAnimation} className='gardenVideo'></video>
          </Link>
          <div className='scrollDownContainer'>
          <a className='scrollDown' id="anotherLink" href="#anotherText">Take a look</a>
          </div>
        </section>

        <section id="anotherText" className="center">
          <h2><Link to="/texts/garden">Another future text</Link></h2>      
        </section>
    </div>  
  );
}

export default Texts
