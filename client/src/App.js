import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './modules/header'
import { Landing } from './modules/landing'
import { fetchUser } from 'share/auth/thunk'
const DashBoard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }
  render () {
    return (
      <div className='container'>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={DashBoard} />
            <Route path='/surveys/new' exact component={SurveyNew} />
          </div>
        </Router>
      </div>
    )
  }
}

const actions = {
  fetchUser
}
export default connect(null, actions)(App)
