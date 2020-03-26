import React, { useState } from "react"
import mainAnimation from "../assets/videos/main_small.mp4"
import mainFrame from "../assets/videos/main.jpg"
import notes from "../assets/images/notes.jpeg"
import Layout from "../components/layout"
import { Loader } from "../components/Loader"

const Home = () => {
  const [loading, setLoading] = useState(true)
  return (
    <Layout color="white" site="home">
      <div className="container">
        <div className="video-container">
          <Loader loading={loading} color="grey" />
          <video
            style={{ display: loading ? "none" : "inline" }}
            autoPlay="autoplay"
            muted
            loop
            playsInline
            poster={mainFrame}
            onLoad={() => setLoading(false)}
          >
            <source src={mainAnimation} />
            <img
              src={mainFrame}
              alt="A still frame in case there is no video"
            />
            You can not display the video.
          </video>
          <img className="notes" src={notes} alt="a glance in my notebooks" />
        </div>
      </div>
    </Layout>
  )
}

export default Home
