require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const app=express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db=mongoose.connection;
db.on('error', (error)=> console.log(error) );
db.once('open', ()=> console.log("database Connected") );

// app.get('/', (req,res,next)=> {
// 	res.send("Hello world");
// })
app.use(express.json())

const todoRouter = require('./router')
app.use('/todos', todoRouter)

app.listen(3000, ()=> {
	console.log(" Server Connected ");
})