import React from 'react'

const FormView = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button 
        type="button" 
        class="btn btn-raised btn-secondary"
        onClick={onCancel}
      >
        Back
      </button>
    </div>
  )
}

export default FormView
