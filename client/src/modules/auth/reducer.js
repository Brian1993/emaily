import { createSwitch } from '../../utils'
import ACTION_TYPES from './actionTypes'

const instialState = {
  user: {}
}

function setUser (state, { payload }) {
  return { ...state, user: payload }
}

const switchAction = createSwitch({
  [ACTION_TYPES.SET_USER]: setUser
})

export default (state = instialState, action) => {
  return switchAction(state, action)
}
