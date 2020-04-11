import { combineReducers } from 'redux'
import tokenStorage from './token'
import userInfo from './mine/ueserInfo'

const windApp = combineReducers(
  {
    tokenStorage,
    userInfo
  }
)

export default windApp