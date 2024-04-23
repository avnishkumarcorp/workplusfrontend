import React, { useState } from "react"
import "./LoginPage.scss"
import InputComponent from "./InputComponent"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { authDataFun } from "../Toolkit/AuthSlice"
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  })

  const {currentUser, loading, error} = useSelector((prev) => prev?.auth)
  console.warn(currentUser);
  const navigate = useNavigate()

  const dispatch = useDispatch();

  const getUserdata = (e) => {
    setUserLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const loginUser = async () => {
    const userApiRes = await dispatch(authDataFun(userLogin));
    if(userApiRes.payload.status === 200){
      navigate('/desktime')
    }

    // const userApiRes = await postQuery(`${process.env.REACT_APP_BASE_URL}login`, userLogin);
  }


  return (
    <div className="login-page">
      <div className="ractangle"></div>
      <div className="ractangle-two"></div>
      <div className="login-form">
        <h2 className="main-heading">Login</h2>
        <div className="py-4">
          <InputComponent
            icon={<i className="fa-regular side-icon fa-envelope"></i>}
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={getUserdata}
            // onChange={getUserdata()}
          />
          <InputComponent
            icon={<i className="fa-solid side-icon fa-lock"></i>}
            type="password"
            placeholder="Enter Your password"
            name="password"
            onChange={getUserdata}
          />
        </div>
        <button onClick={() => loginUser()} className="login-btn">Login</button>
        <Link className="forget-pass">Forget Password ?</Link>
        <p className="account-not">
          Don't have an Account{" "}
          <Link className="going-link" to="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
