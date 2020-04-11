import React from 'react'
import LoginForm from './components/LoginForm'
import './Login.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-body">
      <div className="register">
        <Link to="./register" style={{ float: "right", color: "white" }}>注册</Link>
      </div>
      <div className="logo-box">
        <img className="login-logo" src={logo} alt="logo" />
        <div className="head-text">MEET YOUR ANOTHER SELF</div>
      </div>
      <div className="login-form" >
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
