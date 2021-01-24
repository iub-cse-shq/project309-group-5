var mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accounttype: {
    type: String,
    required: true
  }
})
var User = mongoose.model('User', UserSchema)
module.exports = User
