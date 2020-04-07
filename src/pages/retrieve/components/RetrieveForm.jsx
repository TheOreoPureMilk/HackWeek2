import React from 'react'
import { Input, Button } from 'antd'
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'

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
  boxShadow: "3px 3px 10px #646464",
  marginBottom: '0.2rem',
  marginTop: '0.1rem'
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

const changePassBtnBox = {
  display: 'flex',
  justifyContent: "center",
}

class RetrieveForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      retCode: Number,
      retEmail: '',
      newPassWord: '',
    }
  }
  render() {
    return (
      <div style={retForm}>
        <Input size="large"
          placeholder="找回的邮箱"
          style={RetInputRadiusTop}
          prefix={<MailOutlined />}
          onChange={e => { this.setState({ username: e.target.value }) }}
        />
        <Input size="small"
          style={identCodeInput}
          placeholder="验证码"
        />
        <Button
          size="small"
          shape="round"
          ghost block
          style={getCodeBtn}
        >
          获取验证码
        </Button>
        <Input size="large"
          placeholder="新的密码"
          style={RetInputRadiusTop}
          prefix={<UnlockOutlined />}
          onChange={e => { this.setState({ username: e.target.value }) }}
        />
        <div style={changePassBtnBox}>
          <Button
            size="small"
            shape="round"
            ghost block
            style={getCodeBtn}
          >
            修改密码
          </Button>
        </div>
      </div>
    );
  }
}

export default RetrieveForm;