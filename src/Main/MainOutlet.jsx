import React from "react";
import "./MainOutlet.scss"
import { Outlet } from "react-router-dom";

const MainOutlet = () => {
  return (
    <div className="main-page">
      <div className="side-nav">
       <h1>sidebar</h1>
      </div>
      <div className="right-data">
        <h1>top nav</h1>
        <Outlet />
      </div>
    </div>
  )
};

export default MainOutlet;
