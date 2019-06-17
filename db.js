const keys = require('./config/keys')

const ininDB = (mongoose) => {
  console.log('conneting MongoDB')
  mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(res => console.log('DB connected'))
    .catch(err => console.log('DB connect fail: ', err))
}

module.exports = ininDB