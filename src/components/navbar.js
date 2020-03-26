import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"
import MobileMenu from "./Menus/MobileMenu"
import { SubMenu } from "./Menus/Submenu"

export function Navbar({ desktop = false, color, sub = "", site }) {
  const [subMenu, setSubMenu] = useState(sub)
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
      render={data => {
        if (!data) {
          return null
        }
        return desktop ? (
          <DesktopNavbar
            data={data}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        ) : (
          <MobileMenu
            data={data}
            color={color}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        )
      }}
    ></StaticQuery>
  )
}

const DesktopNavbar = ({ data, subMenu, setSubMenu }) => {
  return (
    <>
      <SwantjeFurtakHeader />
      <div className="desktop-menu">
        {data.films && (
          <SubMenu
            link="films"
            menuPoints={data.films.edges}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        )}
        {data.texts && (
          <SubMenu
            link="texts"
            menuPoints={data.texts.edges}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        )}
        <h3>
          <Link to="/about" activeStyle={{ color: "grey" }}>
            about
          </Link>
        </h3>
      </div>
    </>
  )
}

export const SwantjeFurtakHeader = ({ close, spread = true }) => (
  <h3 className="swantje-furtak-header" onClick={close}>
    <Link to="/">swantje {spread ? <br /> : null}furtak</Link>
  </h3>
)
