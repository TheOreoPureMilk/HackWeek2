import React from 'react'
import './WeekList.css'

function WeekList(props) {
  return (
    <div className='week-list-body'>
      <div className='monday-box'>
        <div className='monday-text'>周一</div>
      </div>
      <div className='tuesday-box'>
        <div className='tuesday-text'>周二</div>
      </div>
      <div className='wednesday-box'>
        <div className='wednesday-text'>周三</div>
      </div>
      <div className='thursday-box'>
        <div className='thursday-text'>周四</div>
      </div>
      <div className='friday-box'>
        <div className='friday-text'>周五</div>
      </div>
      <div className='saturday-box'>
        <div className='saturday-text'>周六</div>
      </div>
      <div className='sunday-box'>
        <div className='sunday-text'>周日</div>
      </div>
    </div>
  )
}

export default WeekList