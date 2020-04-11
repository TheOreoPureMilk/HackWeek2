import React from 'react'
import './Footer.css'
import tree from './tree.png'
import lib from './lib.png'
import mine from './mine.png'
import lib_bg from './lib_bg.png'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

let toMine = () => {
  history.push('/');
  window.location.reload()
}

let toLib = () => {
  history.push('/library');
  window.location.reload()
}

let toTree = () => {
  history.push('/tree');
  window.location.reload()
}

function Footer() {
  return (
    <div className='footer'>
      <div className='lib-bg'>
        <img src={lib_bg} alt="" className='lib-bg-img' />
      </div>
      <div className='swicth-to-tree'
        onClick={toTree}
      >
        <div className='tree-content'>
          <div className='tree-img'>
            <img src={tree} alt="" />
          </div>
          <div> 心情树</div>
        </div>
      </div>
      <div className='swicth-to-lib'
        onClick={toLib}
      >
        <div className='lib-content'>
          <div className='lib-img'>
            <img src={lib} alt="" />
          </div>
          <p>故事馆</p>
        </div>
      </div>
      <div
        className='swicth-to-mine'
        onClick={toMine}
      >
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