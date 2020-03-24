import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"

export function Navbar({ desktop = false, color }) {
  return (
    <StaticQuery
      query={graphql`
        query {
          films: allGhostPost(
            filter: { tags: { elemMatch: { name: { eq: "films" } } } }
          ) {
            edges {
              node {
                title
                slug
              }
            }
          }
          texts: allGhostPost(
            filter: { tags: { elemMatch: { name: { eq: "texts" } } } }
          ) {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={data =>
        desktop ? (
          <DesktopNavbar data={data} />
        ) : (
          <MobileNavbar data={data} color={color} />
        )
      }
    ></StaticQuery>
  )
}

const DesktopNavbar = ({ data }) => {
  return (
    <div className="desktop-navbar">
      {data.films && <SubMenu link="films" menuPoints={data.films.edges} />}
      {data.texts && <SubMenu link="texts" menuPoints={data.texts.edges} />}
      <h2>
        <Link activeStyle={{ fontSize: "1.4em" }} to="/about">
          about
        </Link>
      </h2>
    </div>
  )
}

function MobileNavbar({ data }) {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(oldMenu => !oldMenu)
  }
  return menu ? (
    <div className="navbar-mobile">
      <h2 className="menu-header" onClick={toggleMenu}>
        menu
      </h2>
      {data.films && <SubMenu link="films" menuPoints={data.films.edges} />}
      {data.texts && <SubMenu link="texts" menuPoints={data.texts.edges} />}
      <h2>
        <Link to="/about">about</Link>
      </h2>
      <h2 className="swantje-furtak-header">
        <Link to="/">swantje furtak</Link>
      </h2>
    </div>
  ) : (
    <div className="mobile-menu-collapsed">
      <h2 className="menu-header" onClick={toggleMenu}>
        menu
      </h2>
      <h2 className="swantje-furtak-header">
        <Link to="/">swantje furtak</Link>
      </h2>
    </div>
  )
}

const SubMenu = ({ link, menuPoints }) => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(old => !old)
  }
  return (
    <>
      <h2 onClick={toggle}>{link}</h2>
      {menu &&
        menuPoints.map(({ node: { slug, title } }) => (
          <h2 key={slug} style={{ fontSize: "0.8em" }}>
            <Link
              activeStyle={{ textDecoration: "underline" }}
              to={`/${link}/${slug}`}
            >
              {title}
            </Link>
          </h2>
        ))}
    </>
  )
}
