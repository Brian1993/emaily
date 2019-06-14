import ACTION_TYPES from './actionTypes'

export const setUser = (id) => {
  return {
    type: ACTION_TYPES.SET_USER,
    payload: id
  }
}
