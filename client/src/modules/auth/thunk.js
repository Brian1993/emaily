import axios from 'axios'
import { setUser } from './actions'

export const fetchUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/current_user')
    dispatch(setUser(data))
  } catch (e) {
    console.error('Error occured at fetchUser:', e)
  }
}

export const handleToken = (token) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/stripe', token)
    dispatch(setUser(data))
  } catch (e) {
    console.error('Error occured at handleToken:', e)
  }
}
