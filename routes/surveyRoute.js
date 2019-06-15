const { checkLogin, checkCredits } = require('../middlewares')

module.exports = app => {
  app.post('/api/surveys', checkLogin, checkCredits, (req, res) => {
    
  })
}