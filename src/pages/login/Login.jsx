import React from 'react'
import LoginForm from './components/LoginForm'
import './Login.css'
import { Spin } from 'antd'
import logo from './logo.png'
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  onLoading = (mes) => {
    if (mes === 'loading') {
      this.setState({ isLoading: true })
    } else {
      this.setState({ isLoading: false })
    }
  }
  render() {
    return (
      <Spin tip="登录中..." spinning={this.state.isLoading} wrapperClassName="login-body" size="large">
        <div>
          <div className="register">
            <Link to="./register" style={{ float: "right", color: "white" }}>注册</Link>
          </div>
          <div className="logo-box">
            <img className="login-logo" src={logo} alt="logo" />
            <div className="head-text">MEET YOUR ANOTHER SELF</div>
          </div>
          <div className="login-form" >
            <LoginForm onLoading={this.onLoading} />
          </div>
        </div>
      </Spin>
    );
  }
}

export default Login;
