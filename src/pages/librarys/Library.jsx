import React from 'react';
import './Library.css'
import Footer from '../../components/Footer/Footer'
import editor_pen from './editor_pen.png'
import test_head_img from './test_head_img.png'
import next from './next.png'


function Library(props) {
  return (
    <div className='lib-body'>
      <div className='switch-tab'>
        <div className='to-luck-letter'>
          <div>幸运信</div>
        </div>
        <div className='to-sad-letter'>
          <div>解忧信</div>
        </div>
      </div>
      <div className='letter-content'>
        <div className='letter-content-head'>
          <div className='user-head-img-content'>
            <img src={test_head_img} alt='头像' className='user-head-img' />
          </div>
          <div className='user-name-content'>
            <div className='lib-user-name'>爱吃草的羊</div>
          </div>
          <div className='next-button'>
            <img src={next} alt='下一个' className="next-img" />
          </div>
        </div>
      </div>
      <div className='editor-pen-content'>
        <img src={editor_pen} alt='pen' className='editor-pen-img' />
      </div>
      <div className='footer-body'>
        <Footer />
      </div>
    </div>

  )
}

export default Library