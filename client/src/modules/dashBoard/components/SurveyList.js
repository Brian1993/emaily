import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import Survey from './Survey'
import { fetchSurveys } from '../thunks'

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys()
  }

  renderSurveys () {
    return _.map(this.props.surveys.reverse(), (survey, i) =>  <Survey key={i} survey={survey} /> )
  }

  render () {
    return (
      <div className='pd-2'>
        {this.renderSurveys()}
      </div>
    )
  }
}

SurveyList.propTypes = {
  surveys: PropTypes.array.isRequired
}

function selector (state) {
  const { dashBoard: { surveys } } = state
  return { surveys }
}

const actions = {
  fetchSurveys
}

export default connect(selector, actions)(SurveyList)

