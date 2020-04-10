import React, { useEffect, useState } from 'react';
import './Mine.css'
import Footer from '../../components/Footer/Footer'
//import headImage from './demo-img.png'
import LetterItem from './components/LetterItem'
import add from './add.png'
import axios from 'axios';
import { message } from 'antd';
import '../../cookies'
import { getCookie } from '../../cookies';
import { connect } from 'react-redux'
import { setUserInfo } from '../../Redux/actions/index.js'

function MinePage(props) {
  const [userInfo, setUserInfo] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [letterList, setLetterList] = useState([])

  const getMore = () => {
    let token = getCookie('token')
    setPageNumber(pageNumber + 1)
    axios({
      method: 'get',
      url: `http://39.107.239.89/api/letter/preview`,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Authorization': `Bearer ${token}`
      },
      params: { 'index': `${pageNumber + 1}` }
    }).then((res) => {
      console.log(res.data.data)
      setLetterList(res.data.data.records)
    })
  }


  useEffect(() => {
    let token = getCookie('token')
    if (token === '' || token === null) {
      message.error('尚未登录！')
      window.location.href = '../login'
    }
    else {
      //获取个人的信息数据
      axios({
        method: 'get',
        url: 'http://39.107.239.89/api/user/info',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${token}`
        }
      }).then((res) => {
        console.log(res.data.data)
        setUserInfo(res.data.data)
      })
      //到此为止
      //获取信件列表
      axios({
        method: 'get',
        url: `http://39.107.239.89/api/letter/preview`,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Authorization': `Bearer ${token}`
        },
        params: { 'index': `${pageNumber}` }
      }).then((res) => {
        console.log(res.data.data)
        setLetterList(res.data.data.records)
      })

    }
    // eslint-disable-next-line
  }, [])

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
            <img alt='' src={`${userInfo.avatar}`} className='user-image' />
          </div>

          <div className='user-info-show'>
            <span className='user-nick'>{userInfo.nickname}</span>
            <span className='user-sex'>{userInfo.sex}</span>
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
          <div className='get-more' onClick={getMore}>加载更多</div>
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

const mapStateToProps = state => {
  console.log(state)
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (data) => {
      dispatch(setUserInfo(data))
    }
  }
}

let Mine = connect(
  mapStateToProps,
  mapDispatchToProps
)(MinePage)

export default Mine;