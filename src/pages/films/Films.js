import React from 'react';
import {
  Link
} from "react-router-dom";
import shortFilmsVideo from '../../assets/cropped/shortfilms_small.mp4';
import sheVideo from '../../assets/cropped/she_small.mp4';
import workVideo from '../../assets/cropped/work_small.mp4';

const Films = () => {
  return (
    <div className='fullScreen topLeft' id='filmsPage'>
        <section id="she">
            <Link to="/films/she" className='center'>
              <video autoPlay="autoplay" muted loop src={sheVideo} className='filmsVideo' id="sheVideo"></video>
            </Link>
            
            <a className='scrollDownContainer' href="#work">
             <div className='scrollDown white'>More</div>
            </a>
        </section>
        <section id="work">
            <Link to="/films/work" className='center'>
              <video autoPlay="autoplay" muted loop src={workVideo} className='filmsVideo'></video>
            </Link>
            <a className='scrollDownContainer' href="#shortFilms">
            <div className='scrollDown' >More</div>
            </a>
        </section>
        <section id="shortFilms">
            <Link to="/films/short" className='center'>
            <video id="shortFilmsAnimation" autoPlay="autoplay" muted loop src={shortFilmsVideo} className='filmsVideo'></video>
            </Link>
        </section>
    </div>  
  );
}

export default Films
