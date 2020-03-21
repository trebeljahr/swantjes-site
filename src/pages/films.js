import React from "react"
import Link from "gatsby-link"
import shortFilmsVideo from "../images/cropped/shortfilms_small.mp4"
import sheVideo from "../images/cropped/she_small.mp4"
import workVideo from "../images/cropped/work_small.mp4"
import Layout from "../components/layout"

const Films = ({ location }) => {
  return (
    <Layout location={location} color="#1f2839">
      <>
        <Link to="/films/she" className="center">
          <video autoPlay="autoplay" muted src={sheVideo}></video>
        </Link>
        <Link to="/films/work" className="center">
          <video autoPlay="autoplay" muted src={workVideo}></video>
        </Link>
        <Link to="/films/short" className="center">
          <video
            id="workVideo"
            autoPlay="autoplay"
            muted
            src={shortFilmsVideo}
          ></video>
        </Link>
      </>
    </Layout>
  )
}

export default Films
