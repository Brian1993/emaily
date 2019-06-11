const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
// define user model in mongoDB
require('./models/User')
// pull out user model
require('./sevices/passport')

console.log('conneting MongoDB')
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
  .then(res => console.log('DB connected'))
  .catch(err => console.log('DB connect fail: ', err))

const app = express()

app.use(
  cookieSession({
    // we want this cookie to last 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
