import { createSwitch } from 'utils'
import ACTION_TYPES from './actionTypes'

const instialState = []

const setSurvey = (state, { payload }) => {
  return { ...state, ...payload }
}

const switchAction = createSwitch({
  [ACTION_TYPES.SET_SURVEYS]: setSurvey
})

export default (state = instialState, action) => {
  return switchAction(state, action)
}
