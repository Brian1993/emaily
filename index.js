const express = require('express')
const mongoose = require('mongoose')
const initModels = require('./models')
const initDB = require('./db')
const { initMiddleWare } = require('./middlewares')
const initRoute = require('./routes')

initModels(mongoose)
// pull out user model
require('./sevices/passport')

initDB(mongoose)

const app = express()

initMiddleWare(app)

initRoute(app)

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production asssets
  // like our main.js file or main.css file
  app.use(express.static('client/build'))

  // Express will serve up the index.html file
  // if it doesn't recogonize the route
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000
app.listen(PORT)
