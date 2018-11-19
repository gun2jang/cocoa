const mongoose = require('mongoose')

// schema
const packageSchema = new mongoose.Schema({
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
  listener : {
    type: Number,
    default: 0
	},
	price : {
		type: Number
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
let Package = mongoose.model('package', packageSchema)
module.exports = Package
