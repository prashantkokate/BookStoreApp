const mongoose=require('mongoose')
const schema=mongoose.Schema

const bookSchema= new schema({
    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
       
    }
})
module.exports=mongoose.model('Book',bookSchema)