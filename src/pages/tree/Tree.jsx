import React from 'react'
import WeekList from './components/WeekList'
import "./Tree.css"
import fristTree from './tree_bg_small'

function Tree(props) {
  return (
    <div className='tree-body'>
      <div className='week-list'>
        <WeekList />
      </div>
    </div>
  )
}

export default Tree