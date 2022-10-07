import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SingleBook from './SingleBook'
const AllBooks = () => {
  const [books,setBooks]=useState([])
  useEffect(()=>{
   try{(async()=>{
    const response=await axios.get('http://localhost:3005/book')
    const data=response.data.books
    console.log(data)
    setBooks(data)
  })()}catch(err){
    console.log(err)
  }
   
  },[])  
  return (
    <>
    <div className='header'>
   <Link to='/allbooks'><button>All-Books</button></Link>
   <div className='books'>
    {books.map((el,id)=>{
      return<div className='book' ><SingleBook id={el._id} name={el.name} author={el.author} description={el.description} price={el.price} image={el.image} available={el.available}/></div>
    })}
   </div>
  </div>
  </>
  )
}

export default AllBooks