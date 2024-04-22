import React from "react"
import "./ScreenPhoto.scss"

const ScreenPhoto = ({ key, image }) => {
  return (
    <div key={key} className="image-box">
      <img src={image} />
    </div>
  )
}

export default ScreenPhoto
