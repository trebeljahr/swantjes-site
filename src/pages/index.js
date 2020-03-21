import React from "react"
import mainAnimation from "../images/cropped/main_small.mp4"
import Layout from "../components/layout"

const Home = () => {
  return (
    <Layout color="white">
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <video autoPlay="autoplay" muted loop src={mainAnimation}></video>
      </div>
    </Layout>
  )
}

export default Home
