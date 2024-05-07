import React from "react"
import "./Navbar.scss"
import SideBarBtn from "./SideBarBtn"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="desktime-logo"><i className="fa-solid mr-1 fa-clock"></i>Workplus</div>
      <SideBarBtn
      className="w-one-fifty"
              linkPath={ `/login`}
              name="Login"
              icon={<i className="fa-solid fa-right-to-bracket"></i>}
            />
    </div>
  )
}

export default Navbar
