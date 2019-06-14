import axios from 'axios'
import { setUser } from './actions'

export const fetchUser = () => async (dispatch) => {
  try {
    const { data: { _id } } = await axios.get('/api/current_user')
    dispatch(setUser(_id))
  } catch (e) {
    console.error('Error occured at fetchUser:', fetchUser)
  }
}
