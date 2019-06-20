import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { authReducer } from 'share/auth'
import { dashBoardReducer } from './modules/dashBoard'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  dashBoard: dashBoardReducer
})
