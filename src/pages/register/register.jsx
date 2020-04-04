import React from 'react'
import logo from '../login/logo.png'
import { Link } from 'react-router-dom';
import RegisterForm from './components/RegisterForm'

function Register(props) {
  return (
    <div className="login-body">
      <div className="register">
        <Link to="./login" style={{ float: "right", color: "white" }}>返回登录</Link>
      </div>
      <div className="logo-box">
        <img className="login-logo" src={logo} alt="logo" />
        <div className="head-text">MEET YOUR ANOTHER SELF</div>
      </div>
      <div className="login-form">
        <RegisterForm />
      </div>
    </div>
  )
}
export default Register