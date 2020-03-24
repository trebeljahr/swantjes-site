import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet defer={false} defaultTitle="Swantjes Website">
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:100&display=swap"
        rel="stylesheet"
      ></link>
      <script
        src="https://kit.fontawesome.com/ef7381bf93.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default Head
