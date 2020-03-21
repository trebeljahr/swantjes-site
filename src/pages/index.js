import React, { useState } from "react"
import Navbar from "../components/Navbar"
import Layout from "../components/layout.js"

const Routing = () => {
  const [color, setColor] = useState("white")
  return (
    <Layout color={color}>
      <Navbar setColor={setColor} />
    </Layout>
  )
}

export default Routing
