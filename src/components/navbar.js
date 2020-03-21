import React, { useState } from "react"
import Link from "gatsby-link"

export default function Navbar({ color, menu: hasMenu, route }) {
  const [menu, setMenu] = useState(hasMenu)
  const subMenu = route.includes("/films")
  const toggleMenu = () => {
    setMenu(oldMenu => !oldMenu)
  }
  return menu ? (
    <div className="navbar-mobile">
      <h2
        style={{
          marginTop: "10vh",
          marginBottom: "1.4em",
          letterSpacing: "5px",
        }}
        onClick={toggleMenu}
      >
        menu
      </h2>
      <>
        <h2>
          <Link
            activeStyle={{ fontSize: "1.4em" }}
            state={{ menu: false }}
            partiallyActive={true}
            to="/films"
          >
            films
          </Link>
        </h2>
        {subMenu && (
          <div>
            <h2 style={{ fontSize: "0.8em" }}>
              <Link
                activeStyle={{ textDecoration: "underline" }}
                to="/films/she"
                state={{ menu: false }}
              >
                she
              </Link>
            </h2>
          </div>
        )}
      </>
      <h2>
        <Link
          activeStyle={{ fontSize: "1.4em" }}
          state={{ menu: false }}
          to="/texts"
        >
          texts
        </Link>
      </h2>
      <h2>
        <Link
          activeStyle={{ fontSize: "1.4em" }}
          state={{ menu: false }}
          to="/about"
        >
          about
        </Link>
      </h2>
      <h2
        style={{
          borderTop: `2px black solid`,
          padding: "30px 20px",
          letterSpacing: "5px",
        }}
      >
        <Link to="/">Swantje Furtak</Link>
      </h2>
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textTransform: "lowercase",
        color: color === "white" ? "black" : "white",
      }}
    >
      <h2
        style={{
          borderBottom: `2px ${color === "white" ? "black" : "white"} solid`,
          padding: "10px 40px",
          letterSpacing: "3px",
        }}
        onClick={toggleMenu}
      >
        Menu
      </h2>
      <h2
        style={{
          marginTop: "20px",
          letterSpacing: "3px",
        }}
      >
        Swantje Furtak
      </h2>
    </div>
  )
}
