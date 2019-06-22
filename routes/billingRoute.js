const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const { checkLogin } = require('../middlewares')

module.exports = app => {
  app.post('/api/stripe', checkLogin, async (req, res) => {
    try {
      await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        description: '$5 for 5 credit',
        source: req.body.id
      })
      // passport already attatch user model to req
      req.user.credit += 5
      const user = await req.user.save()
      res.send(user)
    } catch (e) {
      console.error('error occured at route handler /api/stripe', e)
    }
  })
}
