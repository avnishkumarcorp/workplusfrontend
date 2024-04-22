import React, { useEffect } from "react"
import "./MainOutlet.scss"
import { Outlet } from "react-router-dom"
import TopNav from "./TopNav"
import SideBar from "./SideBar"
import { allRoleFun } from "../Toolkit/RoleSlice"
import { useDispatch } from "react-redux"

const MainOutlet = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(allRoleFun())
  }, [dispatch])

  return (
    <div className="main-page">
      <div className="side-nav">
        <SideBar />
      </div>
      <div className="right-data">
        <TopNav />
        <Outlet />
      </div>
    </div>
  )
}

export default MainOutlet
