import _ from 'lodash'


function notEmpty (fieldValue) {
  return !_.isEmpty(_.trim(fieldValue))
}

export function validateEmail (emails) {
  const emailList = _.map(_.split(emails), _.trim)
  const checkEmailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const invaildEmails = _.filter(emailList, email => !checkEmailRegex.test(email))
  const isPass = _.every(invaildEmails, _.isEmpty)
  return !isPass
    ? `These email are invaild: ${invaildEmails}` 
    : null
}

const methodMap = {
  notEmpty
}

const errorMsgMap = {
  notEmpty: 'You must provide a value'
} 

export function validate (fieldValidationMap, values) {
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