import React from "react"
import "./css/main.css"
import Head from "./header"
import Navbar from "./navbar"

const Layout = ({ children, color, forceMenu = false, filmMenu = false }) => {
  return (
    <div className="mainContainer" style={{ backgroundColor: color }}>
      <Navbar color={color} forceMenu={forceMenu} filmMenu={filmMenu} />
      <Head />
      {children}
    </div>
  )
}

export default Layout
