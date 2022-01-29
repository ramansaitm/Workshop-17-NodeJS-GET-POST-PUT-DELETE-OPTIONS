const express=require('express')
const mongoose =require('mongoose')
const dotenv=require('dotenv').config()
const router =require('./routes/index')
const bodyparser=require('body-parser')
const morgan=require('morgan')
const expressvalidator=require('express-validator')
const bodyParser = require('body-parser')
const app=express()



//midlware
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(expressvalidator())
app.use('/',router)

//mangoose is connected
mongoose.connect(process.env.MONGO_URI, {useNewURLParser: true} ).then(()=> console.log("DB connected"))
mongoose.connection.on('error',err => { console.log(`DB connection error: ${err.message}`);})

//express server created
const port =process.env.port || 5000

app.listen(port,()=>{
    console.log("hi server is running now ")
})