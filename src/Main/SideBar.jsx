import React from "react"
import "./SideBar.scss"
import SideBarBtn from "../Components/SideBarBtn"
import { useSelector } from "react-redux"

const SideBar = () => {
  const currentUserRole = useSelector((prev) => prev?.auth.currentUser?.data?.user)
  console.log("i am role", currentUserRole)
  // const currentRoles = useSelector((state) => state?.auth?.roles)
  // const adminRole = currentRoles?.includes("ADMIN")
  // const hrRole = currentRoles?.includes("HR")

  return (
    <div className="sidebar-data">
      <h3>
        <i className="fa-regular mr-2 fa-clock"></i>DeskTime
      </h3>
      <div className="side-buttons mt-4">
        <SideBarBtn
          linkPath={``}
          name="My Desktime"
          icon={<i className="fa-solid fa-desktop"></i>}
        />
        <SideBarBtn
          linkPath={`screenshot`}
          name="Screen Shot"
          icon={<i className="fa-regular fa-image"></i>}
        />
        <SideBarBtn
          linkPath={`users`}
          name="Users"
          icon={<i className="fa-solid fa-user"></i>}
        />
        <SideBarBtn
          linkPath={`reports`}
          name="Reports"
          icon={<i className="fa-regular fa-file-word"></i>}
        />
      </div>
    </div>
  )
}

export default SideBar
