import React, { useEffect } from 'react';
import './Mine.css'
import Footer from '../../components/Footer/Footer'
import headImage from './demo-img.png'
import LetterItem from './components/LetterItem'
import add from './add.png'
import axios from 'axios';
import { message } from 'antd';
import '../../cookies'
import { getCookie } from '../../cookies';

function Mine(props) {

  useEffect(() => {
    let token = getCookie('token')
    if (token === '' || token === null) {
      message.error('尚未登录！')
      window.location.href = '../login'
    }
    else {
      axios({
        method: 'get',
        url: 'http://39.107.239.89/api/user/info',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${token}`
        }
      })
    }
  })

  return (
    <div className='mine'>
      <div className='mine-head'>
        <div className="mine-mes-line">
          <div className='mes-box'></div>
        </div>
        <div className="mine-head-text">
          我的
        </div>
        <div className="user-info">
          <div className='image-box'>
            <img alt='' src={headImage} className='user-image' />
          </div>

          <div className='user-info-show'>
            <span className='user-nick'>爱吃草的羊</span>
            <span className='user-sex'>♂</span>
          </div>
          <button className='change-bg-btn'>
            <span>
              更换背景
            </span>
          </button>
        </div>
      </div >
      <div className='mine-body'>
        <div className='mine-body-tab'>
          <div className='luck-item'>
            <div className='luck-item-text'>幸运信</div>
          </div>
          <div className='sad-item'>
            <div className='sad-item-text'>解忧信</div>
          </div>
        </div>
        <div className='mine-letter-body'>
          <div className='mine-letter-mounth'>4月</div>
          <LetterItem />
          <LetterItem />
          <LetterItem />
          <LetterItem />
        </div>
      </div>
      <div className='footer-body'>
        <Footer />
      </div>
      <div className='mine-add'>
        <img src={add} alt="新建" className='mine-add-img' />
      </div>
    </div>
  )
}

export default Mine;