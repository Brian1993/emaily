import { createSwitch } from '../../utils'
import ACTION_TYPES from './actionTypes'

const instialState = {
  userId: ''
}

function setUser (state, { payload }) {
  return { ...state, userId: payload }
}

const switchAction = createSwitch({
  [ACTION_TYPES.SET_USER]: setUser
})

export default (state = instialState, action) => {
  return switchAction(state, action)
}
