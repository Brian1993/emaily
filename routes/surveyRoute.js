const mongoose = require('mongoose')
const { checkLogin, checkCredits } = require('../middlewares')

const Mailer = require('../sevices/Mailer')
const Survey = mongoose.model('surveys')
const surveyTemplate = require('../sevices/emailTemplates/survey')

module.exports = app => {
  app.post('/api/surveys', checkLogin, checkCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dataSent: Date.now()
    })

    const mailer = new Mailer(survey, surveyTemplate(survey))

    mailer.send().catch(e => console.log(e))
  })
}