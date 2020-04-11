import React from 'react'
import './WeekList.css'

function WeekList(props) {
  return (
    <div className='week-list-body'>
      <div className='week-box'>
        <div className='week-text'>周一</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周二</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周三</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周四</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周五</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周六</div>
      </div>
      <div className='week-box'>
        <div className='week-text'>周日</div>
      </div>
    </div>
  )
}

export default WeekList