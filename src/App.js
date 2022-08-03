import React from 'react'

import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import LoginPage from './components/LoginPages/Login'
import Home from './components/Home'
import Signin from './components/LoginPages/Signein'
export default function App() {
  return (
   <>  
   <Router>
   <Navbar/> 
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/login" element={<LoginPage/>}/>
   <Route exact path="/signin" element={<Signin/>}/>
   </Routes>
 </Router>
    </>
  )
}
