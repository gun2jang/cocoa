const mongoose = require('mongoose')

// schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
	},
	subject: {
		type: String
	},
  teacher: {
    type: String, 
  },
  star: {
		type: Number,
		default: 0
  },
  follower : {
    type: Number,
    default: 0
	},
	isBest : {
		type: Boolean,
		default: true
  },
  sum : {
    type: String,
    default: ' '
  }
}, {
  toObject: { virtuals: true }
})

// virtuals
// model & export
let Course = mongoose.model('course', courseSchema)
module.exports = Course
