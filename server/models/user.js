const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    minLength: 3,
    unique: true,
    required: true,
  },
  passwordHash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  ],
})

/* eslint-disable */
userSchema.set('toJSON', {
  trasnform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})
/* eslint-enable */

userSchema.plugin(uniqueValidator)

module.exports = mongoose.model('User', userSchema)
