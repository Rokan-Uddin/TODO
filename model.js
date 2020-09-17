const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true
  },
  iscomplete: {
    type:Boolean,
    required:true,
    default:false
  },
  subscribeDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Todo', todoSchema)