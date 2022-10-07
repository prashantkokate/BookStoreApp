import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const AddBook = () => {
 const [name,setName]=useState('') 
 const [author,setAuthor]=useState('') 
 const [description,setDescription]=useState('') 
 const [price,setPrice]=useState('') 
 const [image,setImage]=useState('') 
 const [available,setAvailable]=useState(false)
 const addBookHandler=(e)=>{
  e.preventDefault();
 
 (async()=>{
    await axios.post('http://localhost:3005/book',{name,author,description,price,image,available})
  })();
  alert(`Added book sucessfully go-back`)
} 
  
  return (
    <>
   
    <div className='header'>
      <Link to='/addbook'><button>Add-BOOK</button></Link>
    </div>
    <div className='header'>
    <Link to='/'><button>GoBACK</button></Link>
    </div>
    <form className='form' onSubmit={addBookHandler}>
    <input type='text' placeholder='Book Name'value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type='text' placeholder='Author Name'value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    <input type='text' placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <input type='text' placeholder='Description' value={description}onChange={(e)=>setDescription(e.target.value)}/>
    <input type='text' placeholder='URL'value={image} onChange={(e)=>setImage(e.target.value)}/>
    <input type='checkbox'checked={available} onChange={()=>setAvailable(!available)}></input>
    <label>available</label><button type='submit'>Add Book</button>
   </form>
    </>
  )
}

export default AddBook