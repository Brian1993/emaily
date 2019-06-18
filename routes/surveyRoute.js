const mongoose = require('mongoose')
const { checkLogin, checkCredits } = require('../middlewares')

const Mailer = require('../sevices/Mailer')
const Survey = mongoose.model('surveys')
const surveyTemplate = require('../sevices/emailTemplates/survey')

module.exports = app => {
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    console.log(req.body)
    res.send({})
  })

  app.post('/api/surveys', checkLogin, checkCredits, async (req, res) => {
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
    try {
      await mailer.send()
      await survey.save()
      req.user.credit -= 1
      const user = await req.user.save()

      res.send(user)
    } catch (e) {
      res.status(422).send(e)
    }
  })
}