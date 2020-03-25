import React from "react"
import BounceLoader from "react-spinners/BounceLoader"

export const Loader = ({ loading, color }) => {
  return loading ? (
    <div className="spinner-container">
      <BounceLoader size={50} color={color} />
    </div>
  ) : null
}
