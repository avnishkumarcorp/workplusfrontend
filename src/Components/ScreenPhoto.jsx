import React from "react"
import "./ScreenPhoto.scss"

const ScreenPhoto = ({ index, image, time, date }) => {
  return (
    <div key={index}>
      <div className="image-box">
        <img src={image} />
      </div>
      <div className="sm-date">
        <p className="mb-0 py-0 px-2">
          <b>Date: </b> {date}{" "}
        </p>
        <p className="mb-0 py-0 px-2">
          {" "}
          <b>Time: </b>
          {time}{" "}
        </p>
      </div>
    </div>
  )
}

export default ScreenPhoto
