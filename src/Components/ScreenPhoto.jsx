import React from "react"
import "./ScreenPhoto.scss"

const ScreenPhoto = ({ index, image }) => {
  return (
    <div key={index} className="image-box">
      <img src={image} />
    </div>
  )
}

export default ScreenPhoto
