module.exports = app => {
  require('./authRoutes')(app)
  require('./billingRoute')(app)
  require('./surveyRoute')(app)
}

