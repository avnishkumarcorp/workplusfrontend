import React from "react"
import "./SideBar.scss"
import { NavLink } from "react-router-dom"
import SideBarBtn from "../Components/SideBarBtn"

const SideBar = () => {
  return (
    <div className="sidebar-data">
      <h3><i class="fa-regular mr-2 fa-clock"></i>DeskTime</h3>
      <div className="side-buttons">
      <SideBarBtn name="My Desktime" icon={<i class="fa-solid fa-desktop"></i>} />
      <SideBarBtn name="Screen Shot" icon={<i class="fa-regular fa-image"></i>} />
      </div>
    </div>
  )
}

export default SideBar
