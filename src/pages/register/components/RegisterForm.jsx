import React from 'react'
import { Button, Input, message } from 'antd';
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import { UserOutlined } from '@ant-design/icons';
import axios from 'axios'

const myForms = {
  width: "3.20rem",
  height: "1.26rem",
  borderRadius: "0.07rem"
}

const loginInputRadiusTop = {
  height: "60px",
  fontSize: '30px',
  borderRadius: "7px 7px 0 0",
  color: "#C0C0C0",
  boxShadow: "3px 3px 10px #646464"
}

const loginInputMid = {
  height: "60px",
  fontSize: '30px',
  color: "#C0C0C0",
  boxShadow: "3px 3px 10px #646464"
}

const loginInputRadiusBon = {
  height: "60px",
  fontSize: '30px',
  borderRadius: "0 0 7px 7px",
  color: "#C0C0C0",
  boxShadow: "3px 3px 10px #646464"
}

const Submit = {
  width: "136px",
  height: "42px",
}

const SubmitTool = {
  display: "flex",
  justifyContent: "center",
  marginTop: "30px",
}

const unVisibility = {
  visibility: 'hidden',
  color: 'red'
}

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      effectiveUser: true,

      password: '',
      effectivePass: true,
      samePass: true,

      nickname: '',
      effectiveNick: true,
      canRegister: false
    }
  }

  getEmail = (e) => {
    this.setState({ username: e.target.value })
    for (let item = 0; item < this.state.username.length; item++) {
      if (this.state.username[item] === '@') {
        this.setState({ effectiveUser: true })
        document.getElementById("email").style.visibility = "hidden";
        break
      } else {
        this.setState({ effectiveUser: false })
        document.getElementById("email").style.visibility = "visible"
      }
    }
  }

  getNickname = (e) => {
    this.setState({ nickname: e.target.value })
    if (e.target.value.length < 2) {
      this.setState({ effectiveNick: false })
      document.getElementById("nickname").style.visibility = "visible"
    } else {
      this.setState({ effectiveNick: true })
      document.getElementById("nickname").style.visibility = "hidden"
    }
  }

  getPassword = (e) => {
    this.setState({ password: e.target.value })
    if (e.target.value.length < 6) {
      this.setState({ effectivePass: false })
      document.getElementById("password").style.visibility = "visible"
    } else {
      this.setState({ effectivePass: true })
      document.getElementById("password").style.visibility = "hidden"
    }
  }

  passwordCheck = (e) => {
    if (e.target.value === this.state.password) {
      document.getElementById('againPass').style.visibility = "hidden"
      this.setState({ canRegister: true })
    }
    else {
      this.setState({ canRegister: false })
      document.getElementById('againPass').style.visibility = "visible"
    }
  }

  handleSubmit = () => {
    const { username, password, nickname } = this.state
    console.log(username, password, nickname)
    const url = 'http://39.107.239.89/api/user/'
    axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
    axios.post(url + 'signup', JSON.stringify({
      username,
      password,
      nickname
    })
    ).then((res) => {
      if (res.data.status === 0) {
        message.success(res.data.message + '!注册成功')
      }
      else if (res.data.status === 2) {
        message.error(`${res.data.message}`)
      }
    })
  }

  render() {
    return (
      <div style={myForms}>
        <Input size="large"
          placeholder="邮箱"
          style={loginInputRadiusTop}
          prefix={<MailOutlined />}
          onChange={this.getEmail}
        />

        <span id="email" style={unVisibility}>请输入正确的邮箱</span>

        <Input size="large"
          placeholder="昵称"
          style={loginInputMid}
          prefix={<UserOutlined />}
          onChange={this.getNickname}
        />

        <span id="nickname" style={unVisibility}>至少两个字符</span>

        <Input.Password size="large"
          placeholder="密码"
          style={loginInputMid}
          prefix={<UnlockOutlined />}
          onChange={this.getPassword}
        />
        {
          <span id="password" style={unVisibility}>至少六个字符</span>
        }
        <Input.Password size="large"
          placeholder="确认密码"
          style={loginInputRadiusBon}
          prefix={<UnlockOutlined />}
          onChange={this.passwordCheck}
        />

        <span id="againPass" style={unVisibility}>确保密码一致</span>

        <div style={SubmitTool}>
          <div style={Submit}>
            <Button
              size="large"
              shape="round"
              ghost block
              onClick={this.handleSubmit}
              disabled={!this.state.canRegister}
            >
              注册
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;