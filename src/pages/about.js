import React from "react"
import Layout from "../components/layout"
import aboutAnimation from "../assets/videos/about_small.mp4"
import aboutFrame from "../assets/videos/about.jpg"
import instaIcon from "../assets/images/instagram.svg"
import youtubeIcon from "../assets/images/youtube.svg"

const About = () => {
  return (
    <Layout color="#4f2223" site="about">
      <div className="container">
        <video autoPlay="autoplay" muted loop>
          <source src={aboutAnimation} />
          <img src={aboutFrame} alt="A still frame while video loads" />
        </video>
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
