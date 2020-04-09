import { combineReducers } from 'redux'
import tokenStorage from './token'

const windApp = combineReducers(
  {
    tokenStorage
  }
)

export default windApp