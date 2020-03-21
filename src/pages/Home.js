import React, { useEffect } from "react"
import mainAnimation from "../images/cropped/main_small.mp4"

const Home = ({ setColor }) => {
  useEffect(() => {
    setColor("white")
  }, [setColor])
  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <video
        autoPlay="autoplay"
        muted
        loop
        src={mainAnimation}
        style={{ width: "90vw" }}
      ></video>
    </div>
  )
}

export default Home
