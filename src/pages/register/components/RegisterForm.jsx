import React from 'react'
import { Input } from 'antd'
import { Button } from 'antd';
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
    for (let item in this.state.username) {
      if (item === '@') {
        this.setState({ effectiveUser: true })
      } else {
        this.setState({ effectiveUser: false })
      }
    }
  }

  getNickname = (e) => {
    this.setState({ nickname: e.target.value })
    if (e.target.value.length < 2) {
      this.setState({ effectiveNick: false })
    } else {
      this.setState({ effectiveNick: true })
    }
  }

  getPassword = (e) => {
    this.setState({ password: e.target.value })
    if (e.target.value.length < 8) {
      this.setState({ effectivePass: false })
    } else {
      this.setState({ effectivePass: true })
    }
  }
  
  passwordCheck = (e) => {
    if (e.target.value.length < 6) {
      this.setState({ canRegister: false })
    }
    else if (e.target.value.length >= 6) {
      this.setState({ canRegister: true })
    }
    else this.setState({ canRegister: this.state.canRegister })
  }
  
  handleSubmit = () => {
    const { username, password, nickname } = this.state
    console.log(username, password, nickname)
    const url = 'http://39.107.239.89/user/signup'
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    axios.post(url, {
      username,
      password,
      nickname
    }
    ).then((res) => {
      console.log(res)
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

        <span>something</span>

        <Input size="large"
          placeholder="昵称"
          style={loginInputMid}
          prefix={<UserOutlined />}
          onChange={this.getNickname}
        />

        <span>something</span>

        <Input.Password size="large"
          placeholder="密码"
          style={loginInputMid}
          prefix={<UnlockOutlined />}
          onChange={this.getPassword}
        />

        <span>something</span>

        <Input.Password size="large"
          placeholder="确认密码"
          style={loginInputRadiusBon}
          prefix={<UnlockOutlined />}
          onChange={e => { this.setState({ passwordAgain: e.target.value }) }}
        />

        <span>something</span>

        <div style={SubmitTool}>
          <div style={Submit}>
            <Button
              size="large"
              shape="round"
              ghost block
              onClick={this.handleSubmit}>
              注册
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;