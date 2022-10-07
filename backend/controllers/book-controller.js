const book=require('../model/book')
const getAllBooks= async(req,res)=>{
    let books;
    try{
        books= await book.find()
    }catch(err){
        console.log(err)
    }
    if(!books){
        res.status(404).json({message:'not products found'})
    }
    res.status(200).json({books})
};
const getById= async(req,res)=>{
    const id=req.params.id
    let book1;
    try{
        book1=await book.findById(id)
    }catch(err){
        console.log(err)
    }
    if(!book1){
      return res.status(404).json({message:'not book found'})
    }
    return res.status(200).json({book1})
}
const addBook= async(req,res)=>{
    let addbook;
    const {name,author,description,price,image,available}=req.body
    try{
        addbook=new book({
            name,author,description,price,image,available
        }); 
        await addbook.save()
    }catch(err){
        console.log(err)
    }
    if(!addbook){
        return res.status(500).json({message:'unable to add'})
    }
    return res.status(200).json({addbook})
}
const updateBook= async(req,res)=>{
    const id=req.params.id;
    const {name,author,description,price,image,available}=req.body;
    let updatebook;
    try{
        updatebook=await book.findByIdAndUpdate(id,{name,author,description,price,image,available})
        updatebook= await book.save()
    }catch(err){
        console.log(err)
    }
    if(!updatebook){
        return res.status(404).json({message:'unable to update'})
    }
    return res.status(200).json({updatebook})
}
const deleteBook= async(req,res)=>{
    const id=req.params.id;
    let deletebook;
    try{
        deletebook=await book.findByIdAndDelete(id)
    }catch(err){
        console.log(err)
    }
    if(!deletebook){
        return res.status(404).json({message:'not found'})
    }
    return res.status(200).json({message:'deleted sucessfully'})
}
exports.getAllBooks=getAllBooks 
exports.addBook=addBook
exports.getById=getById
exports.updateBook=updateBook
exports.deleteBook=deleteBook