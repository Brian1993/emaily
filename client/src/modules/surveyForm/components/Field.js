import React from 'react'
import PropsType from 'prop-types'

const Field = ({ input, label, meta: { error, touched } }) => {
  return (
    <div className='form-group has-error'>
      <label className='bmd-label-floating'>{label}</label>
      <input
        className='form-control'
        id='exampleInputEmail1'
        {...input}
      />
      <span style={{ color: 'red' }}>{touched && error}</span>
    </div>
  )
}

Field.propTypes = {
  // input property from redux-form ex: name, onChange
  input: PropsType.object.isRequired,
  // field label
  label: PropsType.string.isRequired,
  // redux-form field property
  meta: PropsType.object.isRequired
}

export default Field
