import * as actions from './actions'
import axios from 'axios'

/**
 * 取得 survey 列表
 */
export const fetchSurveys = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/surveys')
    dispatch(actions.setSurvey(data))
  } catch (e) {
    console.error('error occured at fetchSurvey', e)
  }
}
