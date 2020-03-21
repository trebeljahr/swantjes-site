import React from "react"
import { Helmet } from "react-helmet"

const Head = () => {
  return (
    <Helmet defer={false} defaultTitle="Swantjes Website">
      <script
        src="https://kit.fontawesome.com/ef7381bf93.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

export default Head
