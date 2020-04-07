import React from 'react'
import './Footer.css'
import tree from './tree.png'
import lib from './lib.png'
import mine from './mine.png'


function Footer() {
  return (
    <div className='footer'>
      <div className='swicth-to-tree'>
        <div className='tree-content'>
          <div className='tree-img'>
            <img src={tree} alt="" />
          </div>
          <div> 心情树</div>
        </div>
      </div>
      <div className='swicth-to-lib'>
        <div className='lib-content'>
          <div className='lib-img'>
            <img src={lib} alt="" />
          </div>
          <div>故事馆</div>
        </div>
      </div>
      <div className='swicth-to-mine'>
        <div className='mine-content'>
          <div className='mine-img'>
            <img src={mine} alt="" />
          </div>
          <p> 我的</p>
        </div>
      </div>
    </div>
  )
}

export default Footer