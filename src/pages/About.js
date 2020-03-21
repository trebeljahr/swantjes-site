import React, { useEffect } from "react"

const About = ({ setColor }) => {
  useEffect(() => {
    setColor("#4f2223")
  }, [setColor])
  return <div></div>
}

export default About
