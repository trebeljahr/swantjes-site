import React from "react"
import Layout from "../components/layout"
import aboutAnimation from "../assets/videos/about_small.mp4"
import aboutFrame from "../assets/videos/about.jpg"
import instaIcon from "../assets/images/instagram.png"
import youtubeIcon from "../assets/images/youtube.png"

const About = () => {
  return (
    <Layout color="#4f2223" site="about">
      <div className="container about-container">
        <video id="about-video" autoPlay="autoplay" muted loop playsinline>
          <source src={aboutAnimation} />
          <img src={aboutFrame} alt="A still frame while video loads" />
        </video>

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
