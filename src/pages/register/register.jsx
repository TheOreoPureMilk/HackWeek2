import React from 'react'
import logo from '../login/logo.png'
import { Link } from 'react-router-dom';

function Register(props) {
  return (
    <div className="login-body">
      <div className="register">
        <Link to="#" style={{ float: "right", color: "white" }}>注册</Link>
      </div>
      <div className="logo-box">
        <img className="login-logo" src={logo} alt="logo" />
        <div className="head-text">MEET YOUR ANOTHER SELF</div>
      </div>
      <div className="login-form">

      </div>
    </div>
  )
}
export default Register