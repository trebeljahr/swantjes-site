import React from "react"
import Head from "./header"
import Media from "react-media"
import { Navbar } from "./navbar"
import "./css/main.css"

const Layout = ({ children, color, sub }) => {
  if (typeof window !== `undefined`) {
    return (
      <>
        <Media
          queries={{
            mobile: "(max-width: 800px)",
            desktop: "(min-width: 801px)",
          }}
        >
          {matches => {
            return (
              <>
                <Head />
                <div
                  className={
                    matches.desktop ? "desktop-container" : "mobile-container"
                  }
                  style={{
                    color: color === "white" ? "black" : "white",
                    backgroundColor: color,
                  }}
                >
                  <Navbar color={color} desktop={matches.desktop} sub={sub} />
                  {children}
                </div>
              </>
            )
          }}
        </Media>
      </>
    )
  }
  return null
}

export default Layout
