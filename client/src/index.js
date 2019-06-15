import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import App from './App'
import reducers from './reducer'
import axios from 'axios'
window.axios = axios

const logger = createLogger({
  collapsed: true
})

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, logger)
)

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
)
