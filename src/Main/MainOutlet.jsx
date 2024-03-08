import React from "react";
import "./MainOutlet.scss"
import { Outlet } from "react-router-dom";
import TopNav from "./TopNav";
import SideBar from "./SideBar";

const MainOutlet = () => {
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
};

export default MainOutlet;
