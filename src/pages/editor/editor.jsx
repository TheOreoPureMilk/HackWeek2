import React from 'react';
import { getCookie } from '../../cookies'
import { message } from 'antd';
import './Editor.css'
import goBack from './back.png'
import submit from './submit.png'
import axios from 'axios'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newLetter: ``,
      letterType: 1
    }
  }

  changeLetter = (e) => {
    this.setState({
      newLetter: e.target.value
    })
  }

  checkTypeLuck = () => {
    this.setState({
      letterType: 1
    })
  }

  checkTypeComplaint = () => {
    this.setState({
      letterType: 0
    })
  }

  componentDidMount() {
    let token = getCookie('token')
    if (token === '' || token === null) {
      message.error('尚未登录！')
      window.location.href = '../login'
    }
  }

  onSubmit = () => {
    let token = getCookie('token')
    axios({
      method: 'post',
      url: `https://thenebula.cn/api/letter`,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
      data: {
        content: this.state.newLetter,
        letterType: this.state.letterType
      }
    }).then((res) => {
      message.success("提交成功！", res.data.message)
      window.history.back(-1)
    }, (err) => {
      message.error("提交失败！", err)
    })
  }

  render() {
    return (
      <div className='editor-body'>
        <div className='editor-head'
          onClick={() => { window.history.back(-1) }}
        >
          <img src={goBack} alt='' className='back-img' /></div>
        <textarea
          className="my-editor"
          wrap='hard'
          required='required'
          maxLength='100'
          autoFocus='autofocus'
          placeholder='在这里开始编辑吧'
          onChange={this.changeLetter}
        />
        <div className='check-type'>
          <label>
            <input type="checkbox" checked={this.state.letterType}
              onClick={this.checkTypeLuck}
            />
            Luck
          </label>
          <label>
            <input type="checkbox" checked={!this.state.letterType}
              onClick={this.checkTypeComplaint}
            />
            Complaint
          </label>

        </div>

        <div className='submit-body'>
          <div className='submit-box' onClick={this.onSubmit}>
            <img src={submit} alt="" className='submit-img' />
          </div>
        </div>
      </div >
    );
  }
}

export default Editor;