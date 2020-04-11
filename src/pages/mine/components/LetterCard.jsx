import React from 'react'
import './LetterCard.css'

function LetterCard(props) {
  return (
    <div className='card-body'>
      <div>
        <div className='out-border'>
          <div className='inner-border'>
            <div className='color-in'></div>
          </div>
        </div>
        <div className='text-content-box'>
          <div className='text-content'>
            {props.data}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LetterCard