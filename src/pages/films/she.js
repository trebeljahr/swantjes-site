import React from "react"
import Layout from "../../components/layout"
import crappyScreenshot from "../../images/cropped/crappy-screenshot-mock.png"

const She = () => {
  return (
    <Layout color="#1f2839" filmMenu={true}>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          fontFamily: "Helvetica Neue",
        }}
      >
        <h4
          style={{ margin: "10px", letterSpacing: "6px", textOverflow: "none" }}
        >
          1 2 3 4 5 6 7 8 9 10
        </h4>
        <img
          src={crappyScreenshot}
          alt=""
          style={{
            marginTop: "20px",
            width: "90%",
            objectFit: "contain",
          }}
        />
      </div>
    </Layout>
  )
}

export default She
