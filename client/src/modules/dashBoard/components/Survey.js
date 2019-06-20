import React from 'react'

const survey = (props) => {
  
  const { dataSent, title, subject, body, yes, no } = props.survey
  const sentDate = new Date(dataSent).toLocaleDateString()
  return (
    <div className='card text-white card text-center bg-dark mt-2 mb-2'>
      <div className='card-header'>
        {title}
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{subject}</h5>
        <p className='card-text'>{body}</p>
        <a className='btn btn-'>Yes: {yes}</a>
        <a className='btn btn-primary'>No: {no}</a>
      </div>
      <div className='card-footer'>
        <small className='text-muted'>Date Sent:  {sentDate}</small>
      </div>
    </div>

  )
}

export default survey
