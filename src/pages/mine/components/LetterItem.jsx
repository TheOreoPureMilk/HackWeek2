import React from 'react';
import LetterCard from './LetterCard'
import './LetterItem.css'

function LetterItem(props) {
  return (
    <div className='letter-box'>
      <div className='letter-time-box'>
        <div className='letter-time'>17th</div>
      </div>
      <LetterCard />
    </div>
  )
}

export default LetterItem