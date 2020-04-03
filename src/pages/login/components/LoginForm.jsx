import React from 'react'
import { Input } from 'antd'
import { Button } from 'antd';
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

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

function LoginForm() {
  return (
    <div style={myForms}>
      <Input size="large"
        placeholder="邮箱"
        style={loginInputRadiusTop}
        prefix={<MailOutlined />}
      />
      <Input.Password size="large"
        placeholder="密码"
        style={loginInputRadiusBon}
        prefix={<UnlockOutlined />}
      />
      <div style={SubmitTool}>
        <div style={Submit}>
          <Button size="large" shape="round" ghost block>登录</Button>
        </div>
      </div>
      <div style={Unknown}>
        <Link to="#" style={{ color: "white" }}>忘记密码</Link>
      </div>
    </div>

  )
}

export default LoginForm;