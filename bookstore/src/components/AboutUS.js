import React from 'react'
import { Link } from 'react-router-dom'

const AboutUS = () => {
  return (
    <div className='header'>
      <Link to='/aboutus'><button>About-US</button></Link>&nbsp;&nbsp;
      <Link to='/allbooks'><button>GoBACK</button></Link>
    <h3>Since its fuse in 2005, Company Name has cut a specialty for itself in the youngsters’ books section
       of the distributing business. We have some expertise in books implied for offspring of various ages.</h3> 
       <img src='https://hips.hearstapps.com/hmg-prod/images/elliott-bay-books-capitol-hill-interior-04-1628225296.jpeg' alt=''/>
       <h3>The wide scope of books offered by us incorporates fantasies, moral stories, showed storybooks, reference books, general learning books, sentence structure books, shading books, action books, sticker books, and some more. Every one of these books is accessible in both English and Hindi.
       Our point is to give significant, charming, and also animating substance to youngsters that go much past their normal course books. With this point in view, we treat each book as a work of adoration. Every one of our books is broadly examined, attentively composed, and delightfully planned.</h3>
      </div>
  )
}

export default AboutUS