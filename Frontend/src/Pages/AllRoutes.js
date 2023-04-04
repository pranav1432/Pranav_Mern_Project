import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Navbar from '../Components/Navbar'
import SignIn from './SignIn'
import Posts from './Posts'

function AllRoutes() {
  return (
    <div>

     <Routes>
         
       <Route path='/' element={<Home/>}/>
       <Route path="/signin" element={<SignIn/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/posts" element={<Posts/>}/>

     </Routes>




    </div>
  )
}

export default AllRoutes