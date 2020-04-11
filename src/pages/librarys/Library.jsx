import React from 'react'
import './Library.css'
import Footer from '../../components/Footer/Footer'
import editor_pen from './editor_pen.png'
import next from './next.png'
import { getCookie } from '../../cookies';
import { message } from 'antd'
import axios from 'axios';

class Library extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabClass: 1,
      checkedLuck: {
        color: 'white',
        backgroundColor: '#b3ddd1'
      },
      checkudSad: {},
      token: String,
      letterObject: {},
      headImage: ''
    }
  }

  onLuckClick = () => {
    this.setState({ tabClass: 1 })
    this.setState({
      checkedLuck: {
        color: 'white',
        backgroundColor: '#b3ddd1'
      }
    })
    this.setState({
      checkedSad: {}
    })
    axios({
      method: 'get',
      url: 'https://thenebula.cn/api/letter/random',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${this.state.token}`
      },
      params: { letterType: 1 }
    }).then((res) => {
      this.setState({
        letterObject: res.data.data,
        headImage: res.data.data.avatarUrl
      })
    })
  }

  onSadClick = () => {
    this.setState({ tabClass: 2 })
    this.setState({
      checkedSad: {
        color: 'white',
        backgroundColor: '#b3ddd1'
      }
    })
    this.setState({
      checkedLuck: {}
    })
    axios({
      method: 'get',
      url: 'https://thenebula.cn/api/letter/random',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${this.state.token}`
      },
      params: { letterType: 2 }
    }).then((res) => {
      this.setState({
        letterObject: res.data.data,
        headImage: res.data.data.avatarUrl
      })
    })
  }

  componentDidMount() {
    let token = getCookie('token')
    if (token === '' || token === null) {
      message.error('尚未登录！')
      window.location.href = '../login'
    }
    else {
      this.setState({ token })
      //设置tab
      if (this.state.tabClass === 1) {
        this.setState({
          checkedLuck: {
            color: 'white',
            backgroundColor: '#b3ddd1'
          }
        })
      } else {
        this.setState({
          checkedSad: {
            color: 'white',
            backgroundColor: '#b3ddd1'
          }
        })
      }
      axios({
        method: 'get',
        url: 'https://thenebula.cn/api/letter/random',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        params: { letterType: this.state.tabClass }
      }).then((res) => {
        this.setState({
          letterObject: res.data.data,
          headImage: res.data.data.avatarUrl
        })
      })
    }
  }
  onNextClick = () => {
    axios({
      method: 'get',
      url: 'https://thenebula.cn/api/letter/random',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${this.state.token}`
      },
      params: { letterType: this.state.tabClass }
    }).then((res) => {
      this.setState({
        letterObject: res.data.data,
        headImage: res.data.data.avatarUrl
      })
    })
  }
  render() {
    return (
      <div className='lib-body'>
        <div className='switch-tab'>
          <div className='to-luck-letter' onClick={this.onLuckClick}>
            <div className='switch-box' style={this.state.checkedLuck}>
              <div>Luck</div>
            </div>
          </div>
          <div className='to-sad-letter' onClick={this.onSadClick}>
            <div className='switch-box' style={this.state.checkedSad}>
              <div>Complaint</div>
            </div>
          </div>
        </div>
        <div className='letter-content'>
          <div className='letter-content-head'>
            <div className='user-head-img-content'>
              <img src={this.state.headImage} alt='头像' className='user-head-img' />
            </div>
            <div className='user-name-content'>
              <div className='lib-user-name'>{this.state.letterObject.nickname}</div>
            </div>
            <div className='next-button' onClick={this.onNextClick}>
              <img src={next} alt='下一个' className="next-img" />
            </div>
            <div className='letter-text'>
              {this.state.letterObject.content}
            </div>
            <div className='function-tool-box'>
              <div></div>
            </div>
          </div>
        </div>
        <div className='editor-pen-content'>
          <img src={editor_pen} alt='pen'
            className='editor-pen-img'
            onClick={() => { window.location.href = './editor' }}
          />
        </div>
        <div className='footer-body'>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Library;
