import _ from 'lodash'

function notEmpty (fieldValue) {
  return !_.isEmpty(_.trim(fieldValue))
}

function mustEmailFormat (email) {
  const checkEmailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return checkEmailRegex.test(email)
}

function validateEmailList (emails) {
  const emailList = _.map(_.split(emails), _.trim)
  const invaildEmails = _.filter(emailList, email => !mustEmailFormat(email))
  const isPass = _.isEmpty(invaildEmails)
  return isPass
}

export const methodMap = {
  notEmpty,
  validateEmailList
}

export const errorMsgMap = {
  notEmpty: 'You must provide a value',
  validateEmailList: 'Email format is invalid'
}
