import ACTION_TYPES from './actionTypes'

export function setSurvey (surveys) {
  return {
    type: ACTION_TYPES.SET_SURVEYS,
    payload: surveys
  }
}