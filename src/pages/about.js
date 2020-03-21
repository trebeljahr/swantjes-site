import React from "react"
import Layout from "../components/layout"
import aboutAnimation from "../images/cropped/about_small.mp4"

const About = () => {
  return (
    <Layout color="#4f2223">
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <video autoPlay="autoplay" muted loop src={aboutAnimation}></video>
      </div>
    </Layout>
  )
}

export default About
