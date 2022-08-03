import React from 'react'

export default function Signein() {
  return (
   <>
    <div className='box signup-page-box'>
  <div className='Login-page signup-page'>
  <h2>SignUp</h2>
   <label>Frist Name</label>
   <input placeholder='First Name'/>
   <label>Last Name</label>
   <input placeholder='Last Name'/>
   <label>Email</label>
   <input type={'email'} placeholder="abcd@gmail.com"/>
   <label>Password</label>
   <input type={'password'} placeholder="password"/>
   <button className='login-btn'>LogIn</button>
  </div>
  </div>
   </>
  )
}
