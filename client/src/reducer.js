import { combineReducers } from 'redux'
import { authReducer } from 'share/auth'

export default combineReducers({
  auth: authReducer
})
