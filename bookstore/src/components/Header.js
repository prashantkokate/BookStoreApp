import React from 'react'
import AllBooks from './AllBooks'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <div className='header'>
      <Link to='/addbook'><button>Add-BOOK</button></Link>
    </div>
    <div className='header'>
      <Link to='/aboutus'><button>About-US</button></Link>
      </div>
    <AllBooks/>
    
   </div>
  )
}

export default Header