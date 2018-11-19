let passport = require('passport')
let LocalStrategy = require('passport-local')
let User = require('../models/User')

// serialize & deserialize User
passport.serializeUser((user, done) => {
  done(null, user.id)
})
passport.deserializeUser((id, done) => {
  User.findOne({ _id: id }, (err, user) => {
    done(err, user)
  })
})

// local strategy
passport.use('local-login',
  new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, username, password, done) {
    User.findOne({ username: username })
      .select('username password')
      .exec(function (err, user) {
        // console.log(user)
        if (err) return done(err)
        if (user && user.authenticate(password)) {
          console.log(user)
          return done(null, user)
        } else {
          req.flash('username', username)
          // console.log('passport.js' + user)
          req.flash('errors', { login: 'Incorrect username or password' })
          return done(null, false)
        }
      })
  }
  )
)

module.exports = passport
