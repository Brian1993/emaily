import ACTION_TYPES from './actionTypes'

export const setUser = (user) => {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: user
  }
}
