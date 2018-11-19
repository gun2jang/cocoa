const express = require('express')
const router = express.Router()
let Teacher = require('../models/Teacher')
const util = require('../util')

router.post('/', function(req, res) {
  Teacher.create(req.body, function (err, teachers) {
		if (err) {
      req.flash('user', req.body)
      req.flash('errors', util.parseError(err))
      return res.json(err)
		}
		res.redirect('/teachers')
	})
})
module.exports = router