const express = require('express')
const router = express.Router()
let Course = require('../models/Course')
const util = require('../util')

router.post('/', function(req, res) {
  Course.create(req.body, function (err, user) {
		if (err) {
      req.flash('user', req.body)
      req.flash('errors', util.parseError(err))
      return res.json(err)
		}
		res.redirect('/courses')
	})
})
module.exports = router