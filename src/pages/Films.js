import React from 'react';
import {
  Link
} from "react-router-dom";
import shortFilmsVideo from '../assets/cropped/shortfilms_small.mp4';
import sheVideo from '../assets/cropped/she_small.mp4';
import workVideo from '../assets/cropped/work_small.mp4';

const Films = () => {
  return (
    <div className='fullScreen topLeft' id='filmsPage'>
        <section id="she">
            <Link to="/films/she" id='linkToShe' className='center'>
              <video autoPlay="autoplay" muted loop src={sheVideo} className='filmsVideo' id="sheVideo"></video>
            </Link>
            
            <div className='scrollDownContainer'>
             <a className='scrollDown' href="#work">More</a>
            </div>
        </section>
        <section id="work">
            <Link to="/films/work" id='linkToShe' className='center'>
              <video autoPlay="autoplay" muted loop src={workVideo} className='filmsVideo'></video>
            </Link>
            <div className='scrollDownContainer'>
            <a className='scrollDown' href="#shortFilms">More</a>
            </div>
        </section>
        <section id="shortFilms">
            <Link to="/films/short" id='linkToShe' className='center'>
            <video autoPlay="autoplay" muted loop src={shortFilmsVideo} className='filmsVideo'></video>
            </Link>
        </section>
    </div>  
  );
}

export default Films
