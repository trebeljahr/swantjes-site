import React, { useState } from "react"
import Burger from "./Burger"
import Menu from "./Menu"
import { Link } from "gatsby"

function MobileMenu({ color, ...props }) {
  const [open, setOpen] = useState(false)
  const menuId = "main-menu"

  return (
    <>
      <div
        style={{
          padding: "20px 20px 0px 0px",
          width: "100vw",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          background: color,
        }}
      >
        <Burger
          open={open}
          setOpen={setOpen}
          aria-controls={menuId}
          color={color}
        />
        <Link style={{ fontSize: "20px", letterSpacing: "5px" }} to="/">
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
