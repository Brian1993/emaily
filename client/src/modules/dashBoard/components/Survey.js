import React from 'react'

const survey = (props) => {
  
  const { dataSent, title, subject, body, yes, no } = props.survey
  const sentDate = new Date(dataSent).toLocaleDateString()
  return (
    <div className='card text-white card bg-secondary mt-2 mb-2'>
      <div className='card-header'>
        {title}
      </div>
      <div className='card-body row'>
        <div className='col-6'>
          <h5 className='card-title'>Subject: {subject}</h5>
          <p className='card-text'>Content: {body}</p>
        </div>
        <div className='col-6'>
          <div className='col-6 ml-auto'>
            <button className='btn btn-primary btn-outline-light mr-2'>No: {no}</button>
            <button className='btn btn-primary btn-outline-light'>Yes: {yes}</button>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <small className='text-muted'>Date Sent:  {sentDate}</small>
      </div>
    </div>

  )
}

export default survey
