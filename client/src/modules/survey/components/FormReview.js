import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import _ from 'lodash'
import FORM_FIELDS from '../formConfig'
import { submitSurvey } from '../thunks'

const FormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(FORM_FIELDS, ({ name, label }, i) => (
    <div key={i} className='form-group'>
      <label style={{ color: 'rgba(0,0,0,.26)' }} className='h6'>{label}</label>
      <input
        type='text'
        className='form-control'
        value={formValues[name]}
        readOnly
      />
    </div>
  ))

  return (
    <form className='mt-5'>
      <fieldset disabled>
        <h5>Please comfirm your entries</h5>
        {reviewFields}
      </fieldset>
      <div className='row'>
        <div className='col-6'>
          <button className='btn btn-raised btn-secondary mr-5' onClick={onCancel}>
            <span className='align-middle mr-2'>Back</span>
            <i className='fas fa-backspace' />
          </button>
        </div>
        <div className='col-6'>
          <button
            type='button'
            className='btn btn-raised btn-info mr-5 float-right'
            onClick={() => submitSurvey(formValues, history)}
          >
            <span className='align-middle mr-2'>Send Survey</span>
            <i className='fas fa-paper-plane' />
          </button>
        </div>
      </div>
    </form>
  )
}

function selector (state) {
  return {
    formValues: state.form.surveyForm.values
  }
}

const actions = {
  submitSurvey
}

export default connect(selector, actions)(withRouter(FormReview))
