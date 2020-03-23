import React from "react"
import "./css/main.css"
import Head from "./header"
import { MobileNavbar, Navbar } from "./navbar"
import Media from "react-media"
import { Link } from "gatsby"

const Layout = ({ children, color, forceMenu = false, filmMenu = false }) => {
  if (typeof window !== `undefined`) {
    return (
      <>
        <Media
          queries={{
            small: "(max-width: 800px)",
            large: "(min-width: 801px)",
          }}
        >
          {matches => {
            return (
              <>
                {matches.small && (
                  <div
                    className="mobile-container"
                    style={{ backgroundColor: color }}
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
                    className="desktop-container"
                    style={{
                      color: color === "white" ? "black" : "white",
                      backgroundColor: color,
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
                        <Link to="/">swantje furtak</Link>
                      </h2>
                    </div>
                  </div>
                )}
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
