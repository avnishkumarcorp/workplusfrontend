import React from "react"
import "./SideBar.scss"
import { NavLink } from "react-router-dom"
import SideBarBtn from "../Components/SideBarBtn"

const SideBar = () => {
  return (
    <div className="sidebar-data">
      <h3><i className="fa-regular mr-2 fa-clock"></i>DeskTime</h3>
      <div className="side-buttons">
      <SideBarBtn linkPath={``} name="My Desktime" icon={<i className="fa-solid fa-desktop"></i>} />
      <SideBarBtn linkPath={`screenshot`} name="Screen Shot" icon={<i className="fa-regular fa-image"></i>} />
      <SideBarBtn linkPath={`users`} name="Users" icon={<i class="fa-solid fa-user"></i>} />

      </div>
    </div>
  )
}

export default SideBar
