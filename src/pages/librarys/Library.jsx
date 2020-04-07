import React from 'react';
import './Library.css'
import Footer from '../../components/Footer/Footer'

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

      </div>
      <div className='footer-body'>
        <Footer />
      </div>
    </div>

  )
}

export default Library