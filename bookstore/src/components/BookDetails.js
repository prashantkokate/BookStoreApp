import axios from 'axios'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetails = () => {
 const {id}=useParams()
 const [name,setName]=useState('') 
 const [author,setAuthor]=useState('') 
 const [description,setDescription]=useState('') 
 const [price,setPrice]=useState('') 
 const [image,setImage]=useState('') 
 const [available,setAvailable]=useState(false)
 console.log(id)
  const handleSubmit=(e)=>{
    e.preventDefault();
    (async()=>{
    await axios.put(`http://localhost:3005/book/${id}`,{name,author,description,price,image,available})
   
  })();
  alert(`updated sucessfully go-back`)
  }
return (
    <div>
        <h2>Update Book</h2>
        <div>
        </div>
    <form className='form' onSubmit={handleSubmit}>
    <input type='text' placeholder='Book Name'value={name} onChange={(e)=>setName(e.target.value)}/>
    <input type='text' placeholder='Author Name'value={author} onChange={(e)=>setAuthor(e.target.value)}/>
    <input type='text' placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
    <input type='text' placeholder='Description' value={description}onChange={(e)=>setDescription(e.target.value)}/>
    <input type='text' placeholder='URL'value={image} onChange={(e)=>setImage(e.target.value)}/>
    <input type='checkbox'checked={available} onChange={()=>setAvailable(!available)}></input>
    <label>available</label><button type='submit'>Update Book</button>
   </form>
        </div>
    
  )
}

export default BookDetails