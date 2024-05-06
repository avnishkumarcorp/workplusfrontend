import React from "react"
import "./Navbar.scss"
import SideBarBtn from "./SideBarBtn"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="desktime-logo"><i class="fa-solid mr-1 fa-clock"></i>Desktime</div>
      <SideBarBtn
      className="w-one-fifty"
              linkPath={ `/login`}
              name="Login"
              icon={<i class="fa-solid fa-right-to-bracket"></i>}
            />
    </div>
  )
}

export default Navbar
