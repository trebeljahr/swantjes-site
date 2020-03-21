import React from "react"
import Layout from "../components/layout"

const ErrorPage = () => {
  return (
    <Layout color="white">
      <div
        style={{
          fontFamily: "Helvetica Neue",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1>404 Oh no. </h1>
        <p style={{ textAlign: "center" }}>
          Something went wrong. <br /> Maybe try another page huh?
        </p>
      </div>
    </Layout>
  )
}

export default ErrorPage
