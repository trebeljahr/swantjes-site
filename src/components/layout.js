import React from "react"
import Head from "./header"
import Media from "react-media"
import { Navbar } from "./navbar"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../global"
import { theme } from "../theme"
import "./css/main.css"
import "./css/desktop.css"
import "./css/mobile.css"

const Layout = ({ children, color, sub, site }) => {
  if (typeof window !== `undefined`) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Media
          queries={{
            mobile: `(max-width: ${theme.mobile})`,
            desktop: `(min-width: ${theme.mobile})`,
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
                  <Navbar
                    color={color}
                    desktop={matches.desktop}
                    sub={sub}
                    site={site}
                  />
                  {children}
                </div>
              </>
            )
          }}
        </Media>
      </ThemeProvider>
    )
  }
  return null
}

export default Layout
