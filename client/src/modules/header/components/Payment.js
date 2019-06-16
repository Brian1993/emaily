import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import { handleToken } from 'share/auth/thunk'
class Payment extends Component {
  render () {
    const { handleToken } = this.props
    return (
      <div className='mr-2'>
        <StripeCheckout
          name='Emaily'
          description='$5 for 5 email credits'
          // the default currency is US dollar
          amount={500}
          token={token => handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
          <button className='btn btn-outline-success active'>Add Credits</button>
        </StripeCheckout>
      </div>
    )
  }
}

Payment.propTypes = {
  handleToken: PropTypes.func.isRequired
}
const actions = {
  handleToken
}
export default connect(null, actions)(Payment)
