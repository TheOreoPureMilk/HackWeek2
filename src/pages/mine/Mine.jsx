import React from 'react';
import './Mine.css'
import LetterCard from './components/LetterCard'
import headImage from './demo-img.png'

function Mine(props) {
  const messageCount = 1
  return (
    <div className='mine'>
      <div className='mine-head'>
        <div className="mine-mes-line">
          <div className='mes-box'>
            <span >{messageCount}</span>
          </div>
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

          <div className='letter-box'>
            <div className='letter-time-box'>
              <div className='letter-time'>17th</div>
            </div>
            <LetterCard />
          </div>

          <div className='letter-box'>
            <div className='letter-time-box'>
              <div className='letter-time'>17th</div>
            </div>
            <LetterCard />
          </div>

        </div>
      </div>
      <div className='footer'></div>
    </div >
  )
}

export default Mine;