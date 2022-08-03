import React from 'react'

import '../Navbar/Navbar.css'

import {Link} from 'react-router-dom'
export default function Navbar() {
 
  return (
    <>
    <div className='Navbar'>
    <div className='shopnow-img'>
        <h2>ShopNow</h2>
    </div>
    <div className='shopping-items'>
        <Link to='/'>Men</Link>
        <Link to='/' >Women</Link>
        <Link to='/' >Kids</Link>
   
    </div>
    <div className='shopping-icons'>
    <i class="bi bi-search"></i>
    <i class="bi bi-cart"></i>
    <i class="bi bi-person"></i>
    </div>
    </div>
    <div className='login-signup-div'>
    <Link className='login-signup-btn' to='/login'>Login</Link>
      <Link className='login-signup-btn' to='/signin'>signin</Link>
    </div>
   
    </>
  )
}
