import React, { useState } from "react"
import Link from "gatsby-link"
import { StaticQuery, graphql } from "gatsby"

export function Navbar({ desktop = false, color, sub = "" }) {
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
      render={data =>
        desktop ? (
          <DesktopNavbar
            data={data}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        ) : (
          <MobileNavbar
            data={data}
            color={color}
            subMenu={subMenu}
            setSubMenu={setSubMenu}
          />
        )
      }
    ></StaticQuery>
  )
}

const DesktopNavbar = ({ data, subMenu, setSubMenu }) => {
  return (
    <>
      <SwantjeFurtakHeader />
      <div className="navbar-desktop">
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
        <h2>
          <Link to="/about" activeStyle={{ color: "grey" }}>
            about
          </Link>
        </h2>
      </div>
    </>
  )
}

const MobileNavbar = ({ data, subMenu, setSubMenu }) => {
  const [menu, setMenu] = useState(false)
  const toggle = () => {
    setMenu(oldMenu => !oldMenu)
  }
  const menuOff = () => {
    setMenu(false)
  }
  return menu ? (
    <div className="navbar-mobile">
      <MenuHeader toggle={toggle} />
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
      <h2 onClick={menuOff}>
        <Link
          to="/about"
          activeStyle={{ color: subMenu === "" ? "grey" : "inherit" }}
        >
          about
        </Link>
      </h2>
      <hr className="rounded" style={{ width: "25%", marginBottom: "30px" }} />
      <SwantjeFurtakHeader menuOff={menuOff} />
    </div>
  ) : (
    <div className="mobile-menu-collapsed">
      <MenuHeader toggle={toggle} />
      <hr className="rounded" style={{ width: "60%" }} />
      <div style={{ margin: "30px" }}>
        <SwantjeFurtakHeader menuOff={menuOff} />
      </div>
    </div>
  )
}

const MenuHeader = ({ toggle }) => (
  <h1 className="menu-header" onClick={toggle}>
    menu
  </h1>
)

const SwantjeFurtakHeader = ({ menuOff }) => (
  <h1 className="swantje-furtak-header" onClick={menuOff}>
    <Link to="/">swantje furtak</Link>
  </h1>
)

const SubMenu = ({ link, menuPoints, subMenu, setSubMenu }) => {
  const toggle = () => {
    setSubMenu(old => (old !== link ? link : ""))
  }
  return (
    <>
      <h2 onClick={toggle}>
        <Link
          activeStyle={{ color: "grey" }}
          to={`/${link}`}
          partiallyActive={true}
          onClick={e => e.preventDefault()}
        >
          {link}
        </Link>
      </h2>
      {subMenu === link &&
        menuPoints.map(({ node: { slug, title } }) => (
          <h2 key={slug} style={{ fontSize: "0.8em", margin: "10px" }}>
            <Link
              activeStyle={{
                color: "grey",
                paddingBottom: "2px",
                borderBottom: "1px solid",
              }}
              to={`/${link}/${slug}`}
            >
              {title}
            </Link>
          </h2>
        ))}
      <b style={{ marginBottom: "50px" }} />
    </>
  )
}
