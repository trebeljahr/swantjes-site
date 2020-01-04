import React from "react"
import { Link } from "react-router-dom"
import gardenAnimation from "../images/cropped/garden_small.mp4"

const Texts = () => {
  return (
    <div className="fullScreen topLeft" id="textsPage">
      <section id="garden" className="center">
        <Link to="/texts/garden">
          <video
            autoPlay="autoplay"
            muted
            loop
            src={gardenAnimation}
            className="filmsVideo"
            id="gardenVideo"
          ></video>
        </Link>
        <a className="scrollDownContainer" href="#anotherText">
          <div className="scrollDown white">More</div>
        </a>
      </section>
      <section id="anotherText" className="center">
        <h2>
          <Link to="/texts/garden">Another future text</Link>
        </h2>
      </section>
    </div>
  )
}

export default Texts
