import React from "react"
import { Outlet } from "react-router-dom"
import CmGap from "../Components/CmGap"

const AllReportsUser = () => (
  <CmGap>
    <Outlet></Outlet>
  </CmGap>
)

export default AllReportsUser
