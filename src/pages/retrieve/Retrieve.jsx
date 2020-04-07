import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../login/logo.png'
import RetrieveForm from './components/RetrieveForm'

class Retrieve extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="login-body">
        <div className="register">
          <Link to="./login" style={{ float: "right", color: "white" }}>返回登录</Link>
        </div>
        <div className="logo-box">
          <img className="login-logo" src={logo} alt="logo" />
          <div className="head-text">MEET YOUR ANOTHER SELF</div>
        </div>
        <div className="login-form" >
          <RetrieveForm />
        </div>
      </div>
    );
  }
}

export default Retrieve;