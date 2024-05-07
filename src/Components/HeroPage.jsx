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
          Time is a precious resource, a currency that we spend each day. How we invest this currency defines the quality of our lives. In today's digital age, where screens beckon with endless distractions, it's easy to lose track of time's value. Yet, every moment is an opportunity to create, learn, and connect. Let us use technology not as a means to escape time, but as a tool to enhance our productivity and well-being
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
