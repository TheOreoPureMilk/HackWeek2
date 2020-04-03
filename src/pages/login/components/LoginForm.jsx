import React from 'react'
import { Input } from 'antd'
import { MailOutlined, UnlockOutlined } from '@ant-design/icons'

const myForms = {
  width: "3.20rem",
  height: "1.26rem"
}

const loginInputRadiusTop = {
  height: "0.62rem",
  fontSize: '0.3rem',
  borderRadius: "0.07rem 0.07rem 0 0",
  color: "#C0C0C0"
}

const loginInputRadiusBon = {
  height: "0.62rem",
  fontSize: '0.3rem',
  borderRadius: "0 0 0.07rem 0.07rem",
  color: "#C0C0C0"
}

function LoginForm() {
  return (
    <div style={myForms}>
      <Input size="large"
        placeholder="邮箱"
        style={loginInputRadiusTop}
        prefix={
          <MailOutlined />}
      />
      <Input size="large"
        placeholder="密码"
        style={loginInputRadiusBon}
        prefix={<UnlockOutlined />}
      />
    </div>
  )
}

export default LoginForm;