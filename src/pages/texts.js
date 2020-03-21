import React from "react"
import gardenAnimation from "../images/cropped/garden_small.mp4"
import Layout from "../components/layout"

const Texts = () => {
  return (
    <Layout color="#013f31">
      <>
        <video autoPlay="autoplay" muted loop src={gardenAnimation}></video>
      </>
    </Layout>
  )
}

export default Texts
