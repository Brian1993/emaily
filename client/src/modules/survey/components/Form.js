import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './Field'
import _ from 'lodash'
import { validate as validator } from 'utils'
import { validateEmail } from 'utils/validation'
import FORM_FIELDS from '../formConfig'


class Form extends Component {
  renderFields () {
    return (
      <div className='mt-4'>
        {
          _.map(FORM_FIELDS, ({ label, name }, i) => (
            <Field 
              key={i}
              label={label}
              type='text'
              name={name} 
              component={SurveyField}
            />
            )
          )
        }
      </div>
    )
  }

  render () {
    const { onSurveySubmit, handleSubmit } = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(() => onSurveySubmit())}>
          {this.renderFields()}
          <div className='row mt-4'>
            <div className='col-6' >
              <Link to='/surveys' className="btn btn-raised btn-secondary mr-5">
                <span className="align-middle mr-2">Cancel</span>
                <i className="fas fa-backspace"></i>
              </Link>
            </div>
            <div className='col-6'> 
              <button type="submit" className="btn btn-raised btn-info float-right">
                <span className="align-middle mr-2">Next</span>
                <i className='fas fa-arrow-right align-middle' />
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

function validate (values) {
  let errors = {}
  const validationMap = {
    title: ['notEmpty'],
    subject: ['notEmpty'],
    body: ['notEmpty'],
    emails: ['notEmpty']
  }
  errors = { ...validator(validationMap, values) }
  const emailError  = validateEmail(values.recipients)
  if (emailError) errors.emails =  emailError

  return errors
}


const form = {
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
}

export default reduxForm(form)(Form)
