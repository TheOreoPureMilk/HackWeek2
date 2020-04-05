import { combineReducers } from 'redux'
import loginLoad from './loading'
import registerLoad from './registering'
import Changeloadmes from './loadmes'

const windApp = combineReducers(
  {
    loginLoad,
    registerLoad,
    Changeloadmes
  }
)

export default windApp