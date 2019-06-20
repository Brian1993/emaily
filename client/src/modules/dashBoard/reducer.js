import { createSwitch } from 'utils'
import ACTION_TYPES from './actionTypes'

const instialState = {
  surveys: []
}

const setSurvey = (state = instialState, { payload }) => {
  return { ...state, surveys: [ ...state.surveys, ...payload ] }
}

const switchAction = createSwitch({
  [ACTION_TYPES.SET_SURVEYS]: setSurvey
})

export default (state = instialState, action) => {
  return switchAction(state, action)
}
