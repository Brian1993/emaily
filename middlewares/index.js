const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const keys = require('../config/keys')

function initMiddleWare (app) {
  app.use([
    bodyParser.json(),
    cookieSession({
      // we want this cookie to last 30 days
      maxAge: 30 * 24 * 60 * 60 * 1000,
      keys: [keys.cookieKey]
    }),
    passport.initialize(),
    passport.session()
  ])
}

module.exports = {
  initMiddleWare: initMiddleWare,
  checkLogin: require('./checkLogin'),
  checkCredits: require('./checkCredits')
}