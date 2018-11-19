const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

// schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required!'],
    trim: true,
    unique: true,
    default : ''
  },
  password: {
    type: String,
    required: [true, 'Password is required!'],
  }
}, {
  toObject: { virtuals: true }
})

// // model methods
userSchema.methods.authenticate = function (password) {
  // console.log(this)
  // console.log(this.model('user').password ? this.password : '1234')
  console.log('pass check ' + this.password + password)
  let user = this
  return password === user.password
  // return bcrypt.compareSync(password, user.password)
}

// model & export
let User = mongoose.model('user', userSchema)
module.exports = User
