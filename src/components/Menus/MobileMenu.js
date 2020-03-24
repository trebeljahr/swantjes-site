import React, { useState, useRef } from "react"
import { useOnClickOutside } from "./hooks"
import Burger from "./Burger"
import Menu from "./Menu"
import FocusLock from "react-focus-lock"
import { SwantjeFurtakHeader } from "../navbar"
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
              padding: "10px 0px 20px",
              width: "100vw",
              paddingTop: "20px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              background: color,
            }}
          >
            <Burger
              open={open}
              setOpen={setOpen}
              aria-controls={menuId}
              color={color}
            />
            <h2 style={{ marginRight: "20px" }}>
              <Link to="/">swantje furtak</Link>
            </h2>
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
