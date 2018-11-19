const mongoose = require('mongoose')
const util = require('../util')

// schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required!']
  },
  content: {
    type: String, 
    required: [true, 'Body is required!']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date
  },
  viewCount: {
    type: Number,
    default: 0
  },
  username: {
    type: String,
    default: 'anonymous'
  },
  like: {
    type: Number,
    default: 0
  }
}, {
  toObject: { virtuals: true }
})

postSchema.virtual('createdDate')
  .get(function () {
    return util.getDate(this.createdAt)
  })

postSchema.virtual('createdTime')
  .get(function () {
    return util.getTime(this.createdAt)
  })

// model & export
let Post = mongoose.model('post', postSchema)
module.exports = Post
