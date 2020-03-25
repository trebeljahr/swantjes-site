import React from "react"
import Layout from "../components/layout"

const ErrorPage = () => {
  return (
    <Layout color="white">
      <div className="container">
        <h1>404 Oh no. </h1>
        <p>
          Something went wrong. <br /> Maybe try another page huh?
        </p>
      </div>
    </Layout>
  )
}

export default ErrorPage
