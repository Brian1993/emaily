const mongoose = require('mongoose')
const { Schema } = mongoose

const recipientSchema = new Schema({
  email: String,
  reponded: { type: Boolean, default: false }
})

module.exports = recipientSchema
