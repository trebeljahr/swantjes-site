import React, { useState } from "react"
import Link from "gatsby-link"

export default function Navbar({ color, forceMenu, filmMenu }) {
  const [menu, setMenu] = useState(false)
  const [filmSubMenu, setFilmSubMenu] = useState(filmMenu)

  const toggleMenu = () => {
    setMenu(oldMenu => !oldMenu)
  }
  const toggleFilmSubMenu = () => {
    setFilmSubMenu(oldMenu => !oldMenu)
  }
  return menu || forceMenu ? (
    <div
      className="menu-container"
      style={{
        color: color === "white" ? "black !important" : "white !important",
      }}
    >
      <h2 className="collapsed-menu-button" onClick={toggleMenu}>
        menu
      </h2>
      <>
        <h2 onClick={toggleFilmSubMenu}>
          <Link
            activeStyle={{ fontSize: "1.4em" }}
            partiallyActive={true}
            to="/films"
          >
            films
          </Link>
        </h2>
        {filmSubMenu ? (
          <h2 style={{ fontSize: "0.8em" }}>
            <Link activeStyle={{ textDecoration: "underline" }} to="/films/she">
              she
            </Link>
          </h2>
        ) : null}
      </>
      <h2>
        <Link activeStyle={{ fontSize: "1.4em" }} to="/texts">
          texts
        </Link>
      </h2>
      <h2>
        <Link activeStyle={{ fontSize: "1.4em" }} to="/about">
          about
        </Link>
      </h2>
      <h2 className="collapsed-menu-header">
        <Link to="/">Swantje Furtak</Link>
      </h2>
    </div>
  ) : (
    <div
      className="menu-container"
      style={{ color: color === "white" ? "black" : "white" }}
    >
      <h2
        className="menu-button"
        style={{
          borderBottom: `2px ${color === "white" ? "black" : "white"} solid`,
        }}
        onClick={toggleMenu}
      >
        Menu
      </h2>
      <h2 className="menu-header">Swantje Furtak</h2>
    </div>
  )
}
