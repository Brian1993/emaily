import React from 'react'
import Form from './Form'
import FormReview from './FormReview'

class Survey extends React.Component {
  state = {
    isShowReview: false
  }

  render () {
    return (
      <div>
        {
          this.state.isShowReview 
          ? <FormReview onCancel={() => this.setState({ isShowReview: false })} />
          : <Form onSurveySubmit={() => this.setState({ isShowReview: true })} />
        }
      </div>
    )
  }
}

export default Survey
