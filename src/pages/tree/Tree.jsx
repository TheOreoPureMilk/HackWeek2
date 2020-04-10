import React from 'react'
import WeekList from './components/WeekList'
import "./Tree.css"
import fristTree from './tree_bg_small.png'
import secondTree from './tree_bg_mid.png'
import thirdTree from './tree_bg_big.png'
import Footer from '../../components/Footer/Footer'
import ImgList from './components/ImgList'
import { message } from 'antd'

const code = 1

function Tree(props) {
  let bgUrl
  switch (code) {
    case 1:
      bgUrl = fristTree
      break
    case 2:
      bgUrl = secondTree
      break
    case 3:
      bgUrl = thirdTree
      break
    default:
      bgUrl = fristTree
      break
  }

  const bg_style = {
    backgroundImage: `url(${bgUrl})`
  }

  const daySign = () => {
    message.success('签到成功！(假的，功能尚未完善）')
  }

  return (
    <div className='tree-body' style={bg_style}>
      <div className='week-list'>
        <WeekList />
      </div>
      <div className='emj-list'>
        <ImgList />
      </div>
      <div className='tree-box'></div>
      <div className='day-sign' onClick={daySign}></div>
      <div className='footer-body'>
        <Footer />
      </div>
    </div>
  )
}

export default Tree