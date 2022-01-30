const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please give a name']
  },
  email: {
    type: String,
    required: [true, 'please give a email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'please enter valid email address']
  },
  photo: String,
  password: {
    type: String,
    required: [true, 'please provide a password'],
    minlength: 8
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm your password'],
    validate: {
      validator: function(val) {
        return val === this.password
      },
      message: 'Password is mismatched, enter valid one'
    }
  }
})

/* between get data and post to db */
userSchema.pre('save', async function(next) {
  // Only run this function if password was actually modified
  console.log('middle od document ---', this)
  if (!this.isModified('password')) return next()

  // Hash the password with cost of 12, ,hash is asynchronous method
  this.password = await bcrypt.hash(this.password, 12)

  // Delete passwordConfirm field
  this.passwordConfirm = undefined
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
