import { setUser } from 'share/auth/actions'
import axios from 'axios'

export const submitSurvey = (values, history) => async (dispatch) => {
  const { data } = await axios.post('/api/surveys', values)
  history.push('/surveys')
  dispatch(setUser(data))
}