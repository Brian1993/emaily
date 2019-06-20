import axios from 'axios'
import * as authActions from 'share/auth/actions'
import * as actions from './actions'

/**
 * 送出用戶發起的 survey 至 backend
 * @param {object}    surveyData             發起 survey 的資料
 * @param {string}    surveyData.title       survey 標題
 * @param {string}    surveyData.subject     survey 內標題
 * @param {string}    surveyData.body        survey 內文
 * @param {string[]}  surveyData.recipients  收件人email
 * @param {object}    history                withRouter 裡的 history 物件 
 */
export const submitSurvey = (surveyData, history) => async (dispatch) => {
  try {
    const { data } = await axios.post('/api/surveys', surveyData)
    history.push('/surveys')
    dispatch(authActions.setUser(data))
  } catch (e) {
    console.error('error occured at submitSurvey', e)
  }
}

/**
 * 
 */
export const fetchSurvey = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/api/surveys')
    dispatch(actions.setSurvey(data))
  } catch (e) {
    console.error('error occured at fetchSurvey', e)
  }
}
