import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import axios from 'axios';
const SingleBook = ({id,name,author,price,description,image,available}) => {
  const history=useNavigate()
  const deleteHandler=()=>{
  (async()=>{
    await axios.delete(`http://localhost:3005/book/${id}`).then(()=>history('/allbooks')).then(()=>history('/'))
  })();
  alert(`deleted sucessfully go-back`)
 }
  return (
    <>
    
   <img src={image} alt=''/>
   <h2>{name}</h2>
   <p>{description}</p>
   <h3>Author:-{author}</h3>
   <h4>Price:-{price} Rs</h4>
   <h5>{available}</h5>
   <Link to={`/book/${id}`}><button>Update</button></Link>
   <button onClick={deleteHandler}>delete</button>
  </>
  )  
}

export default SingleBook