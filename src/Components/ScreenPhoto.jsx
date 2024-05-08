import React from "react"
import "./ScreenPhoto.scss"
import { Link } from "react-router-dom"

const ScreenPhoto = ({ index, image, time, date }) => {
  return (
    <div key={index}>
      <div className="image-box">
        <img src={image} />
      </div>
      <div className="sm-date">
        <div>
          <p className="mb-0 py-0 px-2">
            <b>Date: </b> {date}{" "}
          </p>
          <p className="mb-0 py-0 px-2">
            {" "}
            <b>Time: </b>
            {time}{" "}
          </p>
        </div>
        <div>
          <Link className="cm-btn-one" to={image}>Download</Link>
        </div>
      </div>
    </div>
  )
}

export default ScreenPhoto
