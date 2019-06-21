import { methodMap, errorMsgMap } from './validation'
import _ from 'lodash'

//
/**
 * TODO: ADD validation sequence to make sure that once one of the rule fail , validation process will stop
 * @param {object} fieldValidationMap [field]: [rules field need to run]
 * @param {object} values  redux-form values
 */
export default function validate (fieldValidationMap, values) {
  const errors = {}

  const fields = _.keys(fieldValidationMap)
  _.forEach(fields, field => {
    const validationMethods = fieldValidationMap[field] || []
    _.map(validationMethods, methodName => {
      const method = methodMap[methodName]
      const isPass = method(values[field])
      if (!isPass) {
        const errorMsg = errorMsgMap[methodName]
        errors[field] = errorMsg
      }
    })
  })
  return errors
}
