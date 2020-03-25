import React from "react"
import Layout from "../components/layout"
import aboutAnimation from "../images/about_small.mp4"
import instaIcon from "../images/instagram.svg"
import youtubeIcon from "../images/youtube.svg"

const About = () => {
  return (
    <Layout color="#4f2223" site="about">
      <div className="container">
        <video autoPlay="autoplay" muted loop src={aboutAnimation}></video>
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
