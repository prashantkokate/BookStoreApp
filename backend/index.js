const express=require('express')
const app=express()
const port=3005;
const cors=require('cors')
const mongoose=require('mongoose')
const router=require('./routes/bookroutes')
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/book',router)
mongoose.connect('mongodb+srv://kokatepk:kokatepk123@cluster0.c0nmotk.mongodb.net/?retryWrites=true&w=majority').then(()=>
console.log('connected to database')).then(()=>{
    app.listen(process.env.PORT || port,()=>{console.log(`listining on ${port}`)})
}).catch((err)=>console.log(err))