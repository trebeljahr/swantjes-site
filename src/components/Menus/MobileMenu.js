import React, { useState } from "react"
import Burger from "./Burger"
import Menu from "./Menu"
import { Link } from "gatsby"

function MobileMenu({ color, ...props }) {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <>
      <div className="mobile-navbar">
        <Burger
          open={open}
          setOpen={setOpen}
          aria-controls={menuId}
          color={color}
        />
        <Link className="mobile-swantje-header" to="/">
          swantje furtak
        </Link>
      </div>
      <Menu
        open={open}
        setOpen={setOpen}
        id={menuId}
        color={color}
        {...props}
      />
    </>
  )
}

export default MobileMenu
