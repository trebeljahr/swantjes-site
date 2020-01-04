import React from "react"
import { Link } from "react-router-dom"
import shortFilmsVideo from "../images/cropped/shortfilms_small.mp4"
import sheVideo from "../images/cropped/she_small.mp4"
import workVideo from "../images/cropped/work_small.mp4"

const Films = () => {
  return (
    <div className="fullScreen topLeft" id="filmsPage">
      <section id="she">
        <Link to="/films/she" className="center">
          <video
            autoPlay="autoplay"
            muted
            src={sheVideo}
            className="filmsVideo"
            id="sheVideo"
          ></video>
        </Link>
        <a className="scrollDownContainer" href="#work">
          <div className="scrollDown white">More</div>
        </a>
      </section>
      <section id="work">
        <Link to="/films/work" className="center">
          <video
            autoPlay="autoplay"
            muted
            src={workVideo}
            className="filmsVideo"
            id="workVideo"
          ></video>
        </Link>
        <a className="scrollDownContainer" href="#shortFilms">
          <div className="scrollDown">More</div>
        </a>
      </section>
      <section id="shortFilms">
        <Link to="/films/short" className="center">
          <video
            id="workVideo"
            autoPlay="autoplay"
            muted
            src={shortFilmsVideo}
            className="filmsVideo"
          ></video>
        </Link>
      </section>
    </div>
  )
}

export default Films
