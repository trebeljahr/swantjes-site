import React, { useState } from "react"
import Layout from "../components/layout"
import aboutAnimation from "../assets/videos/about_small.mp4"
import aboutFrame from "../assets/videos/about.jpg"
import instaIcon from "../assets/images/instagram.png"
import youtubeIcon from "../assets/images/youtube.png"
import Loader from "react-spinners/BounceLoader"

const About = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Layout color="#4f2223" site="about">
      <div className="container about-container">
        <div className="video-container">
          <Loader loading={loading} color="white" />
          <video
            id="about-video"
            autoPlay="autoplay"
            muted
            loop
            playsInline
            onLoad={() => setLoading(false)}
          >
            <source src={aboutAnimation} />
            <img src={aboutFrame} alt="A still frame while video loads" />
          </video>
        </div>
        <h2 id="about-heading">about</h2>
        <p id="about-text">
          Hi I am Swantje Furtak and this is some placeholder text that will
          describe who I am and what I am doing. I like drawing, writing, films,
          biochemistry, journalism and... social media?
        </p>
        <div className="social-media-bar">
          <a href="https://www.instagram.com">
            <img src={instaIcon} alt="instagram-icon" />
          </a>
          <a href="https://youtube.com">
            <img src={youtubeIcon} alt="youtube-icon" id="youtube-icon" />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default About
