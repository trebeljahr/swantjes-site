import React from "react"
import Layout from "../components/layout"
import aboutAnimation from "../images/about_small.mp4"

const About = () => {
  return (
    <Layout color="#4f2223" site="about">
      <div className="container">
        <video autoPlay="autoplay" muted loop src={aboutAnimation}></video>
      </div>
    </Layout>
  )
}

export default About
