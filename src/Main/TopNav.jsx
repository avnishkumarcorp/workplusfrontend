import React from "react"
import "./TopNav.scss"
import { useSelector } from "react-redux"

const TopNav = () => {
  const user = useSelector((prev) => prev?.auth?.currentUser?.data)

  return (
    <div className="top-navbar">
      <div className="user-profile">
        <div className="user-image">
          <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="user-data">
          <p>{user?.username}</p>
          <h3>{user?.email}</h3>
        </div>
      </div>
    </div>
  )
}

export default TopNav
