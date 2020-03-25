import React, { useState } from "react"
import mainAnimation from "../assets/videos/main_small.mp4"
import mainFrame from "../assets/videos/main.jpg"
import Layout from "../components/layout"
import Loader from "react-spinners/BounceLoader"

const Home = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Layout color="white" site="home">
      <div className="container">
        <Loader loading={loading} color="grey" />
        <div className="video-container">
          <video
            autoPlay="autoplay"
            muted
            loop
            playsInline
            poster={mainFrame}
            onLoad={() => setLoading(false)}
          >
            <source src={mainAnimation} />
            <img src={mainFrame} alt="A still frame while video loads" />
          </video>
        </div>
      </div>
    </Layout>
  )
}

export default Home
