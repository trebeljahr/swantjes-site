import React from "react"
import Link from "gatsby-link"

export const SubMenu = ({ link, menuPoints, subMenu, setSubMenu }) => {
  const toggle = () => {
    setSubMenu(old => (old !== link ? link : ""))
  }
  return (
    <>
      <h3 onClick={toggle}>
        <Link
          activeStyle={{ color: "grey" }}
          to={`/${link}`}
          partiallyActive={true}
          onClick={e => e.preventDefault()}
        >
          {link}
        </Link>
      </h3>
      {subMenu === link &&
        menuPoints.map(({ node: { slug, title } }) => (
          <h3 key={slug}>
            <Link
              activeStyle={{
                color: "grey",
                paddingBottom: "2px",
                borderBottom: "1px solid",
              }}
              style={{ fontSize: "0.6em" }}
              to={`/${link}/${slug}`}
            >
              {title}
            </Link>
          </h3>
        ))}
    </>
  )
}
