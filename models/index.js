const userSchema  = require('./User')
const surveySchema = require('./Survey')

function loadSchema () {
  return [
    userSchema,
    surveySchema
  ]
}

const initModels = mongoose => {
  console.log('initModels')
  const schemaArray = loadSchema()
  schemaArray.forEach(schema => {
    mongoose.model(schema.name, schema.schema)
  })
}

module.exports = initModels