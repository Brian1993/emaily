const _ = require('lodash')
const Path = require('path-parser').default
const { URL } = require('url')
const mongoose = require('mongoose')
const { checkLogin, checkCredits } = require('../middlewares')

const Mailer = require('../sevices/Mailer')
const Survey = mongoose.model('surveys')
const surveyTemplate = require('../sevices/emailTemplates/survey')

module.exports = app => {
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/surveys/webhooks', (req, res) => {
    const path = new Path('/api/surveys/:surveyId/:choice')
    _.chain(req.body)
      .map(({ email, url }) => {
        // ex: 5a3rt54ee/yes
        const pathname = new URL(url).pathname
        const match = path.test(pathname)
        if (match) return { email, surveyId: match.surveyId, choice: match.choice }
      })
      .compact()
      .uniqBy('email', 'surveyId')
      .each(({ surveyId, email, choice }) => {
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        }, {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }).exec()
      })
      .value()


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
      console.error('Mail Sending error occured at: ', e)
      res.status(422).send(e)
    }
  })
}
