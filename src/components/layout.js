import React from "react"
import "./css/layout.css"
import "./css/book.css"
import "./css/navbar.css"
import "./css/color.css"
import "./css/positions.css"
import Head from "./header"

const Layout = ({ children, color }) => (
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
    <Head />
    {children}
  </div>
)

export default Layout
