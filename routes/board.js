// routes/board.js

const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

// Index
router.get('/', function (req, res) {
  Post.find({})
    .sort('-createdAt')
    .exec(function (err, posts) {
      if (err) return res.json(err)
      res.render('home/board', {
        username: req.user.username,
        posts : posts.slice(0, 11)
      })
      console.log((posts.slice(0,11))[0].title)
    })
})

// enter to write
router.get('/write', function (req, res) {
  res.render('board/write', {
    username: req.user.username
  })
})

// create
router.post('/', function (req, res) {
  Post.create(req.body, function (err, post) {
    if (err) return res.json(err)
    res.redirect('/board')
  })
})

// show
router.get('/:id', function (req, res) {
  Post.findOne({ _id: req.params.id }, function (err, post) {
    console.log(post)
    post.viewCount++
		console.log(req.user)
    if (err) return res.json(err)
    res.render('board/show', { 
			post: post,
			username : req.user.username
		 })
  })
})

module.exports = router
