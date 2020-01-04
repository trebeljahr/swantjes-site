import React, { useState } from "react"
import { NavLink, Route } from "react-router-dom"

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(oldMenu => !oldMenu)
  }

  return (
    <div>
      <div onClick={toggleMenu} id="toggleMenu" className="center">
        <h2>Menu</h2>
      </div>
      {menu ? (
        <>
          <div className="navbar-vertical topLeft">
            <div onClick={toggleMenu} id="toggleMenu" className="center">
              <h2>Menu</h2>
            </div>
            <VerticalLine />
            <h2>
              <NavLink
                activeStyle={{ color: "red" }}
                className="navbarLinks"
                exact
                to="/"
              >
                Home
              </NavLink>
            </h2>
            <h2>
              <NavLink
                activeStyle={{ color: "red" }}
                className="navbarLinks"
                to="/films"
              >
                Films
              </NavLink>
            </h2>
            <h2>
              <NavLink
                activeStyle={{ color: "red" }}
                className="navbarLinks"
                to="/contact"
              >
                Contact
              </NavLink>
            </h2>
            <h2 style={{ marginLeft: "auto", marginRight: 0 }}>
              Swantje Furtak
            </h2>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  )
}

const VerticalLine = () => {
  return (
    <>
      <Route exact path="/">
        <div className="verticalLine" style={{ backgroundColor: "grey" }} />
      </Route>
      <Route exact path="/about">
        <div className="verticalLine" style={{ backgroundColor: "grey" }} />
      </Route>
      <Route exact path="/films">
        <div className="verticalLine" style={{ backgroundColor: "grey" }} />
      </Route>
      <Route exact path="/contact">
        <div className="verticalLine" style={{ backgroundColor: "grey" }} />
      </Route>
      <Route path="/films/work">
        <div className="verticalLine work-color" />
      </Route>
      <Route path="/films/short">
        <div className="verticalLine short-color" />
      </Route>
      <Route path="/films/she">
        <div className="verticalLine she-color" style={{}} />
      </Route>
      <Route path="/texts/garden">
        <div className="verticalLine garden-color" style={{}} />
      </Route>
    </>
  )
}
