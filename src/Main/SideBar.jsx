import React from "react"
import "./SideBar.scss"
import SideBarBtn from "../Components/SideBarBtn"
import { useDispatch, useSelector } from "react-redux"
import CmBtn from "../Components/CmBtn"
import { logoutFun } from "../Toolkit/AuthSlice"
import { useNavigate } from "react-router-dom"

const SideBar = () => {
  const currentUserRole = useSelector(
    (prev) => prev?.auth.currentUser?.data?.roles
  )
  const adminRole = currentUserRole?.includes("ADMIN")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    console.log("user Logout Sucessfully")
    if (window.confirm("Are you sure for Logout?") == true) {
      const key = localStorage.getItem("persist:root")
      dispatch(logoutFun())
      const token = localStorage.removeItem(key)
      navigate("/login")
    }
  }

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
        {adminRole ? (
          <>
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
          </>
        ) : (
          ""
        )}
        <CmBtn className="side-btn" onClick={logoutUser} data={`Logout`} />
      </div>
    </div>
  )
}

export default SideBar
