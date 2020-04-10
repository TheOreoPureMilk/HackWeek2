import React from 'react';
import LetterCard from './LetterCard'
import './LetterItem.css'

function LetterItem(props) {
  return (
    <div className='letter-box'>
      <div className='letter-time-box'>
        <div className='letter-time'>
          {
            /*props.data.createTime[5] +
            props.data.createTime[6] +
            props.data.createTime[7] +*/
            props.data.createTime[8] +
            props.data.createTime[9]+'th'
          }
        </div>
      </div>
      <LetterCard data={props.data.preview} />
    </div>
  )
}

export default LetterItem