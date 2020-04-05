import React from 'react'
import { Input, message, Button } from 'antd'
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';
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

const Unknown = {
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
}

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleSubmit = () => {
    message.loading('登录中...', 1.5);
    this.props.onLoading('loading')
    const { username, password } = this.state
    console.log(username, password)
    const url = 'http://39.107.239.89/user/signin'
    axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    axios.post(url, {
      username,
      password
    }
    ).then(
      (res) => {
        this.props.onLoading('over')
        this.setState({ isLoading: false })
        if (res.data.status === 2) {
          message.info("登录失败：" + res.data.message, 3)
          console.log(res)
        } else if (res.data.status === 1) {
          message.info("登录成功", 1)
          console.log(res)
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
          onChange={e => { this.setState({ username: e.target.value }) }}
        />
        <Input.Password size="large"
          placeholder="密码"
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
        <div style={Unknown}>
          <Link to="#" style={{ color: "white" }}>忘记密码</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;