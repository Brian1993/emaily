import { methodMap, errorMsgMap } from './validation'
import _ from 'lodash'

/**
 * @param {object} fieldValidationMap [field]: [rules of field need to run]
 * @param {object} values             redux-form [fieldName]: [value]
 */
export default function validateAll (fieldValidationMap, values) {
  const rules = composeRules(fieldValidationMap, values, methodMap)
  const result = validate(rules)
  const failMethodByName = getFailRules(result)
  return composeErrMsg(failMethodByName)
}

function composeErrMsg (failMethodByName) {
  const errorArray = _.map(failMethodByName, (fail, name) => ({
    [name]: getErrorMsg(fail.failMethod)
  }))
  return _.assign(...errorArray)
}

function getErrorMsg (failMethodName) {
  return !errorMsgMap[failMethodName]
    ? `Can't find error message of ${failMethodName}`
    : errorMsgMap[failMethodName]
}

function getFailRules (result) {
  return _(result)
    .map(r => ({
      name: r.name,
      failMethod: _(r.resultByMethod).reject('isPass').first()
        ? _(r.resultByMethod).reject('isPass').first().methodName
        : ''
    }))
    .reject(resultArray => resultArray.failMethod === '')
    .keyBy('name')
    .value()
}

function validate (rules) {
  const validateResults = _.map(rules, rule => {
    return {
      name: rule.name,
      resultByMethod: doMethods(rule)
    }
  })
  return validateResults
}

function doMethods ({ fieldValue, methods }) {
  return _(methods)
    .map(({ methodName, validationMethod }) => {
      return ({
        methodName,
        isPass: validationMethod(fieldValue)
      })
    })
    .keyBy('methodName')
    .value()
}

function composeRules (fieldValidationMap, values, methodMap) {
  return _(fieldValidationMap)
    .map((methods, fieldName) => ({
      name: fieldName,
      fieldValue: values[fieldName] || '',
      methods: getMethods(methods, methodMap)
    }))
    .keyBy('name')
    .value()
}

function getMethods (methods, methodMap) {
  return _(methods)
    .map(method => {
      const validationMethod = methodMap[method]
      if (!validationMethod) return console.error(`Method not Found: ${method}`)
      return {
        methodName: method,
        validationMethod
      }
    })
    .compact()
    .keyBy('methodName')
    .value()
}