import React from "react"
import mainAnimation from "../assets/videos/main_small.mp4"
import mainFrame from "../assets/videos/main.jpg"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout color="white" site="home">
      <div className="container">
        <video autoPlay="autoplay" muted loop playsinline poster={mainFrame}>
          <source src={mainAnimation} />
          <img src={mainFrame} alt="A still frame while video loads" />
        </video>
      </div>
    </Layout>
  )
}

export default Home
