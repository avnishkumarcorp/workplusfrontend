import React from "react"
import "./HeroPage.scss"
import SideBarBtn from "./SideBarBtn"

const HeroPage = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="hero-text">
          <h3 className="hero-heading">Welcome to Workplus</h3>
          <p className="hero-para">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
            laborum sunt provident animi voluptatem accusamus, culpa minus quia
            quasi nemo.
          </p>
          <SideBarBtn
            className="w-one-fifty"
            linkPath={`/login`}
            name="Login"
            icon={<i className="fa-solid fa-right-to-bracket"></i>}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroPage
