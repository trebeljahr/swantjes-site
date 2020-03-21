import React, { useState } from "react"
import { NavLink, useParams } from "react-router-dom"

export default function Navbar({ color }) {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(oldMenu => !oldMenu)
  }
  return menu ? (
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
  ) : (
    <div className="navbar-mobile">
      <h2
        onClick={toggleMenu}
        style={{
          marginTop: "10vh",
          marginBottom: "30px",
          letterSpacing: "5px",
        }}
      >
        Menu
      </h2>
      <FilmsSubMenu toggleMenu={toggleMenu} />
      <h2 onClick={toggleMenu}>
        <NavLink
          activeStyle={{ fontSize: "1.4em" }}
          className="navbarLinks"
          to="/texts"
        >
          texts
        </NavLink>
      </h2>
      <h2 onClick={toggleMenu}>
        <NavLink
          activeStyle={{ fontSize: "1.4em" }}
          className="navbarLinks"
          to="/about"
        >
          about
        </NavLink>
      </h2>
      <h2
        style={{
          borderTop: `2px black solid`,
          padding: "30px 20px",
          letterSpacing: "5px",
        }}
        onClick={toggleMenu}
      >
        <NavLink to="/">Swantje Furtak</NavLink>
      </h2>
    </div>
  )
}

const FilmsSubMenu = ({ toggleMenu }) => {
  const { id } = useParams()
  const [filmSubMenu, setFilmSubMenu] = useState(id === "films")

  const toggleFilmsSubMenu = () => {
    setFilmSubMenu(oldMenu => !oldMenu)
  }
  return (
    <>
      <h2 onClick={toggleFilmsSubMenu}>
        <NavLink
          activeStyle={{ fontSize: "1.4em" }}
          className="navbarLinks"
          to="/films"
        >
          films
        </NavLink>
      </h2>

      {filmSubMenu && (
        <div>
          <h2 onClick={toggleMenu} style={{ fontSize: "0.8em" }}>
            <NavLink
              activeStyle={{ textDecoration: "underline" }}
              className="navbarLinks"
              exact
              to="/films/she"
            >
              she
            </NavLink>
          </h2>
        </div>
      )}
    </>
  )
}
