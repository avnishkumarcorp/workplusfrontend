import React from "react"
import "./ScreenPhoto.scss"

const ScreenPhoto = ({ index, image, time }) => {
  return (
    <div key={index}>
      <div className="image-box">
        <img src={image} />
      </div>
      <div className="sm-date">
        <p className="mb-0 text-center py-1">{time}</p>
      </div>
    </div>
  )
}

export default ScreenPhoto
