import React, { useEffect } from "react"

const Short = ({ setColor }) => {
  useEffect(() => {
    setColor("#1f2839")
  }, [setColor])
  return <div></div>
}

export default Short
