import React from "react"
import "./ScreenPhoto.scss"

const ScreenPhoto = ({ uni, image }) => {
  return (
    <div key={uni} className="image-box">
      <img src={image} />
    </div>
  )
}

export default ScreenPhoto
