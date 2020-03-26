import React from "react"
import BounceLoader from "react-spinners/BounceLoader"

export const Loader = ({ loading, color }) => {
  return (
    <div
      className="spinner-container"
      style={{ display: loading ? "flex" : "none" }}
    >
      <BounceLoader size={50} color={color} />
    </div>
  )
}
