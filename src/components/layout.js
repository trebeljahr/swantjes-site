import React from "react"
import "./css/main.css"
import Head from "./header"
import { MobileNavbar, Navbar } from "./navbar"
import Media from "react-media"
import { Link } from "gatsby"

const Layout = ({ children, color, forceMenu = false, filmMenu = false }) => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 800px)",
          large: "(min-width: 800px)",
        }}
      >
        {matches => (
          <>
            {matches.small && (
              <div
                style={{
                  display: "flex",
                  width: "100vw",
                  minHeight: "100vh",
                  flexDirection: "column",
                  backgroundColor: color,
                  alignItems: "center",
                }}
              >
                <MobileNavbar
                  color={color}
                  forceMenu={forceMenu}
                  filmMenu={filmMenu}
                />
                <Head />
                {children}
              </div>
            )}
            {matches.large && (
              <div
                style={{
                  display: "grid",
                  gridTemplateRows: "9fr 1fr",
                  gridTemplateColumns: "1fr 5fr",
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: color,
                  color: color === "white" ? "black" : "white",
                  alignItems: "center",
                  justifyItems: "center",
                  overflow: "hidden",
                }}
              >
                <Navbar filmMenu={filmMenu} color={color} />
                <Head />
                {children}
                <div
                  style={{
                    letterSpacing: "5px",
                    gridColumn: 2,
                    gridRow: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <h2>
                    <Link to="/">Swantje Furtak</Link>
                  </h2>
                </div>
              </div>
            )}
          </>
        )}
      </Media>
    </>
  )
}

export default Layout
