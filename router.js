const express = require('express');
const router = express.Router();
const mongoose =require('mongoose');
const Todo = require('./model');

// Getting all
router.get('/', (req, res) => {
  Todo.find()
  .then((todos)=> {res.json(todos)});
})

//Getting One
router.get('/:id', (req, res) => {
  Todo.findById(req.params.id)
  .then((todo)=> {res.json(todo)});
})

// Creating one
router.post('/', async (req, res) => {
  const todolist = new Todo({
    id:req.body.id,
    name: req.body.name,
    email:req.body.email
  })
  todolist.save()
  .then((todoitem)=> {
    res.json(todoitem)
  })
})

// Updating One
router.patch('/:id', async (req, res) => {

  Todo.findByIdAndUpdate(req.params.id, {
    id:req.body.id,
    name:req.body.name,
    email:req.body.email
  })
  .then((todoupdate)=> res.json(todoupdate));

})

router.delete('/:id', (req,res,next)=> {
  Todo.findByIdAndDelete(req.params.id)
  .then(()=> res.json("Deleted"))
})

module.exports = router