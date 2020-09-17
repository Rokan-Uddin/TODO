const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  id: {
    type:String
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', todoSchema)