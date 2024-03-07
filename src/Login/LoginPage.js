import React from "react"
import "./LoginPage.scss"
import InputComponent from "./InputComponent"
import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="left-circle">
        <div className="small-circle"></div>
      </div>
      <div className="right-circle">
        <div className="small-circle"></div>
      </div>
      <div className="ractangle"></div>
      <div className="ractangle-two"></div>
      <div className="login-form">
        <h2 className="main-heading">Login</h2>
        <div className="py-4">
          <InputComponent
            icon={<i class="fa-regular side-icon fa-envelope"></i>}
            type="email"
            placeholder="Enter Your Email"
          />
          <InputComponent
            icon={<i class="fa-solid side-icon fa-lock"></i>}
            type="password"
            placeholder="Enter Your password"
          />
        </div>
        <button className="login-btn">Login</button>
        <Link className="forget-pass">Forget Password ?</Link>
        <p className="account-not">Don't have an Account <Link className="going-link" to="/signup">Sign up</Link></p>
        
      </div>
    </div>
  )
}

export default LoginPage
