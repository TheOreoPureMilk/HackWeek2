import React from 'react'
import { Input, Button, message } from 'antd'
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import Axios from 'axios'

const retForm = {
  width: "3.20rem",
  height: "1.26rem",
  borderRadius: "0.07rem",
}

const RetInputRadiusTop = {
  height: "50px",
  fontSize: '25px',
  borderRadius: "7px 7px",
  color: "#C0C0C0",
  boxShadow: "3px 3px 10px #646464"
}

const identCodeInput = {
  height: '40px',
  fontSize: '16px',
  width: '160px',
  borderRadius: "7px 7px",
  color: "#C0C0C0",
  boxShadow: "1px 1px 5px #646464",
}

const getCodeBtn = {
  width: "100px",
  height: "40px",
  marginLeft: '0.1rem'
}

const SubmitBtn = {
  width: "100px",
  height: "40px",
}

const changePassBtnBox = {
  display: 'flex',
  justifyContent: "center",
}

const unVisibility = {
  width: '100%',
  visibility: 'hidden',
  color: 'red'
}

class RetrieveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retCode: '',
      effectiveCode: false,
      retEmail: '',
      effectiveEmail: false,
      newPassWord: '',
      effectivePass: false
    }
  }

  emailCheck = (e) => {
    this.setState({ retEmail: e.target.value })
    for (let item = 0; item < this.state.retEmail.length; item++) {
      if (this.state.retEmail[item] === '@') {
        this.setState({ effectiveEmail: true })
        document.getElementById("retemail").style.visibility = "hidden";
        break
      } else {
        this.setState({ effectiveEmail: false })
        document.getElementById("retemail").style.visibility = "visible"
      }
    }
  }

  codeCheck = (e) => {
    this.setState({ retCode: e.target.value })
    if (e.target.value.length === 6) {
      this.setState({ effectiveCode: true })
      document.getElementById("passcode").style.visibility = 'hidden'
    } else {
      this.setState({ effectiveCode: false })
      document.getElementById("passcode").style.visibility = 'visible'
    }
  }

  passwordCheck = (e) => {
    this.setState({ newPassWord: e.target.value })
    if (e.target.value.length < 6) {
      this.setState({ effectivePass: false })
      document.getElementById('newpassword').style.visibility = 'visible'
    } else {
      this.setState({ effectivePass: true })
      document.getElementById('newpassword').style.visibility = 'hidden'
    }
  }

  getCode = () => {
    Axios({
      method: 'get',
      url: 'https://thenebula.cn/api/user/forget',
      params: { username: this.state.retEmail }
    }).then((res) => {
      if (res.data.status === 0)
        message.success(res.data.message + '获取成功', 1.5)
      else
        message.error(res.data.message + '获取失败', 1.5)
    })
  }

  onSubmit = () => {
    Axios({
      method: 'post',
      url: 'https://thenebula.cn/api/user/forget',
      data: {
        username: this.state.retEmail,
        newPassword: this.state.newPassWord,
        confirmCode: this.state.retCode
      }
    }).then((res) => {
      if (res.data.status === 0) {
        message.success(res.data.message + '修改成功', 1.5)
        setTimeout(() => window.location.href = '../login', 1500)
      } else { message.error(res.data.message, 3) }
    })
  }

  render() {
    return (
      <div style={retForm}>
        <Input size="large"
          placeholder="找回的邮箱"
          style={RetInputRadiusTop}
          prefix={<MailOutlined />}
          onChange={this.emailCheck}
        />
        <div id="retemail" style={unVisibility}>请输入正确的邮箱</div>
        <Input size="small"
          style={identCodeInput}
          placeholder="验证码"
          onChange={this.codeCheck}
        />
        <Button
          size="small"
          shape="round"
          ghost block
          style={getCodeBtn}
          onClick={this.getCode}
        >
          获取验证码
        </Button>
        <div id='passcode' style={unVisibility}>请输入6位验证码</div>
        <Input.Password size="large"
          placeholder="新的密码"
          style={RetInputRadiusTop}
          prefix={<UnlockOutlined />}
          onChange={this.passwordCheck}
        />
        <div id='newpassword' style={unVisibility}>请输入至少六位的密码</div>
        <div style={changePassBtnBox}>
          <Button
            size="small"
            shape="round"
            ghost block
            style={SubmitBtn}
            disabled={!(this.state.effectiveCode &&
              this.state.effectiveEmail &&
              this.state.effectivePass)}
            onClick={this.onSubmit}
          >
            修改密码
          </Button>
        </div>
      </div>
    );
  }
}

export default RetrieveForm;