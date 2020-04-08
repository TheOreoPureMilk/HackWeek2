import React from 'react'
import WeekList from './components/WeekList'


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