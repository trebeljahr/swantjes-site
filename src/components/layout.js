import React from "react"
import "./css/navbar.css"
import Head from "./header"
import Navbar from "./navbar"

const Layout = ({ children, color, location }) => {
  if (typeof window !== `undefined`) {
    const {
      pathname,
      state: { menu },
    } = location

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
        <Navbar color={color} route={pathname} menu={menu} />
        <Head />
        {children}
      </div>
    )
  }
  return (
    <div>
      <Head />
      {children}
    </div>
  )
}

export default Layout
