import React from "react"
import "./SideBarBtn.scss"
import { Link } from "react-router-dom"

const SideBarBtn = ({ className = "", linkPath = '', name = "", icon="", props }) => {
  return (
    <Link to={linkPath} className={`side-btn ${className}`} {...props}>
     <span className="mr-2">{icon && icon}</span> {name}
    </Link>
  )
}

export default SideBarBtn
