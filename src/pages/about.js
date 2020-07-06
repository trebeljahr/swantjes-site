import React, { useState } from "react"
import Layout from "../components/layout"
import aboutAnimation from "../assets/videos/about_small.mp4"
import aboutFrame from "../assets/videos/about.jpg"
import instaIcon from "../assets/images/instagram.png"
import youtubeIcon from "../assets/images/youtube.png"
import { Loader } from "../components/Loader"
import converter from "number-to-words"

const convertMsToYears = ms => Math.floor(ms / 1000 / 60 / 60 / 24 / 365)
const About = () => {
  const [loading, setLoading] = useState(true)
  const birthday = new Date("1999-06-05")
  const elapsedTime = convertMsToYears(Date.now() - birthday) + 1
  const elapsedTimeString = converter.toWords(elapsedTime)

  return (
    <Layout color="#4f2223" site="about">
      <div className="container about-container">
        <div className="video-container">
          <Loader loading={loading} color="white" />
          <video
            style={{ display: loading ? "none" : "inline" }}
            id="about-video"
            autoPlay="autoplay"
            muted
            loop
            playsInline
            poster={aboutFrame}
            onLoad={() => setLoading(false)}
          >
            <source src={aboutAnimation} />
            <img
              src={aboutFrame}
              alt="A still frame in case there is no video"
            />
            You can not display the video.
          </video>
        </div>
        <h2 id="about-heading">about</h2>
        <p id="about-text">
          {elapsedTimeString.charAt(0).toUpperCase() +
            elapsedTimeString.slice(1)}
          -year-old woman, dreaming of becoming a documentary filmmaker and
          perceptive storyteller.
        </p>
        <div className="social-media-bar">
          <a href="https://www.instagram.com/swantjefurtak/">
            <img src={instaIcon} alt="instagram-icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCuVNWp3ieYTkTTQrxPlBnpw">
            <img src={youtubeIcon} alt="youtube-icon" id="youtube-icon" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About
