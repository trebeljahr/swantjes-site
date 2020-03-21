import React from "react"
import "./css/navbar.css"
import Head from "./header"
import Navbar from "./navbar"

const Layout = ({ children, color, forceMenu = false, filmMenu = false }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: color,
      }}
    >
      <Navbar color={color} forceMenu={forceMenu} filmMenu={filmMenu} />
      <Head />
      {children}
    </div>
  )
}

export default Layout
