import React, { useEffect } from "react"

const She = ({ setColor }) => {
  useEffect(() => {
    setColor("#1f2839")
  }, [setColor])
  return <div></div>
}

export default She