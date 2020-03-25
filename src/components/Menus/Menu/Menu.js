import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import { SubMenu } from "../Submenu"
import { Link } from "gatsby"
import { SwantjeFurtakHeader } from "../../navbar"

const Menu = ({
  open,
  data,
  subMenu,
  setSubMenu,
  setOpen,
  color,
  menuId,
  ...props
}) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1
  const close = () => {
    setOpen(false)
  }
  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <div className="mobile-menu" tabIndex={tabIndex}>
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
        <h3 onClick={close}>
          <Link
            to="/about"
            activeStyle={{ color: subMenu === "" ? "grey" : "inherit" }}
          >
            about
          </Link>
        </h3>
        <hr className="mobile-menu-divider-line" />
        <SwantjeFurtakHeader close={close} spread={false} />
      </div>
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
