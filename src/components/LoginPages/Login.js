import React from 'react'
import './login&signup.css'
export default function Login() {
  return (
   <>
   <div className='box'>
  
   <div className='Login-page'>
   <h2>LogIn</h2>
    <label>Name</label>
    <input placeholder='usename'/>
    <label>Password</label>
    <input type={'password'} placeholder="password"/>
    <button className='login-btn'>LogIn</button>
   </div>
   </div>
   </>
  )
}
