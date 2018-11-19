const express = require('express')
const router = express.Router()
const util = require('../util')
let User = require('../models/User')

// create
router.post('/', function (req, res) {
  User.create(req.body, function (err, user) {
    if (err) {
      req.flash('user', req.body)
      req.flash('errors', util.parseError(err))
      return res.json(err)
    }
    res.redirect('/')
  })
})

// show
router.get('/:username', function (req, res) {
  User.findOne({ username: req.params.username }, function (err, user) {
    if (err) return res.json(err)
    res.render('users/show', { user: user })
  })
})

module.exports = router
