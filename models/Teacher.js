const mongoose = require('mongoose')

// schema
const teacherSchema = new mongoose.Schema({
  name: {
    type: String, 
  },
  star: {
		type: Number,
		default: 0
	},
	subject: {
		type: String
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
let Teacher = mongoose.model('teacher', teacherSchema)
module.exports = Teacher
