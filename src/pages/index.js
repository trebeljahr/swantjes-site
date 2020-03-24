import React from "react"
import mainAnimation from "../images/main_small.mp4"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout color="white">
      <div className="container">
        <video autoPlay="autoplay" muted loop src={mainAnimation}></video>
      </div>
    </Layout>
  )
}

export default Home
