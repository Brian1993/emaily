import React from 'react'

const Field = ({ input, label,  meta: { error, touched } }) => {
  return (
    <div className='form-group has-error'>
      <label  className='bmd-label-floating'>{label}</label>
      <input 
        className='form-control' 
        id='exampleInputEmail1'
        {...input}
      />
       <span style={{color: 'red'}}>{touched && error}</span>
    </div>
  )
}

export default Field