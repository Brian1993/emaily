import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import Payment from './Payment'
import '../style.scss'

class Header extends Component {
  renderContent = () => {
    const { credit } = this.props.user
    return (
      <ul className='navbar-nav ml-auto'>
        {
          !_.isEmpty(this.props.user)
          ? (
              <>
                <li className='mr-2'>
                  <button 
                    className="btn btn-primary my-2 my-sm-0"
                  >
                    <h5>Credit: {credit}</h5>
                  </button>
                </li>
                <li className='nav-item active'><Payment /></li>
                <li className='nav-item active'>
                  <a className='btn btn-outline-danger my-2 my-sm-0' href='/api/logout'>
                    Log out
                  </a>
                </li>
              </>
          )
          : (
            <li className='nav-item active'>
              <a className='btn btn-outline-info active' href='/auth/google'>
                <i className="fab fa-google" /> <span className='ml-3'>Login with google</span>
              </a>
            </li>
          )
        }
      </ul>
    ) 
  }

  render () {
    const { user } = this.props
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link
          to={user ? '/surveys' : '/'}
          className='navbar-brand'
        >
          Emaily
        </Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          {this.renderContent()}
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired
}

function selector (state) {
  return {
    user: state.auth.user || {}
  }
}

export default connect(selector)(Header)
