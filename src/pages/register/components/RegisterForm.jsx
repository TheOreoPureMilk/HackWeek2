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
      password: '',
      nickname: ''
    }
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
          onChange={e => { this.setState({ username: e.target.value }) }}
        />
        <Input size="large"
          placeholder="用户名"
          style={loginInputRadiusTop}
          prefix={<UserOutlined />}
          onChange={e => { this.setState({ nickname: e.target.value }) }}
        />
        <Input.Password size="large"
          placeholder="密码"
          style={loginInputRadiusBon}
          prefix={<UnlockOutlined />}
          onChange={e => { this.setState({ password: e.target.value }) }}
        />
        <Input.Password size="large"
          placeholder="确认密码"
          style={loginInputRadiusBon}
          prefix={<UnlockOutlined />}
          onChange={e => { this.setState({ password: e.target.value }) }}
        />
        <div style={SubmitTool}>
          <div style={Submit}>
            <Button
              size="large"
              shape="round"
              ghost block
              onClick={this.handleSubmit}>
              登录</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;