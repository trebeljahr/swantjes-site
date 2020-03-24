import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"
import Burger from "./Burger"
import Menu from "./Menu"
import FocusLock from "react-focus-lock"
import { Link } from "gatsby"

function MobileMenu({ color, ...props }) {
  const [open, setOpen] = useState(false)
  const node = useRef()
  const menuId = "main-menu"

  useOnClickOutside(node, () => setOpen(false))
  return (
    <>
      <div ref={node}>
        <FocusLock disabled={!open}>
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
        </FocusLock>
      </div>
    </>
  )
}

export default MobileMenu
