import React, { useState } from "react"
import "./ScreenPhoto.scss"
import { Link } from "react-router-dom"

const ScreenPhoto = ({ index, image, time, date }) => {
  const [imgClick, setImgClick] = useState(false)
  const [icon, setIcon] = useState(true)

  const handleChange = () => {
    setImgClick((prev) => !(prev))
    setIcon((prev) => !(prev))
  }
  
  const closeImage = () => {
    setImgClick(false)
    setIcon(false)

    console.log("i am click ", imgClick, icon);
  }

  return (
    <div key={index}>
      <div
        onClick={handleChange}
        className={`image-box ${imgClick ? "image-box-click" : ""}`}
      >
        {icon ? <i onClick={closeImage}  class="fa-solid  my-circle-plus fa-circle-plus"></i> : ""}
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
          <Link className="cm-btn-one" to={image}>
            Download
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ScreenPhoto
