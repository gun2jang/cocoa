const express = require('express')
const router = express.Router()
const passport = require('../config/passport')
const Course = require('../models/Course')
const Teacher = require('../models/Teacher')
const Package = require('../models/Package')

// HOME
router.get('/', function(req, res) {
  Package.find({})
    .sort('-star')
    .exec(function (err, packages){ 
      Course.find({isBest:true})
        .sort('star')
        .exec(function (err, courses){ 
          if (err) return res.json(err)
          console.log(courses)
          res.render('home/mainpage', {
            courses : courses,
            username : req.body.username,
            packages : packages
          })
    })
  })
})
// Login again page
router.get('/loginagain', function (req, res) {
  res.render('home/loginagain')
})


// Post Login
router.post('/login',
  function (req, res, next) {
    passport.authenticate('local-login', function (err, user, info) {
      if (err) { return next(err) }
      if (!user) { return res.redirect('/') }
      req.logIn(user, function (err) {
        if (err) { return next(err) }
        // return res.redirect('/?username=' + user.username)
        Package.find({})
        .sort('-star')
        .exec(function (err, packages){ 
          Course.find({isBest:true})
            .sort('star')
            .exec(function (err, courses){ 
              if (err) return res.json(err)
              console.log(courses)
              res.render('home/mainpage', {
                courses : courses,
                username : req.body.username,
                packages : packages
              })
        })
      })
      })
    })(req, res, next)
  }
)

// fail
router.get('/fail', (req, res) => {
  res.render('special/fail')
})
// Logout
router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// books
router.get('/books', function (req, res) {
  res.render('home/books', {
    username: req.user.username
  })
})

// courses
router.get('/courses', function (req, res) {
  Course.find({})
    .sort('star')
    .exec(function (err, courses){ 
      if (err) return res.json(err)
      console.log(courses)
      res.render('home/courses', {
        courses : courses,
        username : req.body.username
      })
    })
})

// teachers
router.get('/teachers', function (req, res) {
  Teacher.find({})
    .sort('-star')
    .exec(function (err, teachers) { 
    res.render('home/teachers', {
      username: req.body.username,
      teachers : teachers
    })
  })
})

// packages
router.get('/packages', function (req, res) {
  Package.find({})
    .sort('-star')
    .exec(function(err, packages) {
      res.render('home/packages', {
        username: req.body.username,
        packages : packages
      })
    })
})

router.post('/packages', function(req, res) {
  Package.create(req.body, function (err, packages) {
		if (err) {
      req.flash('user', req.body)
      req.flash('errors', util.parseError(err))
      return res.json(err)
		}
		res.redirect('/packages')
	})
})

module.exports = router
