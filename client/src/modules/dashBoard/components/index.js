import React from 'react'
import { Link } from 'react-router-dom'
import SurveyList from './SurveyList'

const DashBoard = () => {
  const position = { 
    position: 'fixed',
    bottom: '80px',
    right: '80px',
  }
  const btnSize = {
    width: '5rem',
    height: '5rem',
    fontSize: '30px',
    display: 'block',
    paddingTop: '28px'
  }
  return (
    <div>
      <SurveyList />
      <div style={position}>
        <Link
          to='/surveys/new'  
          className="btn btn-info bmd-btn-fab" 
          style={btnSize}
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
}

export default DashBoard
